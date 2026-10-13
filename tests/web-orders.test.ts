import { describe, it, expect, beforeAll, afterAll, beforeEach, vi } from 'vitest'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import { initDatabase, getDb } from '../src/main/db/db'
import * as web from '../src/main/services/webOrderService'
import { setItemVariants } from '../src/main/services/menuService'
import * as delivery from '../src/main/services/deliveryService'
import { voidOrder } from '../src/main/services/orderService'
import { startWorkShiftManually, getWorkShiftStatus } from '../src/main/services/workShiftService'
// The real relay, in this process — the same file `node relay/server.mjs` runs.
import { createRelay } from '../web/relay/server.mjs'
import type { SessionUser } from '../src/shared/types'

// The test machine is not activated; the sync loop refuses to trade on one that is not.
vi.mock('../src/main/services/licenseService', () => ({ isActivated: () => true }))

/**
 * The website and the till, end to end.
 *
 * Everything here goes over real HTTP to the real relay: an order is placed the way
 * the website places it, collected the way the till collects it, rung up through the
 * ordinary createOrder, and its progress read back the way the customer's tracking
 * page reads it. What matters most is the money — that the till, not the browser,
 * decides what the customer pays — and that nothing is lost or doubled when the
 * connection is unreliable.
 */

const KEY = 'test-relay-key-0123456789abcdef'

let relay: any
let base: string
let dataDir: string
let cashier: SessionUser
let owner: SessionUser
let meal: { item_id: number; price: number; name: string }
let plain: { item_id: number; price: number; name: string }
let area: { delivery_area_id: number; delivery_fee: number }
let spicyId: number
let normalId: number

async function api(method: string, p: string, body?: unknown): Promise<{ status: number; body: any }> {
  const res = await fetch(base + p, {
    method,
    headers: body !== undefined ? { 'content-type': 'application/json' } : {},
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  return { status: res.status, body: await res.json() }
}

/** Place an order the way the website does. */
async function place(over: Record<string, unknown> = {}): Promise<any> {
  const res = await api('POST', '/api/orders', {
    clientRef: `ref-${Math.random()}`,
    type: 'delivery',
    payment: 'cash',
    customer: { name: 'منى أحمد', phone: '01001234567', address: 'شارع ٩، عمارة ١٢', areaId: area.delivery_area_id },
    notes: 'صوص زيادة',
    lines: [
      { itemId: meal.item_id, qty: 2, optionIds: [spicyId] },
      { itemId: plain.item_id, qty: 1, optionIds: [] },
    ],
    ...over,
  })
  expect(res.status, JSON.stringify(res.body)).toBe(201)
  lastPlaced = res.body.order.id
  return res.body.order
}

const track = async (id: string) => (await api('GET', `/api/orders/${id}`)).body.order
/** The till's copy of the most recently placed order. */
let lastPlaced = ''
const newest = () => web.listWebOrders('recent').find(o => o.remote_id === lastPlaced)!

beforeAll(async () => {
  initDatabase()
  const db = getDb()
  const user = (username: string): SessionUser => {
    const u = db.prepare(`SELECT user_id, role, full_name, username FROM users WHERE username = ?`).get(username) as any
    return { userId: u.user_id, role: u.role, fullName: u.full_name, username: u.username }
  }
  cashier = user('cashier1')
  owner = user('admin')

  const items = db.prepare(`SELECT item_id, price, name FROM menu_items WHERE is_active = 1 ORDER BY item_id LIMIT 2`).all() as any[]
  meal = items[0]
  plain = items[1]
  // The meal asks a question — the case where a stale or borrowed option could cost money.
  const groups = setItemVariants(meal.item_id, [
    { groupName: 'التتبيلة', options: [{ optionName: 'عادي', priceDelta: 0 }, { optionName: 'حار', priceDelta: 5 }] },
  ])
  normalId = groups[0].options[0].variant_option_id
  spicyId = groups[0].options[1].variant_option_id
  area = db.prepare(`SELECT delivery_area_id, delivery_fee FROM delivery_areas WHERE is_active = 1 ORDER BY delivery_area_id LIMIT 1`).get() as any

  if (!getWorkShiftStatus().open) startWorkShiftManually(owner.userId)

  dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'web-orders-'))
  relay = createRelay({
    tillKey: KEY,
    dataFile: path.join(dataDir, 'relay.json'),
    siteDir: dataDir,
    log: () => {},
    orderLimit: 1000,
  })
  const addr = await relay.listen(0, '127.0.0.1')
  base = `http://127.0.0.1:${addr.port}`

  web.setWebConfig({ relayUrl: base, key: KEY, enabled: true })
  web.__resetWebSync((url: string, init: any) => fetch(url, init))
})

afterAll(async () => {
  await relay?.close()
  fs.rmSync(dataDir, { recursive: true, force: true })
})

beforeEach(() => {
  web.setAccepting(true)
})

describe('configuration', () => {
  it('refuses a plain-http relay on the internet — the key travels in a header', () => {
    expect(() => web.normalizeRelayUrl('http://orders.example.com')).toThrow()
    expect(web.normalizeRelayUrl('https://orders.example.com/')).toBe('https://orders.example.com')
    expect(web.normalizeRelayUrl('http://192.168.1.20:8080')).toBe('http://192.168.1.20:8080')
  })

  it('never hands the key back to a screen', () => {
    const cfg = web.getWebConfig() as any
    expect(cfg.keySet).toBe(true)
    expect(JSON.stringify(cfg)).not.toContain(KEY)
  })
})

describe('publishing the menu', () => {
  it('the first sync puts the till’s own menu and prices on the website', async () => {
    expect(await web.syncOnce()).toBe('ok')
    const shop = (await api('GET', '/api/shop')).body
    expect(shop.open).toBe(true)
    const item = shop.snapshot.items.find((i: any) => i.id === meal.item_id)
    expect(item.price).toBe(meal.price)
    expect(item.variants[0].options.map((o: any) => o.name)).toEqual(['عادي', 'حار'])
    expect(shop.snapshot.areas.some((a: any) => a.id === area.delivery_area_id)).toBe(true)
    // Costs and stock stay on the till.
    expect(JSON.stringify(shop.snapshot)).not.toContain('cost')
  })

  it('a dish taken off the POS grid comes off the website at the next sync', async () => {
    const db = getDb()
    const last = db.prepare(`SELECT item_id FROM menu_items WHERE is_active = 1 ORDER BY item_id DESC LIMIT 1`).get() as any
    db.prepare(`UPDATE menu_items SET is_active = 0 WHERE item_id = ?`).run(last.item_id)
    await web.syncOnce()
    let shop = (await api('GET', '/api/shop')).body
    expect(shop.snapshot.items.some((i: any) => i.id === last.item_id)).toBe(false)
    db.prepare(`UPDATE menu_items SET is_active = 1 WHERE item_id = ?`).run(last.item_id)
    await web.syncOnce()
    shop = (await api('GET', '/api/shop')).body
    expect(shop.snapshot.items.some((i: any) => i.id === last.item_id)).toBe(true)
  })

  it('pausing online orders closes the website, and resuming opens it', async () => {
    web.setAccepting(false)
    await web.syncOnce()
    let shop = (await api('GET', '/api/shop')).body
    expect(shop.open).toBe(false)
    expect(shop.reason).toBe('paused')
    expect((await api('POST', '/api/orders', { type: 'takeaway' })).status).toBe(409)
    web.setAccepting(true)
    await web.syncOnce()
    shop = (await api('GET', '/api/shop')).body
    expect(shop.open).toBe(true)
  })
})

describe('a delivery order, start to finish', () => {
  it('arrives, is accepted, and follows the delivery board to the customer’s door', async () => {
    const placed = await place()
    expect(placed.status).toBe('pending')

    // ---- collected ----
    await web.syncOnce()
    const w = newest()
    expect(w.remote_id).toBe(placed.id)
    expect(w.status).toBe('new')
    expect(w.customer_phone).toBe('01001234567')
    expect(w.lines).toHaveLength(2)
    expect(web.countNewWebOrders()).toBeGreaterThan(0)
    expect((await track(placed.id)).status).toBe('received')

    // ---- accepted: rung up through the ordinary till path ----
    const { result } = web.acceptWebOrder(w.web_order_id, cashier)
    const order = getDb().prepare(`SELECT * FROM orders WHERE order_id = ?`).get(result.orderId) as any
    const expected = (meal.price + 5) * 2 + plain.price + area.delivery_fee
    expect(order.total_amount).toBe(expected)
    expect(order.order_type).toBe('delivery')
    expect(order.delivery_fee).toBe(area.delivery_fee)
    expect(order.cashier_id).toBe(cashier.userId)
    expect(order.customer_phone).toBe('01001234567')
    expect(order.notes).toContain(placed.code)
    expect(order.notes).toContain('صوص زيادة')
    expect(order.tax).toBe(0) // VAT is a dine-in charge
    const lines = getDb().prepare(`SELECT * FROM order_items WHERE order_id = ? ORDER BY order_item_id`).all(result.orderId) as any[]
    expect(lines[0].variant_label).toBe('حار')
    expect(lines[0].unit_price).toBe(meal.price + 5)

    await web.syncOnce()
    let t = await track(placed.id)
    expect(t.status).toBe('preparing')
    expect(t.final).toEqual({ invoiceNumber: result.invoiceNumber, total: expected })
    expect(t.etaMinutes).toBe(web.getWebConfig().etaDelivery)

    // ---- the delivery board drives the rest ----
    const driver = delivery.upsertDriver('سائق الاختبار', '0111', 1)
    delivery.setDeliveryStatus(result.orderId, 'pending', cashier.userId)
    await web.syncOnce()
    expect((await track(placed.id)).status).toBe('ready')

    delivery.assignDriver(result.orderId, driver.driver_id, cashier.userId)
    await web.syncOnce()
    expect((await track(placed.id)).status).toBe('on_the_way')

    delivery.setDeliveryStatus(result.orderId, 'delivered', cashier.userId)
    await web.syncOnce()
    t = await track(placed.id)
    expect(t.status).toBe('delivered')
    expect(t.timeline.map((x: any) => x.status)).toEqual(['pending', 'received', 'preparing', 'ready', 'on_the_way', 'delivered'])

    // Finished and confirmed: it is not re-sent on every sync forever.
    expect(web.pendingStatusUpdates().some(u => u.id === placed.id)).toBe(false)
    expect(web.listWebOrders('active').some(o => o.remote_id === placed.id)).toBe(false)
  })
})

describe('the till decides the price', () => {
  it('a price changed after the customer ordered is charged at the till’s price, and shown', async () => {
    const placed = await place({ lines: [{ itemId: plain.item_id, qty: 1, optionIds: [] }] })
    await web.syncOnce()
    getDb().prepare(`UPDATE menu_items SET price = price + 10 WHERE item_id = ?`).run(plain.item_id)
    try {
      const { result } = web.acceptWebOrder(newest().web_order_id, cashier)
      expect(result.totalAmount).toBe(plain.price + 10 + area.delivery_fee)
      await web.syncOnce()
      const t = await track(placed.id)
      expect(t.quote.total).toBe(plain.price + area.delivery_fee)
      expect(t.final.total).toBe(plain.price + 10 + area.delivery_fee)
    } finally {
      getDb().prepare(`UPDATE menu_items SET price = ? WHERE item_id = ?`).run(plain.price, plain.item_id)
    }
  })

  it('a dish whose choices were edited after ordering is stopped, not silently re-priced', async () => {
    await place({ lines: [{ itemId: meal.item_id, qty: 1, optionIds: [spicyId] }] })
    await web.syncOnce()
    const pending = newest()
    const groups = setItemVariants(meal.item_id, [
      { groupName: 'التتبيلة', options: [{ optionName: 'عادي', priceDelta: 0 }, { optionName: 'حار', priceDelta: 5 }] },
    ])
    try {
      expect(() => web.acceptWebOrder(pending.web_order_id, cashier)).toThrow(/اتغيرت/)
      // Nothing was rung up and the order is still waiting for a decision.
      expect(web.getWebOrder(pending.web_order_id)!.status).toBe('new')
      expect(web.getWebOrder(pending.web_order_id)!.order_id).toBeNull()
      web.rejectWebOrder(pending.web_order_id, 'صنف من الطلب خلص', cashier)
    } finally {
      normalId = groups[0].options[0].variant_option_id
      spicyId = groups[0].options[1].variant_option_id
      await web.syncOnce() // republish the new option ids
    }
  })
})

describe('the cashier says no, or changes their mind', () => {
  it('a rejection reaches the customer with its reason, and books nothing', async () => {
    const before = (getDb().prepare(`SELECT COUNT(*) AS c FROM orders`).get() as any).c
    const placed = await place()
    await web.syncOnce()
    web.rejectWebOrder(newest().web_order_id, 'العنوان خارج منطقة التوصيل', cashier)
    await web.syncOnce()
    const t = await track(placed.id)
    expect(t.status).toBe('rejected')
    expect(t.reason).toBe('العنوان خارج منطقة التوصيل')
    expect((getDb().prepare(`SELECT COUNT(*) AS c FROM orders`).get() as any).c).toBe(before)
  })

  it('a rejection needs a reason — the customer reads it', async () => {
    await place()
    await web.syncOnce()
    expect(() => web.rejectWebOrder(newest().web_order_id, '  ', cashier)).toThrow()
    web.rejectWebOrder(newest().web_order_id, 'المطعم زحمة جداً دلوقتي', cashier)
  })

  it('voiding the invoice tells the customer it was cancelled', async () => {
    const placed = await place()
    await web.syncOnce()
    const { result } = web.acceptWebOrder(newest().web_order_id, cashier)
    await web.syncOnce()
    voidOrder(result.orderId, owner.userId, 'العميل لغى بالتليفون')
    await web.syncOnce()
    const t = await track(placed.id)
    expect(t.status).toBe('cancelled')
    expect(t.reason).toBe('العميل لغى بالتليفون')
  })

  it('an order cannot be accepted twice, or accepted after being rejected', async () => {
    await place()
    await web.syncOnce()
    const id = newest().web_order_id
    web.acceptWebOrder(id, cashier)
    expect(() => web.acceptWebOrder(id, cashier)).toThrow()
    expect(() => web.rejectWebOrder(id, 'x', cashier)).toThrow()
  })

  it('the accountant reads the inbox but does not take orders', async () => {
    await place()
    await web.syncOnce()
    const accountant = { ...owner, role: 'accountant' as const }
    expect(() => web.acceptWebOrder(newest().web_order_id, accountant)).toThrow()
    web.rejectWebOrder(newest().web_order_id, 'اختبار', cashier)
  })
})

describe('takeaway', () => {
  it('goes preparing → ready → collected from the web orders screen', async () => {
    const placed = await place({
      type: 'takeaway',
      customer: { name: 'علي', phone: '01112223334' },
      lines: [{ itemId: plain.item_id, qty: 3, optionIds: [] }],
    })
    await web.syncOnce()
    const { result } = web.acceptWebOrder(newest().web_order_id, cashier)
    expect(result.deliveryFee).toBe(0)
    expect(result.totalAmount).toBe(plain.price * 3)
    await web.syncOnce()
    expect((await track(placed.id)).status).toBe('preparing')

    const id = newest().web_order_id
    web.setTakeawayStage(id, 'ready', cashier)
    await web.syncOnce()
    expect((await track(placed.id)).status).toBe('ready')
    web.setTakeawayStage(id, 'collected', cashier)
    await web.syncOnce()
    expect((await track(placed.id)).status).toBe('collected')
  })
})

describe('an unreliable connection', () => {
  it('an order the relay sends twice is filed once', () => {
    const order = {
      id: 'DupDupDupDupDupDup01', code: 'W-1111', createdAt: new Date().toISOString(),
      type: 'takeaway', payment: 'cash', customer: { name: 'x', phone: '01000000000', address: null, areaId: null },
      notes: null, lines: [{ itemId: plain.item_id, name: 'x', optionIds: [], label: null, qty: 1, unitPrice: 1, total: 1 }],
      quote: { subtotal: 1, deliveryFee: 0, total: 1 },
    }
    const a = web.ingestRelayOrders([order])
    const b = web.ingestRelayOrders([order])
    expect(a.inserted).toHaveLength(1)
    expect(b.inserted).toHaveLength(0)
    // Still acknowledged the second time, so the relay stops re-sending it.
    expect(b.ack).toEqual([order.id])
    expect((getDb().prepare(`SELECT COUNT(*) AS c FROM web_orders WHERE remote_id = ?`).get(order.id) as any).c).toBe(1)
    getDb().prepare(`DELETE FROM web_orders WHERE remote_id = ?`).run(order.id)
  })

  it('garbage from the relay is ignored rather than filed', () => {
    const { ack, inserted } = web.ingestRelayOrders([{ id: 'x' }, null, { id: '../../etc', code: 1 }])
    expect(ack).toEqual([])
    expect(inserted).toEqual([])
  })

  it('a status the relay never received is sent again at the next sync', async () => {
    const placed = await place()
    await web.syncOnce()
    const id = newest().web_order_id
    web.acceptWebOrder(id, cashier)

    // The relay is unreachable for one round.
    web.__resetWebSync(async () => { throw new Error('offline') })
    await expect(web.syncOnce()).rejects.toThrow()
    expect(web.getSyncStatus().lastError).toBeTruthy()
    expect((await track(placed.id)).status).toBe('received')

    // Back again — and the customer catches up without anybody doing anything.
    web.__resetWebSync((url: string, init: any) => fetch(url, init))
    await web.syncOnce()
    expect((await track(placed.id)).status).toBe('preparing')
    expect(web.getSyncStatus().lastError).toBeNull()
  })

  it('a wrong key is reported in words, and collects nothing', async () => {
    getDb().prepare(`UPDATE settings SET value = ? WHERE key = 'web_relay_key'`).run('wrong-key-wrong-key-123')
    try {
      await expect(web.syncOnce()).rejects.toThrow(/مفتاح/)
    } finally {
      getDb().prepare(`UPDATE settings SET value = ? WHERE key = 'web_relay_key'`).run(KEY)
    }
    await web.syncOnce()
  })
})

describe('machines that must not collect', () => {
  it('a node till leaves it to the master', async () => {
    getDb().prepare(`INSERT OR REPLACE INTO settings (key, value) VALUES ('net_mode', 'node')`).run()
    try {
      expect(await web.syncOnce()).toBe('node')
      expect(web.getSyncStatus().skipped).toBe('node')
    } finally {
      getDb().prepare(`INSERT OR REPLACE INTO settings (key, value) VALUES ('net_mode', 'standalone')`).run()
    }
  })

  it('switched off, it does nothing at all', async () => {
    web.setWebConfig({ enabled: false })
    try {
      expect(await web.syncOnce()).toBe('disabled')
    } finally {
      web.setWebConfig({ enabled: true })
    }
  })
})
