import { createHash } from 'node:crypto'
import log from 'electron-log/main'
import { getDb, isDemoMode } from '../db/db'
import { getSettings } from './settingsService'
import { createOrder } from './orderService'
import { listCategories, listMenuItems, getVariantsByItem } from './menuService'
import { listAreas } from './deliveryService'
import { getWorkShiftStatus } from './workShiftService'
import { isActivated } from './licenseService'
import type {
  CreateOrderInput, CreateOrderResult, SessionUser, WebOrder, WebOrderConfig, WebOrderLine,
  WebPublicStatus, WebSyncStatus,
} from '../../shared/types'

/**
 * Online orders: the till's half of the website.
 *
 * HOW AN ORDER GETS HERE
 *
 * The till sits behind the shop's router and nothing on the internet can reach it, so
 * nothing tries. The website hands orders to the relay (web/relay) and this service
 * DIALS OUT to collect them every few seconds — the same direction as a browser
 * loading a page, which every shop router already allows. No port is opened, no
 * address has to be known, and with the internet down the till trades exactly as
 * before: web orders simply stop arriving, and because the till stops checking in,
 * the website stops taking them.
 *
 * WHAT HAPPENS TO ONE
 *
 *   1. collected      → a row in `web_orders`, status 'new'; the till chimes
 *   2. accepted       → rung up through createOrder: priced from THIS database,
 *                       given an invoice number, kitchen tickets printed. From here
 *                       it is an ordinary invoice — voided, delivered, settled with
 *                       the driver like any other
 *      or rejected    → with a reason the customer is shown
 *   3. every change is reported back, so the tracking page follows the delivery board
 *
 * The till owns the truth. Prices on the website are a quote from the menu this till
 * published; the customer is charged what createOrder computes, and is shown it.
 */

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const KEYS = {
  enabled: 'web_enabled',
  url: 'web_relay_url',
  key: 'web_relay_key',
  accepting: 'web_accepting',
  etaDelivery: 'web_eta_delivery',
  etaTakeaway: 'web_eta_takeaway',
  takeaway: 'web_takeaway',
} as const

function readKey(key: string): string | undefined {
  const row = getDb().prepare('SELECT value FROM settings WHERE key = ?').get(key) as { value: string } | undefined
  return row?.value
}

function writeKey(key: string, value: string): void {
  getDb().prepare('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)').run(key, value)
}

function clampMinutes(raw: string | undefined, fallback: number): number {
  const n = parseInt(raw ?? '', 10)
  return Number.isFinite(n) ? Math.max(5, Math.min(240, n)) : fallback
}

export function getWebConfig(): WebOrderConfig {
  return {
    enabled: readKey(KEYS.enabled) === '1',
    relayUrl: readKey(KEYS.url) ?? '',
    keySet: !!readKey(KEYS.key),
    accepting: readKey(KEYS.accepting) !== '0',
    etaDelivery: clampMinutes(readKey(KEYS.etaDelivery), 45),
    etaTakeaway: clampMinutes(readKey(KEYS.etaTakeaway), 20),
    takeaway: readKey(KEYS.takeaway) !== '0',
  }
}

/**
 * The relay's address, checked. HTTPS on the internet — the key travels in a header —
 * with plain HTTP allowed only on this machine or the shop's own LAN, for testing.
 */
export function normalizeRelayUrl(raw: string): string {
  const value = String(raw ?? '').trim().replace(/\/+$/, '')
  if (!value) return ''
  let url: URL
  try {
    url = new URL(value)
  } catch {
    throw new Error('عنوان السيرفر غير صحيح — مثال: https://order.crispo.com')
  }
  const local = /^(localhost|127\.\d+\.\d+\.\d+|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)$/
    .test(url.hostname)
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && local)) {
    throw new Error('عنوان السيرفر لازم يبدأ بـ https://')
  }
  return `${url.protocol}//${url.host}${url.pathname.replace(/\/+$/, '')}`
}

export function setWebConfig(input: Partial<{
  enabled: boolean
  relayUrl: string
  /** Omitted or empty keeps the current key. */
  key: string
  etaDelivery: number
  etaTakeaway: number
  takeaway: boolean
}>): WebOrderConfig {
  const db = getDb()
  db.transaction(() => {
    if (input.relayUrl !== undefined) writeKey(KEYS.url, normalizeRelayUrl(input.relayUrl))
    if (input.key !== undefined && input.key.trim()) {
      const key = input.key.trim()
      if (key.length < 16) throw new Error('مفتاح الربط قصير — لازم يكون ١٦ حرف على الأقل')
      writeKey(KEYS.key, key)
    }
    if (input.etaDelivery !== undefined) writeKey(KEYS.etaDelivery, String(clampMinutes(String(input.etaDelivery), 45)))
    if (input.etaTakeaway !== undefined) writeKey(KEYS.etaTakeaway, String(clampMinutes(String(input.etaTakeaway), 20)))
    if (input.takeaway !== undefined) writeKey(KEYS.takeaway, input.takeaway ? '1' : '0')
    if (input.enabled !== undefined) {
      if (input.enabled && (!readKey(KEYS.url) || !readKey(KEYS.key))) {
        throw new Error('اكتب عنوان السيرفر ومفتاح الربط الأول')
      }
      writeKey(KEYS.enabled, input.enabled ? '1' : '0')
    }
  })()
  return getWebConfig()
}

/** The pause switch. Any cashier can flip it — it is the "we are slammed" button. */
export function setAccepting(accepting: boolean): void {
  writeKey(KEYS.accepting, accepting ? '1' : '0')
}

// ---------------------------------------------------------------------------
// What the website is told
// ---------------------------------------------------------------------------

export interface MenuSnapshot {
  business: { name: string; phone: string; address: string; currency: string }
  eta: { delivery: number; takeaway: number }
  takeaway: boolean
  categories: { id: number; name: string; order: number }[]
  items: {
    id: number
    categoryId: number
    name: string
    description: string | null
    price: number
    variants: { id: number; name: string; options: { id: number; name: string; delta: number }[] }[]
  }[]
  areas: { id: number; name: string; fee: number }[]
}

/**
 * The menu as the website should show it: what the POS grid sells right now, at the
 * POS's prices, with the same questions the cashier would ask, and the delivery areas
 * still in use. Costs, stock and recipes stay on the till.
 */
export function buildMenuSnapshot(): MenuSnapshot {
  const s = getSettings()
  const cfg = getWebConfig()
  const items = listMenuItems(false)
  const live = new Set(items.map(i => i.category_id))
  return {
    business: {
      name: s.business_name,
      phone: s.business_phone,
      address: s.business_address,
      currency: s.currency_symbol,
    },
    eta: { delivery: cfg.etaDelivery, takeaway: cfg.etaTakeaway },
    takeaway: cfg.takeaway,
    categories: listCategories()
      .filter(c => live.has(c.category_id))
      .map(c => ({ id: c.category_id, name: c.name, order: c.display_order })),
    items: items.map(i => ({
      id: i.item_id,
      categoryId: i.category_id,
      name: i.name,
      description: i.description || null,
      price: i.price,
      variants: (i.variants ?? []).map(g => ({
        id: g.variant_group_id,
        name: g.group_name,
        options: g.options.map(o => ({ id: o.variant_option_id, name: o.option_name, delta: o.price_delta })),
      })),
    })),
    areas: listAreas()
      .filter(a => a.is_active)
      .map(a => ({ id: a.delivery_area_id, name: a.area_name, fee: a.delivery_fee })),
  }
}

export function snapshotHash(snapshot: MenuSnapshot): string {
  return createHash('sha256').update(JSON.stringify(snapshot)).digest('hex').slice(0, 24)
}

/**
 * Whether the website may take orders. Only while somebody can answer them: the
 * cashier has not paused online orders, and a shift is open — between shifts there
 * is nobody at the till to accept anything.
 */
export function openState(): { open: boolean; reason: 'paused' | 'closed' | null } {
  if (!getWebConfig().accepting) return { open: false, reason: 'paused' }
  if (!getWorkShiftStatus().open) return { open: false, reason: 'closed' }
  return { open: true, reason: null }
}

// ---------------------------------------------------------------------------
// The inbox
// ---------------------------------------------------------------------------

/** One order as the relay hands it over — see tillView() in web/relay/orders.mjs. */
export interface RelayOrder {
  id: string
  code: string
  createdAt: string
  type: 'delivery' | 'takeaway'
  payment: 'cash' | 'card'
  customer: { name: string; phone: string; address: string | null; areaId: number | null; areaName?: string | null }
  notes: string | null
  lines: WebOrderLine[]
  quote: { subtotal: number; deliveryFee: number; total: number }
}

function isRelayOrder(o: any): o is RelayOrder {
  return o && typeof o.id === 'string' && /^[A-Za-z0-9_-]{10,40}$/.test(o.id)
    && typeof o.code === 'string'
    && (o.type === 'delivery' || o.type === 'takeaway')
    && o.customer && typeof o.customer.name === 'string' && typeof o.customer.phone === 'string'
    && Array.isArray(o.lines) && o.lines.length > 0
    && o.lines.every((l: any) => Number.isInteger(l?.itemId) && Number.isInteger(l?.qty) && l.qty > 0
      && Array.isArray(l.optionIds))
}

/** ISO from the relay → this till's local `YYYY-MM-DD HH:MM:SS`, the shape every other date here has. */
function localStamp(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return localStamp(new Date().toISOString())
  const p = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`
}

/**
 * File what the relay handed over. Idempotent: an order already here — because the
 * acknowledgement got lost and the relay sent it again — is left alone.
 *
 * Returns the ids to acknowledge (everything understood, new or not) and the ones
 * that are new, which are what the till chimes for.
 */
export function ingestRelayOrders(orders: unknown[]): { ack: string[]; inserted: WebOrder[] } {
  const db = getDb()
  const insert = db.prepare(`
    INSERT OR IGNORE INTO web_orders (remote_id, code, order_type, customer_name, customer_phone,
      customer_address, delivery_area_id, payment_type, notes, lines_json,
      quoted_subtotal, quoted_fee, quoted_total, placed_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
  const ack: string[] = []
  const insertedIds: number[] = []
  db.transaction(() => {
    for (const raw of orders) {
      if (!isRelayOrder(raw)) {
        log.warn('[Web] Ignored an order the relay sent in a shape this till does not understand')
        continue
      }
      const o = raw
      const lines: WebOrderLine[] = o.lines.map(l => ({
        itemId: l.itemId,
        name: String(l.name ?? '').slice(0, 120),
        optionIds: l.optionIds.map(Number).filter(Number.isInteger),
        label: l.label ? String(l.label).slice(0, 120) : null,
        qty: Math.min(50, l.qty),
        unitPrice: Number(l.unitPrice) || 0,
        total: Number(l.total) || 0,
      }))
      const res = insert.run(
        o.id, String(o.code).slice(0, 16), o.type,
        String(o.customer.name).slice(0, 60), String(o.customer.phone).slice(0, 20),
        o.type === 'delivery' ? String(o.customer.address ?? '').slice(0, 300) || null : null,
        o.type === 'delivery' && Number.isInteger(o.customer.areaId) ? o.customer.areaId : null,
        o.payment === 'card' ? 'card' : 'cash',
        o.notes ? String(o.notes).slice(0, 300) : null,
        JSON.stringify(lines),
        Number(o.quote?.subtotal) || 0, Number(o.quote?.deliveryFee) || 0, Number(o.quote?.total) || 0,
        localStamp(o.createdAt),
      )
      ack.push(o.id)
      if (res.changes > 0) {
        insertedIds.push(res.lastInsertRowid as number)
        log.info(`[Web] Order ${o.code} arrived — ${o.type}, ${lines.length} line(s), quoted ${o.quote?.total}`)
      }
    }
  })()
  return { ack, inserted: insertedIds.map(id => getWebOrder(id)!).filter(Boolean) }
}

const SELECT = `
  SELECT w.*, da.area_name,
         o.invoice_number, o.status AS order_status, o.delivery_status, o.total_amount,
         o.deleted_at AS order_deleted_at, o.void_reason,
         u.full_name AS handled_by_name
  FROM web_orders w
  LEFT JOIN orders o ON o.order_id = w.order_id
  LEFT JOIN delivery_areas da ON da.delivery_area_id = w.delivery_area_id
  LEFT JOIN users u ON u.user_id = w.handled_by`

interface Row extends Omit<WebOrder, 'lines' | 'public_status'> {
  lines_json: string
  order_deleted_at: string | null
  void_reason: string | null
}

/**
 * What the customer should be seeing, worked out from the till's own records. Never
 * stored: the delivery board, a void or a deletion change it without this service
 * being told, and the next sync simply notices.
 */
export function publicStatusOf(r: {
  status: WebOrder['status']
  order_type: WebOrder['order_type']
  order_id: number | null
  order_status: string | null
  order_deleted_at: string | null
  delivery_status: string | null
}): WebPublicStatus {
  if (r.status === 'new') return 'received'
  if (r.status === 'rejected') return 'rejected'
  if (r.order_id && (r.order_status === 'voided' || r.order_deleted_at)) return 'cancelled'
  if (r.order_type === 'takeaway') {
    if (r.status === 'collected') return 'collected'
    if (r.status === 'ready') return 'ready'
    return 'preparing'
  }
  switch (r.delivery_status) {
    case 'pending': return 'ready'
    case 'out': return 'on_the_way'
    case 'delivered': return 'delivered'
    case 'returned': return 'cancelled'
    default: return 'preparing'
  }
}

function hydrate(r: Row): WebOrder {
  let lines: WebOrderLine[] = []
  try { lines = JSON.parse(r.lines_json) } catch { /* a damaged row still shows */ }
  const { lines_json: _l, order_deleted_at: _d, void_reason: _v, ...rest } = r
  return { ...rest, lines, public_status: publicStatusOf(r) }
}

export function getWebOrder(webOrderId: number): WebOrder | null {
  const row = getDb().prepare(`${SELECT} WHERE w.web_order_id = ?`).get(webOrderId) as Row | undefined
  return row ? hydrate(row) : null
}

const FINAL: WebPublicStatus[] = ['delivered', 'collected', 'rejected', 'cancelled', 'expired']

/**
 * The screen's list. 'active' is everything somebody still has to act on or watch —
 * new, or accepted and not yet with the customer — from the last day. 'recent' adds
 * the finished ones, newest first.
 */
export function listWebOrders(scope: 'active' | 'recent' = 'active'): WebOrder[] {
  const rows = getDb().prepare(`
    ${SELECT}
    WHERE w.received_at >= datetime('now','localtime','-1 day') OR w.status = 'new'
    ORDER BY CASE w.status WHEN 'new' THEN 0 ELSE 1 END, w.received_at DESC, w.web_order_id DESC
    LIMIT 200
  `).all() as Row[]
  const all = rows.map(hydrate)
  return scope === 'active' ? all.filter(o => !FINAL.includes(o.public_status)) : all
}

export function countNewWebOrders(): number {
  return (getDb().prepare(`SELECT COUNT(*) AS c FROM web_orders WHERE status = 'new'`).get() as { c: number }).c
}

// ---------------------------------------------------------------------------
// The cashier's decisions
// ---------------------------------------------------------------------------

/**
 * Accept a web order: ring it up as an ordinary sale.
 *
 * Everything that makes a till sale trustworthy applies unchanged, because it IS a till
 * sale — createOrder prices it from this database, numbers it, deducts stock and
 * charges the delivery fee from the area record. The cashier who accepts it is the
 * cashier on the invoice.
 *
 * One extra check first: every option the customer chose must still be an option of
 * that dish. The relay validated them against the menu as it was published, but the
 * owner may have changed a dish's questions since — and createOrder, built for a cart
 * that was put together seconds ago, would quietly ring a stale "large" up as a
 * regular. Better to stop and let the cashier call the customer.
 */
export function acceptWebOrder(webOrderId: number, actor: SessionUser): { result: CreateOrderResult; order: WebOrder } {
  if (actor.role === 'accountant') throw new Error('قبول الطلبات للكاشير والمدير فقط')
  const db = getDb()
  const result = db.transaction((): CreateOrderResult => {
    const w = getWebOrder(webOrderId)
    if (!w) throw new Error('طلب الموقع غير موجود')
    if (w.status !== 'new') throw new Error('الطلب ده اتعامل معاه قبل كده')

    const variants = getVariantsByItem()
    for (const line of w.lines) {
      const groups = variants[line.itemId] ?? []
      for (const g of groups) {
        const answered = g.options.filter(o => line.optionIds.includes(o.variant_option_id))
        if (answered.length !== 1) {
          throw new Error(`اختيارات «${line.name}» اتغيرت في المنيو بعد ما العميل طلب — كلّم العميل أو ارفض الطلب`)
        }
      }
      const known = new Set(groups.flatMap(g => g.options.map(o => o.variant_option_id)))
      if (line.optionIds.some(id => !known.has(id))) {
        throw new Error(`اختيارات «${line.name}» اتغيرت في المنيو بعد ما العميل طلب — كلّم العميل أو ارفض الطلب`)
      }
    }

    // The code goes on the kitchen ticket and the receipt, so whoever bags it knows it
    // came from the website and can find it again if the customer calls.
    const notes = [`🌐 طلب أونلاين ${w.code}`, w.notes].filter(Boolean).join(' — ')

    const input: CreateOrderInput = {
      cashierId: actor.userId,
      orderType: w.order_type,
      paymentType: w.payment_type,
      discountPercent: 0,
      customerName: w.customer_name,
      customerPhone: w.customer_phone,
      customerAddress: w.customer_address ?? undefined,
      deliveryAreaId: w.delivery_area_id ?? undefined,
      notes,
      items: w.lines.map(l => ({
        menuItemId: l.itemId,
        quantity: l.qty,
        unitPrice: l.unitPrice,
        itemName: l.name,
        variantLabel: l.label ?? undefined,
        variantOptionIds: l.optionIds,
      })),
    }
    const created = createOrder(input, actor.role)
    db.prepare(`
      UPDATE web_orders
      SET status = 'accepted', order_id = ?, handled_by = ?, handled_at = datetime('now','localtime')
      WHERE web_order_id = ?
    `).run(created.orderId, actor.userId, webOrderId)
    return created
  })()

  log.info(`[Web] Order #${webOrderId} accepted by ${actor.username} as invoice ${result.invoiceNumber}`)
  return { result, order: getWebOrder(webOrderId)! }
}

export function rejectWebOrder(webOrderId: number, reason: string, actor: SessionUser): WebOrder {
  if (actor.role === 'accountant') throw new Error('رفض الطلبات للكاشير والمدير فقط')
  const why = String(reason ?? '').replace(/\s+/g, ' ').trim().slice(0, 200)
  if (!why) throw new Error('اكتب سبب الرفض — العميل هيشوفه')
  const res = getDb().prepare(`
    UPDATE web_orders
    SET status = 'rejected', reject_reason = ?, handled_by = ?, handled_at = datetime('now','localtime')
    WHERE web_order_id = ? AND status = 'new'
  `).run(why, actor.userId, webOrderId)
  if (res.changes === 0) throw new Error('الطلب ده اتعامل معاه قبل كده')
  log.info(`[Web] Order #${webOrderId} rejected by ${actor.username}: ${why}`)
  return getWebOrder(webOrderId)!
}

/** Takeaway only — a delivery order's progress is the delivery board's. */
export function setTakeawayStage(webOrderId: number, stage: 'ready' | 'collected', actor: SessionUser): WebOrder {
  const w = getWebOrder(webOrderId)
  if (!w) throw new Error('طلب الموقع غير موجود')
  if (w.order_type !== 'takeaway') throw new Error('حالة طلبات التوصيل بتتغير من شاشة الدليفري')
  if (w.public_status === 'cancelled') throw new Error('الفاتورة ملغاة')
  const allowed = stage === 'ready' ? ['accepted'] : ['accepted', 'ready']
  if (!allowed.includes(w.status)) throw new Error('الطلب مش في المرحلة دي')
  getDb().prepare(`UPDATE web_orders SET status = ? WHERE web_order_id = ?`).run(stage, webOrderId)
  log.info(`[Web] Takeaway ${w.code} → ${stage} (${actor.username})`)
  return getWebOrder(webOrderId)!
}

// ---------------------------------------------------------------------------
// Reporting back
// ---------------------------------------------------------------------------

export interface StatusUpdate {
  id: string
  status: WebPublicStatus
  invoiceNumber?: string | null
  total?: number | null
  reason?: string | null
  etaMinutes?: number | null
}

/**
 * Every web order whose customer is looking at something out of date. Finished ones
 * the relay has already confirmed drop out, so this stays a handful of rows.
 */
export function pendingStatusUpdates(): StatusUpdate[] {
  const rows = getDb().prepare(`
    ${SELECT}
    WHERE (w.synced_status IS NULL OR w.synced_status NOT IN ('delivered','collected','rejected','cancelled','expired'))
      AND w.received_at >= datetime('now','localtime','-3 days')
    LIMIT 200
  `).all() as Row[]
  const cfg = getWebConfig()
  const out: StatusUpdate[] = []
  for (const r of rows) {
    const status = publicStatusOf(r)
    if (status === r.synced_status) continue
    const u: StatusUpdate = { id: r.remote_id, status }
    if (r.order_id && r.invoice_number) {
      u.invoiceNumber = r.invoice_number
      u.total = r.total_amount
    }
    if (status === 'preparing') u.etaMinutes = r.order_type === 'delivery' ? cfg.etaDelivery : cfg.etaTakeaway
    if (status === 'rejected') u.reason = r.reject_reason
    if (status === 'cancelled') u.reason = r.void_reason || 'الطلب اتلغى من المطعم'
    out.push(u)
  }
  return out
}

/** Record what the relay now says, so those orders stop being re-sent. */
export function markSynced(applied: { id: string; status: string }[], unknown: string[] = []): void {
  const db = getDb()
  const set = db.prepare(`UPDATE web_orders SET synced_status = ? WHERE remote_id = ?`)
  db.transaction(() => {
    for (const a of applied) set.run(a.status, a.id)
    // The relay has forgotten these (purged, or a different relay). Nobody is watching
    // them any more — stop trying.
    for (const id of unknown) set.run('expired', id)
  })()
}

// ---------------------------------------------------------------------------
// The sync loop
// ---------------------------------------------------------------------------

type FetchLike = (url: string, init: { method: string; headers: Record<string, string>; body?: string; signal?: AbortSignal }) =>
  Promise<{ ok: boolean; status: number; json(): Promise<any> }>

const INTERVAL_MS = 5_000
const BACKOFF_MS = [5_000, 10_000, 20_000, 30_000, 60_000]
const ONLINE_WINDOW_MS = 30_000
const REQUEST_TIMEOUT_MS = 12_000

const state = {
  running: false,
  timer: null as ReturnType<typeof setTimeout> | null,
  inFlight: false,
  again: false,
  failures: 0,
  lastSyncAt: null as number | null,
  lastOkAt: null as number | null,
  lastError: null as string | null,
  skipped: null as WebSyncStatus['skipped'],
  lastOpen: null as { open: boolean; reason: 'paused' | 'closed' | null } | null,
  fetchImpl: ((url, init) => fetch(url, init)) as FetchLike,
  appVersion: '',
}

type Listener = (event: { newOrders: WebOrder[]; status: WebSyncStatus }) => void
let listener: Listener | null = null

/** The IPC layer listens here — to chime, notify and refresh the screens. */
export function onWebOrdersChanged(fn: Listener | null): void {
  listener = fn
}

export function getSyncStatus(): WebSyncStatus {
  const cfg = getWebConfig()
  const now = Date.now()
  return {
    enabled: cfg.enabled,
    configured: !!cfg.relayUrl && cfg.keySet,
    skipped: state.skipped,
    online: !!state.lastOkAt && now - state.lastOkAt < ONLINE_WINDOW_MS,
    accepting: cfg.accepting,
    open: state.lastOpen?.open ?? false,
    reason: state.lastOpen?.reason ?? null,
    lastSyncAt: state.lastSyncAt,
    lastOkAt: state.lastOkAt,
    lastError: state.lastError,
    newCount: countNewWebOrders(),
  }
}

class RelayError extends Error {
  constructor(message: string, readonly status: number) { super(message) }
}

async function call(path: string, method: 'POST' | 'PUT', body: unknown): Promise<any> {
  const url = readKey(KEYS.url)
  const key = readKey(KEYS.key)
  if (!url || !key) throw new RelayError('online ordering is not configured', 0)
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS)
  let res
  try {
    res = await state.fetchImpl(`${url}${path}`, {
      method,
      headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    })
  } catch (err: any) {
    throw new RelayError(err?.name === 'AbortError'
      ? 'السيرفر ما ردّش في الوقت'
      : 'مفيش اتصال بسيرفر الطلبات — اتأكد من الإنترنت', 0)
  } finally {
    clearTimeout(timer)
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok || data?.ok === false) {
    const why = res.status === 401 ? 'مفتاح الربط غلط — راجعه في الإعدادات'
      : res.status === 503 ? 'السيرفر مش متظبط (RELAY_TILL_KEY ناقص)'
      : data?.error || `السيرفر رد بخطأ ${res.status}`
    throw new RelayError(why, res.status)
  }
  return data
}

export type SyncOutcome = 'ok' | 'disabled' | 'demo' | 'node' | 'unlicensed'

/**
 * One round trip: check in, publish the menu if the relay's copy is stale, collect and
 * acknowledge new orders, report every status that changed.
 *
 * Skipped outright on three kinds of machine. The showcase books are a made-up
 * restaurant — publishing that menu to the real website would be a disaster. A node
 * till has no books: the master collects for the whole shop. And an unlicensed copy
 * does not trade at all.
 */
export async function syncOnce(): Promise<SyncOutcome> {
  const cfg = getWebConfig()
  state.skipped = null
  if (!cfg.enabled || !cfg.relayUrl || !cfg.keySet) return 'disabled'
  if (isDemoMode()) { state.skipped = 'demo'; return 'demo' }
  if (getSettings().net_mode === 'node') { state.skipped = 'node'; return 'node' }
  if (!isActivated()) { state.skipped = 'unlicensed'; return 'unlicensed' }

  state.lastSyncAt = Date.now()
  const before = getSyncStatus()
  try {
    const snapshot = buildMenuSnapshot()
    const hash = snapshotHash(snapshot)
    const open = openState()
    state.lastOpen = open

    const res = await call('/api/till/sync', 'POST', {
      open: open.open, reason: open.reason, menuHash: hash, appVersion: state.appVersion,
    })
    if (res.needMenu) {
      await call('/api/till/menu', 'PUT', { snapshot, hash })
      log.info(`[Web] Menu published — ${snapshot.items.length} item(s)`)
    }

    const { ack, inserted } = ingestRelayOrders(Array.isArray(res.orders) ? res.orders : [])
    if (ack.length) await call('/api/till/ack', 'POST', { ids: ack })

    const updates = pendingStatusUpdates()
    if (updates.length) {
      const r = await call('/api/till/status', 'POST', { updates })
      markSynced(Array.isArray(r.applied) ? r.applied : [], Array.isArray(r.unknown) ? r.unknown : [])
    }

    state.lastOkAt = Date.now()
    if (state.lastError) log.info('[Web] Relay reachable again')
    state.lastError = null
    state.failures = 0

    const after = getSyncStatus()
    if (inserted.length || before.online !== after.online || before.open !== after.open || updates.length) {
      listener?.({ newOrders: inserted, status: after })
    }
    return 'ok'
  } catch (err: any) {
    state.failures++
    const msg = err?.message || String(err)
    if (msg !== state.lastError) log.warn(`[Web] Sync failed: ${msg}`)
    state.lastError = msg
    const after = getSyncStatus()
    if (before.online !== after.online || before.lastError !== after.lastError) {
      listener?.({ newOrders: [], status: after })
    }
    throw err
  }
}

async function tick(): Promise<void> {
  state.timer = null
  if (!state.running) return
  state.inFlight = true
  let delay = INTERVAL_MS
  try {
    await syncOnce()
  } catch {
    delay = BACKOFF_MS[Math.min(state.failures - 1, BACKOFF_MS.length - 1)]
  } finally {
    state.inFlight = false
  }
  if (!state.running) return
  if (state.again) { state.again = false; delay = 0 }
  state.timer = setTimeout(() => void tick(), delay)
}

/** Start collecting. Safe to call again — after a config change, or a role change. */
export function startWebSync(opts: { fetchImpl?: FetchLike; appVersion?: string } = {}): void {
  if (opts.fetchImpl) state.fetchImpl = opts.fetchImpl
  if (opts.appVersion) state.appVersion = opts.appVersion
  state.running = true
  kickWebSync()
}

export function stopWebSync(): void {
  state.running = false
  if (state.timer) clearTimeout(state.timer)
  state.timer = null
}

/** Sync now rather than at the next tick — after an accept, so the customer sees it at once. */
export function kickWebSync(): void {
  if (!state.running) return
  if (state.inFlight) { state.again = true; return }
  if (state.timer) clearTimeout(state.timer)
  state.timer = setTimeout(() => void tick(), 0)
}

/** For tests: point the loop at a fake or in-process relay, and forget past state. */
export function __resetWebSync(fetchImpl?: FetchLike): void {
  stopWebSync()
  Object.assign(state, {
    inFlight: false, again: false, failures: 0, lastSyncAt: null, lastOkAt: null,
    lastError: null, skipped: null, lastOpen: null,
  })
  if (fetchImpl) state.fetchImpl = fetchImpl
}
