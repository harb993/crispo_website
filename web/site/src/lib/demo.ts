/**
 * The demo kitchen — the relay and a pretend till, inside the browser.
 *
 * Used by the demo build (VITE_DEMO=1) so the site can be tried anywhere a static page
 * can go, a phone included, with no server behind it. It runs the relay's own
 * validation and pricing (relay/orders.mjs), so what the demo accepts, refuses and
 * charges is exactly what the real site does; only the kitchen is pretend — every
 * order is accepted and walked through the stages on a timer, the way
 * `npm run demo` does on a laptop. Nothing leaves this browser.
 */
import * as relayOrders from '../../../relay/orders.mjs'
import { DEMO_SNAPSHOT } from '../../../relay/demo-menu.mjs'
import { ApiError } from './api-error'
import type { PublicOrder, Shop } from './types'
import { store } from './format'

// Plain JS shared with the relay; typed loosely at this one boundary.
const {
  validateOrder, validateSnapshot, buildOrder, newOrderId, newOrderCode, applyStatus, publicView,
  FINAL_STATUSES, round2,
} = relayOrders as any

const KEY = 'crispo:demo-orders'
const snapshot = validateSnapshot(DEMO_SNAPSHOT)

/** Seconds after placing at which the pretend kitchen moves an order on. */
const SCRIPT: Record<string, [number, string][]> = {
  delivery: [[3, 'received'], [9, 'preparing'], [30, 'ready'], [45, 'on_the_way'], [80, 'delivered']],
  takeaway: [[3, 'received'], [9, 'preparing'], [30, 'ready'], [60, 'collected']],
}

type Stored = Record<string, any>
let orders: Stored = store.get<Stored>(KEY, {})
const save = () => store.set(KEY, orders)

/** Bring an order up to date with how long ago it was placed. */
function advance(order: any): void {
  const age = (Date.now() - Date.parse(order.createdAt)) / 1000
  const due = (SCRIPT[order.type] ?? []).filter(([after]) => age >= after).pop()
  if (!due || due[1] === order.status || FINAL_STATUSES.has(order.status)) return
  const update: Record<string, unknown> = { status: due[1] }
  if (due[1] !== 'received' && !order.final) {
    const n = Object.values(orders).filter((o: any) => o.final).length + 1
    Object.assign(update, {
      invoiceNumber: String(n).padStart(4, '0'),
      total: round2(order.quote.total),
      etaMinutes: snapshot.eta[order.type],
    })
  }
  applyStatus(order, update, Date.now())
  save()
}

const later = <T>(value: T, ms = 350) => new Promise<T>(r => setTimeout(() => r(value), ms))

export async function fetchShop(): Promise<Shop> {
  return later({ open: true, reason: null, snapshot, updatedAt: new Date().toISOString(), demo: true } as Shop, 150)
}

export async function placeOrder(body: unknown): Promise<PublicOrder> {
  const ref = (body as any)?.clientRef
  const existing = Object.values(orders).find((o: any) => ref && o.clientRef === ref)
  if (existing) return later(publicView(existing))
  const checked = validateOrder(body, snapshot)
  if (!checked.ok) throw new ApiError(checked.message, checked.code, checked.code === 'menu_changed' ? 409 : 400, checked)
  const active = new Set(Object.values(orders).filter((o: any) => !FINAL_STATUSES.has(o.status)).map((o: any) => o.code))
  const order = buildOrder(checked.value, { id: newOrderId(), code: newOrderCode((c: string) => active.has(c)), now: Date.now() })
  orders[order.id] = order
  save()
  return later(publicView(order), 700)
}

export async function fetchOrder(id: string): Promise<PublicOrder> {
  const order = orders[id]
  if (!order) throw new ApiError('الطلب غير موجود', 'not_found', 404, null)
  advance(order)
  return later(publicView(order), 120)
}
