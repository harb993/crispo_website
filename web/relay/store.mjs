/**
 * The relay's memory: one JSON file.
 *
 * A database would be the wrong tool. One restaurant takes a few hundred web orders a
 * day at most, every order is short-lived — it matters for an hour and is purged after
 * a fortnight — and the books live on the till, not here. What this has to get right
 * is narrower: survive a restart without losing an order the till has not collected,
 * and never leave a half-written file behind. So writes go to a temp file that is
 * renamed over the real one, which is atomic on every filesystem the relay runs on.
 */

import fs from 'node:fs'
import path from 'node:path'

const EMPTY = () => ({
  snapshot: null,
  snapshotHash: null,
  snapshotAt: null,
  till: { lastSeen: 0, open: false, reason: 'offline', appVersion: null },
  orders: [],
})

export function createStore(file, { saveDelayMs = 150 } = {}) {
  let state = EMPTY()
  if (file && fs.existsSync(file)) {
    try {
      state = { ...EMPTY(), ...JSON.parse(fs.readFileSync(file, 'utf8')) }
    } catch (err) {
      // Keep the unreadable file for a human to look at rather than overwriting it.
      const aside = `${file}.corrupt-${Date.now()}`
      fs.renameSync(file, aside)
      console.error(`[relay] store unreadable, moved to ${aside}:`, err.message)
    }
  }

  const byId = new Map()
  const byClientRef = new Map()
  for (const o of state.orders) {
    byId.set(o.id, o)
    if (o.clientRef) byClientRef.set(o.clientRef, o)
  }

  let timer = null
  let dirty = false

  function writeNow() {
    timer = null
    if (!file || !dirty) return
    dirty = false
    fs.mkdirSync(path.dirname(file), { recursive: true })
    const tmp = `${file}.tmp`
    fs.writeFileSync(tmp, JSON.stringify(state))
    fs.renameSync(tmp, file)
  }

  function save() {
    dirty = true
    if (!timer) timer = setTimeout(writeNow, saveDelayMs)
  }

  return {
    get state() { return state },

    getOrder: id => byId.get(id) ?? null,
    getByClientRef: ref => (ref ? byClientRef.get(ref) ?? null : null),
    orders: () => state.orders,

    addOrder(order) {
      state.orders.push(order)
      byId.set(order.id, order)
      if (order.clientRef) byClientRef.set(order.clientRef, order)
      save()
    },

    /** Drop orders older than the cutoff. Customer details do not linger here. */
    purge(beforeMs) {
      const keep = []
      let dropped = 0
      for (const o of state.orders) {
        if (Date.parse(o.createdAt) < beforeMs) {
          byId.delete(o.id)
          if (o.clientRef) byClientRef.delete(o.clientRef)
          dropped++
        } else keep.push(o)
      }
      if (dropped) { state.orders = keep; save() }
      return dropped
    },

    save,
    flush() {
      if (timer) clearTimeout(timer)
      dirty = true
      writeNow()
    },
  }
}
