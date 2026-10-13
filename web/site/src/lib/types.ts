/** The menu as the till publishes it. Mirrors validateSnapshot() in relay/orders.mjs. */
export interface Snapshot {
  business: { name: string; phone: string; address: string; currency: string }
  eta: { delivery: number; takeaway: number }
  takeaway: boolean
  categories: Category[]
  items: Item[]
  areas: Area[]
}

export interface Category { id: number; name: string; order: number }
export interface Option { id: number; name: string; delta: number }
export interface Group { id: number; name: string; options: Option[] }
export interface Item {
  id: number
  categoryId: number
  name: string
  description: string | null
  price: number
  variants: Group[]
}
export interface Area { id: number; name: string; fee: number }

export type ClosedReason = 'offline' | 'paused' | 'closed' | 'not_configured' | 'preview'

export interface Shop {
  open: boolean
  reason: ClosedReason | null
  snapshot: Snapshot | null
  updatedAt: string | null
  /** True when the relay could not be reached and the bundled sample menu is shown. */
  preview?: boolean
}

export type OrderStatus =
  | 'pending' | 'received' | 'preparing' | 'ready' | 'on_the_way'
  | 'delivered' | 'collected' | 'rejected' | 'cancelled' | 'expired'

export interface PublicOrder {
  id: string
  code: string
  status: OrderStatus
  type: 'delivery' | 'takeaway'
  payment: 'cash' | 'card'
  createdAt: string
  updatedAt: string
  timeline: { status: OrderStatus; at: string }[]
  firstName: string
  areaName: string | null
  lines: { name: string; label: string | null; qty: number; unitPrice: number; total: number }[]
  quote: { subtotal: number; deliveryFee: number; total: number }
  final: { invoiceNumber: string | null; total: number | null } | null
  reason: string | null
  etaMinutes: number | null
}

export const FINAL: ReadonlySet<OrderStatus> = new Set(['delivered', 'collected', 'rejected', 'cancelled', 'expired'])
