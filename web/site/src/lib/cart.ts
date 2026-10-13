import type { Snapshot, Item, Option } from './types'
import { store } from './format'

export interface CartLine {
  key: string
  itemId: number
  optionIds: number[]
  qty: number
}

export interface PricedLine extends CartLine {
  item: Item
  options: Option[]
  label: string | null
  unitPrice: number
  total: number
}

const KEY = 'crispo:cart'
const MAX_QTY = 50

const round2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100

/**
 * The basket, kept in this browser.
 *
 * Lines hold ids only. Prices are worked out from the menu currently loaded, every
 * time, so a cart left overnight shows today's prices — and a line whose dish has
 * since come off the menu simply drops out instead of being sent and refused.
 */
export class Cart {
  private lines: CartLine[] = store.get<CartLine[]>(KEY, []).filter(l => Number.isInteger(l?.itemId) && l.qty > 0)
  private listeners = new Set<() => void>()

  subscribe(fn: () => void): () => void {
    this.listeners.add(fn)
    return () => this.listeners.delete(fn)
  }

  private changed(): void {
    store.set(KEY, this.lines)
    this.listeners.forEach(fn => fn())
  }

  static keyOf(itemId: number, optionIds: number[]): string {
    return `${itemId}:${[...optionIds].sort((a, b) => a - b).join(',')}`
  }

  add(itemId: number, optionIds: number[], qty = 1): void {
    const key = Cart.keyOf(itemId, optionIds)
    const line = this.lines.find(l => l.key === key)
    if (line) line.qty = Math.min(MAX_QTY, line.qty + qty)
    else this.lines.push({ key, itemId, optionIds: [...optionIds], qty: Math.min(MAX_QTY, qty) })
    this.changed()
  }

  setQty(key: string, qty: number): void {
    const line = this.lines.find(l => l.key === key)
    if (!line) return
    if (qty <= 0) this.lines = this.lines.filter(l => l.key !== key)
    else line.qty = Math.min(MAX_QTY, qty)
    this.changed()
  }

  clear(): void {
    this.lines = []
    this.changed()
  }

  count(): number {
    return this.lines.reduce((s, l) => s + l.qty, 0)
  }

  raw(): CartLine[] {
    return this.lines.map(l => ({ ...l }))
  }

  /** Price every line against the loaded menu; drop what is no longer on it. */
  priced(snapshot: Snapshot | null): { lines: PricedLine[]; subtotal: number; dropped: number } {
    if (!snapshot) return { lines: [], subtotal: 0, dropped: 0 }
    const items = new Map(snapshot.items.map(i => [i.id, i]))
    const out: PricedLine[] = []
    let dropped = 0
    for (const line of this.lines) {
      const item = items.get(line.itemId)
      if (!item) { dropped++; continue }
      const options: Option[] = []
      let valid = true
      for (const g of item.variants) {
        const pick = g.options.find(o => line.optionIds.includes(o.id))
        if (!pick) { valid = false; break }
        options.push(pick)
      }
      if (!valid || options.length !== line.optionIds.length) { dropped++; continue }
      const unitPrice = round2(Math.max(0, item.price + options.reduce((s, o) => s + o.delta, 0)))
      out.push({
        ...line,
        item,
        options,
        label: options.length ? options.map(o => o.name).join(' · ') : null,
        unitPrice,
        total: round2(unitPrice * line.qty),
      })
    }
    if (dropped) {
      const keep = new Set(out.map(l => l.key))
      this.lines = this.lines.filter(l => keep.has(l.key))
      store.set(KEY, this.lines)
    }
    return { lines: out, subtotal: round2(out.reduce((s, l) => s + l.total, 0)), dropped }
  }
}
