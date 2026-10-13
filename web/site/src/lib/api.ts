import type { Shop, PublicOrder, Snapshot } from './types'

/**
 * The relay is normally the same origin that served this page. VITE_API_BASE points
 * elsewhere for a site hosted apart from it.
 */
const BASE = String(import.meta.env.VITE_API_BASE ?? '').replace(/\/$/, '')

export class ApiError extends Error {
  constructor(message: string, readonly code: string, readonly status: number, readonly body: any) {
    super(message)
  }
}

async function request<T>(path: string, init: RequestInit = {}, timeoutMs = 12_000): Promise<T> {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs)
  let res: Response
  try {
    res = await fetch(BASE + path, {
      ...init,
      signal: ctrl.signal,
      headers: { accept: 'application/json', ...(init.body ? { 'content-type': 'application/json' } : {}), ...init.headers },
    })
  } catch {
    throw new ApiError('مفيش اتصال بالإنترنت — جرّب تاني', 'network', 0, null)
  } finally {
    clearTimeout(timer)
  }
  const body = await res.json().catch(() => ({}))
  if (!res.ok || body?.ok === false) {
    throw new ApiError(body?.error || 'حصلت مشكلة — جرّب تاني', body?.code || 'error', res.status, body)
  }
  return body as T
}

export async function fetchShop(): Promise<Shop> {
  const body = await request<{ open: boolean; reason: Shop['reason']; snapshot: Snapshot | null; updatedAt: string | null }>('/api/shop')
  return { open: body.open, reason: body.reason, snapshot: body.snapshot, updatedAt: body.updatedAt }
}

export interface OrderRequest {
  clientRef: string
  type: 'delivery' | 'takeaway'
  payment: 'cash' | 'card'
  customer: { name: string; phone: string; address?: string; areaId?: number }
  notes?: string
  lines: { itemId: number; qty: number; optionIds: number[] }[]
}

export async function placeOrder(order: OrderRequest): Promise<PublicOrder> {
  const body = await request<{ order: PublicOrder }>('/api/orders', { method: 'POST', body: JSON.stringify(order) }, 20_000)
  return body.order
}

export async function fetchOrder(id: string): Promise<PublicOrder> {
  const body = await request<{ order: PublicOrder }>(`/api/orders/${encodeURIComponent(id)}`)
  return body.order
}
