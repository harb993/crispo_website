/**
 * The relay: the one piece of Crispo that lives on the internet.
 *
 * WHY IT EXISTS
 *
 * The till runs in the shop, behind the shop's router, with no address anyone outside
 * can reach — and it should stay that way. So the website cannot hand an order to the
 * till directly. Instead both sides meet here:
 *
 *   the website   POSTs an order, then polls its tracking link
 *   the till      dials OUT every few seconds, collects new orders, and reports back
 *                 what happened to them (accepted, in the kitchen, with a driver…)
 *
 * Nothing about trading depends on this. The till still rings up sales with the
 * internet unplugged; web orders simply stop arriving, and the website says so —
 * because the till stops checking in, and an order is only accepted while it is.
 *
 *   GET  /api/shop                 menu + whether the kitchen is taking orders
 *   POST /api/orders               place an order          (rate limited)
 *   GET  /api/orders/:id           track it                (the id is the secret)
 *
 *   POST /api/till/sync            heartbeat + collect new orders     ┐
 *   POST /api/till/ack             "I have these"                     │ Bearer
 *   POST /api/till/status          where each order has got to        │ RELAY_TILL_KEY
 *   PUT  /api/till/menu            publish the menu                   ┘
 *
 * Zero dependencies on purpose: `node relay/server.mjs` on any machine with Node 20.
 */

import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { createHash, timingSafeEqual } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { createStore } from './store.mjs'
import {
  validateOrder, buildOrder, newOrderId, newOrderCode, applyStatus, publicView, tillView,
  validateSnapshot, cleanText, FINAL_STATUSES, LIMITS,
} from './orders.mjs'

const HERE = path.dirname(fileURLToPath(import.meta.url))

/** The till checks in every ~5s. Missing for this long and the kitchen reads as offline. */
export const TILL_STALE_MS = 45_000
/** An order the till never collected is told so, rather than left spinning forever. */
export const PENDING_TTL_MS = 10 * 60_000
const RETENTION_MS = 14 * 24 * 3600_000

const MAX_BODY = 64 * 1024
const MAX_MENU_BODY = 2 * 1024 * 1024

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
}

const SECURITY_HEADERS = {
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'x-frame-options': 'DENY',
  'permissions-policy': 'camera=(), microphone=(), geolocation=()',
}

const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

class HttpError extends Error {
  constructor(status, code, message, extra = {}) {
    super(message)
    this.status = status
    this.code = code
    this.extra = extra
  }
}

/** Fixed-window counters. Enough to stop a script hammering the order endpoint. */
function createLimiter() {
  const windows = new Map()
  const sweep = setInterval(() => {
    const now = Date.now()
    for (const [k, w] of windows) if (w.reset < now) windows.delete(k)
  }, 60_000)
  sweep.unref()
  return {
    hit(key, limit, windowMs) {
      const now = Date.now()
      let w = windows.get(key)
      if (!w || w.reset < now) {
        w = { count: 0, reset: now + windowMs }
        windows.set(key, w)
      }
      w.count++
      return w.count <= limit ? 0 : Math.ceil((w.reset - now) / 1000)
    },
    stop: () => clearInterval(sweep),
  }
}

function digest(s) {
  return createHash('sha256').update(String(s)).digest()
}

/** Compare as digests so neither the length nor the contents leak through timing. */
function keyMatches(given, expected) {
  if (!expected) return false
  return timingSafeEqual(digest(given), digest(expected))
}

export function createRelay(options = {}) {
  const opts = {
    tillKey: process.env.RELAY_TILL_KEY || '',
    dataFile: process.env.RELAY_DATA_DIR
      ? path.join(process.env.RELAY_DATA_DIR, 'relay.json')
      : path.join(HERE, '..', 'data', 'relay.json'),
    siteDir: process.env.RELAY_SITE_DIR || path.join(HERE, '..', 'dist'),
    trustProxy: process.env.TRUST_PROXY === '1',
    allowedOrigins: (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean),
    log: (...args) => console.log('[relay]', ...args),
    now: () => Date.now(),
    /** Orders per IP per 10 minutes, and reads per IP per minute. */
    orderLimit: 6,
    readLimit: 240,
    ...options,
  }

  const store = createStore(opts.dataFile)
  const limiter = createLimiter()

  // ---------- the shop's state ----------

  function shopState() {
    const { snapshot, till } = store.state
    if (!snapshot) return { open: false, reason: 'not_configured' }
    if (opts.now() - till.lastSeen > TILL_STALE_MS) return { open: false, reason: 'offline' }
    if (!till.open) return { open: false, reason: till.reason || 'closed' }
    return { open: true, reason: null }
  }

  function expirePending() {
    const now = opts.now()
    let changed = false
    for (const o of store.orders()) {
      if (o.status === 'pending' && now - Date.parse(o.createdAt) > PENDING_TTL_MS) {
        applyStatus(o, { status: 'expired' }, now)
        changed = true
        opts.log(`order ${o.code} expired — the till never collected it`)
      }
    }
    if (changed) store.save()
  }

  const housekeeping = setInterval(() => {
    expirePending()
    const dropped = store.purge(opts.now() - RETENTION_MS)
    if (dropped) opts.log(`purged ${dropped} old order(s)`)
  }, 30_000)
  housekeeping.unref()

  // ---------- plumbing ----------

  function clientIp(req) {
    if (opts.trustProxy) {
      const fwd = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim()
      if (fwd) return fwd
    }
    return (req.socket.remoteAddress || 'unknown').replace(/^::ffff:/, '')
  }

  function send(res, status, body, headers = {}) {
    res.writeHead(status, {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...SECURITY_HEADERS,
      ...headers,
    })
    res.end(JSON.stringify(body))
  }

  function readJson(req, max = MAX_BODY) {
    return new Promise((resolve, reject) => {
      const type = String(req.headers['content-type'] || '')
      if (!type.includes('application/json')) {
        reject(new HttpError(415, 'bad_request', 'JSON only'))
        return
      }
      let size = 0
      const chunks = []
      req.on('data', chunk => {
        size += chunk.length
        if (size > max) {
          reject(new HttpError(413, 'too_large', 'payload too large'))
          req.destroy()
          return
        }
        chunks.push(chunk)
      })
      req.on('end', () => {
        try {
          resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'))
        } catch {
          reject(new HttpError(400, 'bad_request', 'invalid JSON'))
        }
      })
      req.on('error', reject)
    })
  }

  function limit(req, bucket, max, windowMs) {
    const wait = limiter.hit(`${bucket}:${clientIp(req)}`, max, windowMs)
    if (wait) throw new HttpError(429, 'rate_limited', 'طلبات كثيرة — حاول بعد قليل', { retryAfter: wait })
  }

  function requireTill(req) {
    if (!opts.tillKey) throw new HttpError(503, 'not_configured', 'RELAY_TILL_KEY is not set on the relay')
    const auth = String(req.headers.authorization || '')
    const given = auth.startsWith('Bearer ') ? auth.slice(7) : ''
    if (!keyMatches(given, opts.tillKey)) {
      // Same answer and roughly the same time whatever was wrong with it.
      throw new HttpError(401, 'unauthorized', 'bad till key')
    }
  }

  function cors(req, res) {
    const origin = req.headers.origin
    if (origin && opts.allowedOrigins.includes(origin)) {
      res.setHeader('access-control-allow-origin', origin)
      res.setHeader('vary', 'origin')
      res.setHeader('access-control-allow-headers', 'content-type')
      res.setHeader('access-control-allow-methods', 'GET, POST, OPTIONS')
    }
  }

  // ---------- public API ----------

  function getShop() {
    const { snapshot, snapshotAt } = store.state
    return { ok: true, ...shopState(), snapshot, updatedAt: snapshotAt, serverTime: opts.now() }
  }

  async function postOrder(req) {
    limit(req, 'order', opts.orderLimit, 10 * 60_000)
    const body = await readJson(req)

    // Pressing "send" twice, or a flaky connection retrying, must not cook two meals.
    const existing = store.getByClientRef(cleanText(body?.clientRef, LIMITS.clientRef))
    if (existing) return [200, { ok: true, order: publicView(existing), duplicate: true }]

    const state = shopState()
    if (!state.open) {
      throw new HttpError(409, 'closed', 'المطعم لا يستقبل طلبات أونلاين الآن', { reason: state.reason })
    }

    const checked = validateOrder(body, store.state.snapshot)
    if (!checked.ok) {
      const status = checked.code === 'menu_changed' ? 409 : 400
      throw new HttpError(status, checked.code, checked.message, checked.field ? { field: checked.field } : {})
    }

    const active = new Set(store.orders().filter(o => !FINAL_STATUSES.has(o.status)).map(o => o.code))
    const order = buildOrder(checked.value, {
      id: newOrderId(),
      code: newOrderCode(code => active.has(code)),
      now: opts.now(),
    })
    store.addOrder(order)
    opts.log(`order ${order.code} placed — ${order.type}, ${order.lines.length} line(s), ${order.quote.total}`)
    return [201, { ok: true, order: publicView(order) }]
  }

  function getOrder(id) {
    const order = store.getOrder(id)
    if (!order) throw new HttpError(404, 'not_found', 'الطلب غير موجود')
    return { ok: true, order: publicView(order), shop: shopState() }
  }

  // ---------- till API ----------

  async function tillSync(req) {
    requireTill(req)
    const body = await readJson(req)
    const till = store.state.till
    const wasOnline = opts.now() - till.lastSeen <= TILL_STALE_MS
    till.lastSeen = opts.now()
    till.open = body?.open === true
    till.reason = till.open ? null : (['paused', 'closed'].includes(body?.reason) ? body.reason : 'closed')
    till.appVersion = body?.appVersion ? String(body.appVersion).slice(0, 40) : null
    if (!wasOnline) opts.log('till is back online')
    store.save()

    const orders = store.orders().filter(o => o.status === 'pending').map(tillView)
    const needMenu = !store.state.snapshot || body?.menuHash !== store.state.snapshotHash
    return { ok: true, orders, needMenu, serverTime: opts.now() }
  }

  async function tillAck(req) {
    requireTill(req)
    const body = await readJson(req)
    const ids = Array.isArray(body?.ids) ? body.ids.slice(0, 500) : []
    let acked = 0
    for (const id of ids) {
      const order = store.getOrder(String(id))
      if (order && (order.status === 'pending' || order.status === 'expired')
          && applyStatus(order, { status: 'received' }, opts.now())) acked++
    }
    if (acked) store.save()
    return { ok: true, acked }
  }

  async function tillStatus(req) {
    requireTill(req)
    const body = await readJson(req)
    const updates = Array.isArray(body?.updates) ? body.updates.slice(0, 500) : []
    const applied = []
    const unknown = []
    for (const u of updates) {
      const order = store.getOrder(String(u?.id))
      if (!order) { unknown.push(u?.id); continue }
      // An order the till has an answer for is, by definition, one it collected.
      if ((order.status === 'pending' || order.status === 'expired') && u.status !== 'received') {
        applyStatus(order, { status: 'received' }, opts.now())
      }
      if (applyStatus(order, u, opts.now())) {
        opts.log(`order ${order.code} → ${order.status}`)
      }
      // Reported back even when nothing changed: the till only needs to know this
      // relay now agrees with it, so it can stop re-sending.
      applied.push({ id: order.id, status: order.status })
    }
    store.save()
    return { ok: true, applied, unknown }
  }

  async function tillMenu(req) {
    requireTill(req)
    const body = await readJson(req, MAX_MENU_BODY)
    const snapshot = validateSnapshot(body?.snapshot)
    if (!snapshot) throw new HttpError(400, 'bad_request', 'snapshot rejected — keeping the previous menu')
    store.state.snapshot = snapshot
    store.state.snapshotHash = String(body.hash || '')
    store.state.snapshotAt = new Date(opts.now()).toISOString()
    store.save()
    opts.log(`menu published — ${snapshot.items.length} item(s), ${snapshot.areas.length} area(s)`)
    return { ok: true, hash: store.state.snapshotHash }
  }

  // ---------- static site ----------

  function serveStatic(req, res, pathname) {
    const root = path.resolve(opts.siteDir)
    let rel
    try {
      rel = decodeURIComponent(pathname)
    } catch {
      return send(res, 400, { ok: false, error: 'bad path' })
    }
    let file = path.resolve(root, '.' + rel)
    // A bare prefix test would let `../dist-old/x` through when the root is `dist`.
    if (file !== root && !file.startsWith(root + path.sep)) return send(res, 403, { ok: false, error: 'forbidden' })

    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      const asIndex = path.join(file, 'index.html')
      // Anything that is not a real file is the page itself — the tracking link
      // `/track/<id>` included.
      file = fs.existsSync(asIndex) ? asIndex : path.join(root, 'index.html')
    }
    if (!fs.existsSync(file)) {
      return send(res, 404, { ok: false, error: 'site not built — run `npm run build` in web/' })
    }

    const ext = path.extname(file).toLowerCase()
    // Vite fingerprints everything under /assets, so those can be cached for good.
    const immutable = rel.startsWith('/assets/')
    res.writeHead(200, {
      'content-type': MIME[ext] || 'application/octet-stream',
      'cache-control': immutable ? 'public, max-age=31536000, immutable' : 'no-cache',
      ...SECURITY_HEADERS,
      ...(ext === '.html' ? { 'content-security-policy': CSP } : {}),
    })
    if (req.method === 'HEAD') return res.end()
    fs.createReadStream(file).pipe(res)
  }

  // ---------- routing ----------

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url || '/', 'http://relay.local')
    const p = url.pathname
    try {
      if (p.startsWith('/api/')) {
        cors(req, res)
        if (req.method === 'OPTIONS') { res.writeHead(204); return res.end() }

        if (req.method === 'GET' && p === '/api/health') return send(res, 200, { ok: true })

        if (req.method === 'GET' && p === '/api/shop') {
          limit(req, 'read', opts.readLimit, 60_000)
          return send(res, 200, getShop())
        }
        if (req.method === 'POST' && p === '/api/orders') {
          const [status, body] = await postOrder(req)
          return send(res, status, body)
        }
        const track = /^\/api\/orders\/([A-Za-z0-9_-]{10,40})$/.exec(p)
        if (req.method === 'GET' && track) {
          limit(req, 'read', opts.readLimit, 60_000)
          return send(res, 200, getOrder(track[1]))
        }

        if (req.method === 'POST' && p === '/api/till/sync') return send(res, 200, await tillSync(req))
        if (req.method === 'POST' && p === '/api/till/ack') return send(res, 200, await tillAck(req))
        if (req.method === 'POST' && p === '/api/till/status') return send(res, 200, await tillStatus(req))
        if (req.method === 'PUT' && p === '/api/till/menu') return send(res, 200, await tillMenu(req))

        return send(res, 404, { ok: false, code: 'not_found', error: 'not found' })
      }

      if (req.method === 'GET' || req.method === 'HEAD') return serveStatic(req, res, p)
      return send(res, 405, { ok: false, error: 'method not allowed' })
    } catch (err) {
      if (err instanceof HttpError) {
        const headers = err.extra?.retryAfter ? { 'retry-after': String(err.extra.retryAfter) } : {}
        return send(res, err.status, { ok: false, code: err.code, error: err.message, ...err.extra }, headers)
      }
      console.error('[relay] request failed:', err)
      if (!res.headersSent) send(res, 500, { ok: false, code: 'server_error', error: 'server error' })
    }
  })

  return {
    server,
    store,
    shopState,
    expirePending,
    listen(port = 8080, host = '0.0.0.0') {
      return new Promise(resolve => server.listen(port, host, () => resolve(server.address())))
    },
    async close() {
      clearInterval(housekeeping)
      limiter.stop()
      await new Promise(resolve => server.close(() => resolve()))
      store.flush()
    },
  }
}

// ---------- run it ----------

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  const relay = createRelay()
  const port = Number(process.env.PORT) || 8080
  const demo = process.env.RELAY_DEMO === '1' || process.argv.includes('--demo')
  if (!process.env.RELAY_TILL_KEY && !demo) {
    console.warn('[relay] RELAY_TILL_KEY is not set — the till cannot connect until it is.')
  }
  if (demo) {
    const { startDemoTill } = await import('./demo.mjs')
    startDemoTill(relay)
  }
  const addr = await relay.listen(port)
  console.log(`[relay] listening on http://localhost:${addr.port}`)

  const shutdown = () => {
    console.log('[relay] shutting down')
    relay.close().finally(() => process.exit(0))
  }
  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)
}
