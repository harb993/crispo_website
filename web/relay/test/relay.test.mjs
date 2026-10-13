import { test, describe, before, after, beforeEach } from 'node:test'
import assert from 'node:assert/strict'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import { createRelay, TILL_STALE_MS, PENDING_TTL_MS } from '../server.mjs'
import { DEMO_SNAPSHOT } from '../demo.mjs'
import { normalizePhone, validateOrder, validateSnapshot, priceOrder } from '../orders.mjs'

const KEY = 'test-till-key-0123456789'

let relay
let base
let clock
let dir

async function call(method, p, body, { till = false, headers = {} } = {}) {
  const res = await fetch(base + p, {
    method,
    headers: {
      ...(body !== undefined ? { 'content-type': 'application/json' } : {}),
      ...(till ? { authorization: `Bearer ${KEY}` } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  return { status: res.status, body: await res.json() }
}

const sync = (open = true, menuHash = 'h1') =>
  call('POST', '/api/till/sync', { open, menuHash }, { till: true })

function order(over = {}) {
  return {
    clientRef: `ref-${Math.random()}`,
    type: 'delivery',
    payment: 'cash',
    customer: { name: 'منى أحمد', phone: '+20 100 123 4567', address: 'شارع التحرير، عمارة ٥', areaId: 2 },
    notes: 'من غير بصل',
    lines: [
      { itemId: 1, qty: 2, optionIds: [2] },   // 4 pieces, spicy — 135 each
      { itemId: 9, qty: 1, optionIds: [11] },  // loaded fries, large — 55 + 15
    ],
    ...over,
  }
}

before(async () => {
  dir = fs.mkdtempSync(path.join(os.tmpdir(), 'relay-test-'))
  clock = Date.now()
  relay = createRelay({
    tillKey: KEY,
    dataFile: path.join(dir, 'relay.json'),
    siteDir: path.join(dir, 'site'),
    log: () => {},
    now: () => clock,
    orderLimit: 1000,
  })
  const addr = await relay.listen(0, '127.0.0.1')
  base = `http://127.0.0.1:${addr.port}`
  // Publish the menu the way the till does.
  const res = await call('PUT', '/api/till/menu', { snapshot: DEMO_SNAPSHOT, hash: 'h1' }, { till: true })
  assert.equal(res.status, 200)
})

after(async () => {
  await relay.close()
  fs.rmSync(dir, { recursive: true, force: true })
})

beforeEach(async () => {
  clock += 1000
  await sync(true)
})

describe('phone numbers', () => {
  test('fold to the local form the till keys customers on', () => {
    assert.equal(normalizePhone('+20 100 123 4567'), '01001234567')
    assert.equal(normalizePhone('00201001234567'), '01001234567')
    assert.equal(normalizePhone('٠١٠٠١٢٣٤٥٦٧'), '01001234567')
    assert.equal(normalizePhone('0100-123-4567'), '01001234567')
    assert.equal(normalizePhone('hello'), null)
    assert.equal(normalizePhone('123'), null)
  })
})

describe('pricing', () => {
  test('prices from the snapshot, never from the browser', () => {
    const snap = validateSnapshot(DEMO_SNAPSHOT)
    const checked = validateOrder({ ...order(), lines: [{ itemId: 1, qty: 2, optionIds: [2], unitPrice: 1 }] }, snap)
    assert.equal(checked.ok, true)
    const q = priceOrder(checked.value)
    assert.equal(q.subtotal, 270)
    assert.equal(q.deliveryFee, 25)
    assert.equal(q.total, 295)
  })

  test('option deltas are added per line', () => {
    const snap = validateSnapshot(DEMO_SNAPSHOT)
    const q = priceOrder(validateOrder(order(), snap).value)
    assert.equal(q.lines[1].unitPrice, 70)
    assert.equal(q.lines[1].label, 'كبير')
    assert.equal(q.total, 270 + 70 + 25)
  })

  test("an option borrowed from another item is refused", () => {
    const snap = validateSnapshot(DEMO_SNAPSHOT)
    // 11 is the fries' "كبير"; item 1 asks about spice, not size.
    const res = validateOrder({ ...order(), lines: [{ itemId: 1, qty: 1, optionIds: [2, 11] }] }, snap)
    assert.equal(res.ok, false)
    assert.equal(res.code, 'menu_changed')
  })

  test('a question left unanswered is refused', () => {
    const snap = validateSnapshot(DEMO_SNAPSHOT)
    const res = validateOrder({ ...order(), lines: [{ itemId: 1, qty: 1, optionIds: [] }] }, snap)
    assert.equal(res.ok, false)
  })

  test('takeaway has no delivery fee and needs no address', () => {
    const snap = validateSnapshot(DEMO_SNAPSHOT)
    const res = validateOrder({ ...order(), type: 'takeaway', customer: { name: 'Ali', phone: '01112223334' } }, snap)
    assert.equal(res.ok, true)
    assert.equal(priceOrder(res.value).deliveryFee, 0)
  })
})

describe('placing and tracking an order', () => {
  test('the full journey: placed → collected by the till → accepted → delivered', async () => {
    const placed = await call('POST', '/api/orders', order())
    assert.equal(placed.status, 201)
    const { id, code } = placed.body.order
    assert.match(code, /^W-/)
    assert.equal(placed.body.order.status, 'pending')
    assert.equal(placed.body.order.quote.total, 365)

    // The tracking view never carries the phone number or the street address.
    const tracked = await call('GET', `/api/orders/${id}`)
    assert.equal(tracked.status, 200)
    assert.equal(JSON.stringify(tracked.body).includes('01001234567'), false)
    assert.equal(JSON.stringify(tracked.body).includes('التحرير'), false)
    assert.equal(tracked.body.order.firstName, 'منى')

    // The till collects it, with everything it needs to ring it up.
    const s = await sync()
    const mine = s.body.orders.find(o => o.id === id)
    assert.ok(mine)
    assert.equal(mine.customer.phone, '01001234567')
    assert.equal(mine.customer.areaId, 2)
    assert.deepEqual(mine.lines.map(l => l.optionIds), [[2], [11]])

    await call('POST', '/api/till/ack', { ids: [id] }, { till: true })
    assert.equal((await call('GET', `/api/orders/${id}`)).body.order.status, 'received')
    // Once acknowledged it is not handed out again.
    assert.equal((await sync()).body.orders.some(o => o.id === id), false)

    const st = await call('POST', '/api/till/status', {
      updates: [{ id, status: 'preparing', invoiceNumber: '0042', total: 360, etaMinutes: 40 }],
    }, { till: true })
    assert.deepEqual(st.body.applied, [{ id, status: 'preparing' }])

    const now = (await call('GET', `/api/orders/${id}`)).body.order
    assert.equal(now.status, 'preparing')
    assert.deepEqual(now.final, { invoiceNumber: '0042', total: 360 })
    assert.equal(now.etaMinutes, 40)

    await call('POST', '/api/till/status', { updates: [{ id, status: 'on_the_way' }] }, { till: true })
    await call('POST', '/api/till/status', { updates: [{ id, status: 'delivered' }] }, { till: true })
    // A late re-send of an earlier status cannot reopen a finished order.
    await call('POST', '/api/till/status', { updates: [{ id, status: 'preparing' }] }, { till: true })
    const done = (await call('GET', `/api/orders/${id}`)).body.order
    assert.equal(done.status, 'delivered')
    assert.deepEqual(done.timeline.map(t => t.status), ['pending', 'received', 'preparing', 'on_the_way', 'delivered'])
  })

  test('sending twice with the same clientRef creates one order', async () => {
    const body = order({ clientRef: 'double-tap' })
    const a = await call('POST', '/api/orders', body)
    const b = await call('POST', '/api/orders', body)
    assert.equal(a.status, 201)
    assert.equal(b.status, 200)
    assert.equal(b.body.duplicate, true)
    assert.equal(a.body.order.id, b.body.order.id)
  })

  test('a rejection reaches the customer with its reason', async () => {
    const { id } = (await call('POST', '/api/orders', order())).body.order
    await call('POST', '/api/till/status', { updates: [{ id, status: 'rejected', reason: 'خارج منطقة التوصيل' }] }, { till: true })
    const o = (await call('GET', `/api/orders/${id}`)).body.order
    assert.equal(o.status, 'rejected')
    assert.equal(o.reason, 'خارج منطقة التوصيل')
  })

  test('unknown tracking ids are a plain 404', async () => {
    const res = await call('GET', '/api/orders/AAAAAAAAAAAAAAAAAAAAAA')
    assert.equal(res.status, 404)
  })
})

describe('when the kitchen is not taking orders', () => {
  test('a paused till refuses new orders and says why', async () => {
    await sync(false)
    const shop = await call('GET', '/api/shop')
    assert.equal(shop.body.open, false)
    const res = await call('POST', '/api/orders', order())
    assert.equal(res.status, 409)
    assert.equal(res.body.code, 'closed')
    await sync(true)
  })

  test('a till that stops checking in reads as offline', async () => {
    clock += TILL_STALE_MS + 1
    const shop = await call('GET', '/api/shop')
    assert.equal(shop.body.open, false)
    assert.equal(shop.body.reason, 'offline')
    assert.equal((await call('POST', '/api/orders', order())).status, 409)
    await sync(true)
    assert.equal((await call('GET', '/api/shop')).body.open, true)
  })

  test('an order the till never collects expires instead of spinning forever', async () => {
    const { id } = (await call('POST', '/api/orders', order())).body.order
    clock += PENDING_TTL_MS + 1
    relay.expirePending()
    await sync(true)
    assert.equal((await call('GET', `/api/orders/${id}`)).body.order.status, 'expired')
    // …and the till is not handed an order the customer has been told is dead.
    assert.equal((await sync()).body.orders.some(o => o.id === id), false)
  })
})

describe('a lost acknowledgement', () => {
  test('an order expired by the relay but accepted by the till comes back to life', async () => {
    const { id } = (await call('POST', '/api/orders', order())).body.order
    // The till collected it, but the ack never arrived and the relay gave up on it.
    await sync()
    clock += PENDING_TTL_MS + 1
    relay.expirePending()
    await sync(true)
    assert.equal((await call('GET', `/api/orders/${id}`)).body.order.status, 'expired')
    // The till, back online, reports the cashier accepted it.
    const st = await call('POST', '/api/till/status', { updates: [{ id, status: 'preparing', invoiceNumber: '0077', total: 365 }] }, { till: true })
    assert.deepEqual(st.body.applied, [{ id, status: 'preparing' }])
    const o = (await call('GET', `/api/orders/${id}`)).body.order
    assert.equal(o.status, 'preparing')
    assert.equal(o.final.invoiceNumber, '0077')
  })

  test('the static server will not step outside the site folder', async () => {
    fs.mkdirSync(path.join(dir, 'site'), { recursive: true })
    fs.writeFileSync(path.join(dir, 'site', 'index.html'), '<!doctype html><title>ok</title>')
    fs.mkdirSync(path.join(dir, 'site-secret'), { recursive: true })
    fs.writeFileSync(path.join(dir, 'site-secret', 'x.txt'), 'secret')
    const res = await fetch(`${base}/..%2Fsite-secret%2Fx.txt`)
    const text = await res.text()
    assert.equal(text.includes('secret'), false)
  })
})

describe('the till side', () => {
  test('refuses a missing or wrong key', async () => {
    const none = await call('POST', '/api/till/sync', { open: true })
    assert.equal(none.status, 401)
    const wrong = await call('POST', '/api/till/sync', { open: true }, { headers: { authorization: 'Bearer nope' } })
    assert.equal(wrong.status, 401)
  })

  test('asks for the menu when the hash differs', async () => {
    assert.equal((await sync(true, 'h1')).body.needMenu, false)
    assert.equal((await sync(true, 'something-else')).body.needMenu, true)
  })

  test('a malformed menu is refused and the old one stays up', async () => {
    const res = await call('PUT', '/api/till/menu', { snapshot: { categories: 'x' }, hash: 'bad' }, { till: true })
    assert.equal(res.status, 400)
    const shop = await call('GET', '/api/shop')
    assert.equal(shop.body.snapshot.items.length, DEMO_SNAPSHOT.items.length)
  })

  test('the store survives a restart', async () => {
    const { id } = (await call('POST', '/api/orders', order())).body.order
    relay.store.flush()
    const saved = JSON.parse(fs.readFileSync(path.join(dir, 'relay.json'), 'utf8'))
    assert.ok(saved.orders.some(o => o.id === id))
  })
})
