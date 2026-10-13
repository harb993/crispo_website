/**
 * A pretend till, for running the website with no restaurant attached.
 *
 * `npm run demo` (or RELAY_DEMO=1) publishes the starter menu the POS ships with
 * and walks every order through the kitchen on a timer, so the whole journey — order,
 * accepted, cooking, with the driver, delivered — can be seen from one laptop.
 *
 * Never enable this on the real relay: it accepts every order without a human ever
 * seeing it.
 */

import { applyStatus, validateSnapshot, round2 } from './orders.mjs'
import { DEMO_SNAPSHOT } from './demo-menu.mjs'

export { DEMO_SNAPSHOT }

/** Seconds after placing an order at which the pretend kitchen moves it on. */
const SCRIPT = {
  delivery: [[3, 'received'], [9, 'preparing'], [35, 'ready'], [50, 'on_the_way'], [95, 'delivered']],
  takeaway: [[3, 'received'], [9, 'preparing'], [35, 'ready'], [80, 'collected']],
}

export function startDemoTill(relay) {
  const { store } = relay
  store.state.snapshot = validateSnapshot(DEMO_SNAPSHOT)
  store.state.snapshotHash = 'demo'
  store.state.snapshotAt = new Date().toISOString()
  let invoice = 0

  const tick = () => {
    const now = Date.now()
    Object.assign(store.state.till, { lastSeen: now, open: true, reason: null, appVersion: 'demo' })
    for (const order of store.orders()) {
      if (order.status === 'expired') continue
      const age = (now - Date.parse(order.createdAt)) / 1000
      // Only the latest step that is due: replaying the earlier ones would walk the
      // order backwards and forwards again on every tick.
      const due = (SCRIPT[order.type] ?? []).filter(([after]) => age >= after).pop()
      if (!due || due[1] === order.status) continue
      const update = { status: due[1] }
      if (due[1] !== 'received' && !order.final) {
        invoice++
        Object.assign(update, {
          invoiceNumber: String(invoice).padStart(4, '0'),
          total: round2(order.quote.total),
          etaMinutes: store.state.snapshot.eta[order.type],
        })
      }
      applyStatus(order, update, now)
    }
    store.save()
  }
  tick()
  const timer = setInterval(tick, 1000)
  timer.unref()
  console.log('[relay] DEMO till running — every order is accepted automatically')
  return () => clearInterval(timer)
}
