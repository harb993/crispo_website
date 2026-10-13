import { Cart } from './lib/cart'
import type { Shop } from './lib/types'
import type { Stage } from './gl/stage'

/** The page's shared state. Small enough not to need a framework. */
export const state = {
  shop: { open: false, reason: null, snapshot: null, updatedAt: null } as Shop,
  cart: new Cart(),
  stage: null as Stage | null,
}

type Events = 'shop' | 'cart-open' | 'added'
const bus = new EventTarget()

export function emit(type: Events, detail?: unknown): void {
  bus.dispatchEvent(new CustomEvent(type, { detail }))
}

export function on<T = unknown>(type: Events, fn: (detail: T) => void): void {
  bus.addEventListener(type, e => fn((e as CustomEvent<T>).detail))
}

export function setShop(shop: Shop): void {
  state.shop = shop
  emit('shop', shop)
}
