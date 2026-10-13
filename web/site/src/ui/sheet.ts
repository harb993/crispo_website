import gsap from 'gsap'
import { state } from '../state'
import { escapeHtml, money, num } from '../lib/format'
import { addToCart } from './menu'
import type { Item } from '../lib/types'

const root = () => document.querySelector<HTMLElement>('#sheet')!

let item: Item | null = null
let qty = 1
let lastFocus: HTMLElement | null = null

function chosen(): number[] {
  return [...root().querySelectorAll<HTMLInputElement>('.sheet__groups input:checked')].map(i => Number(i.value))
}

function unitPrice(): number {
  if (!item) return 0
  const ids = new Set(chosen())
  const delta = item.variants.flatMap(g => g.options).filter(o => ids.has(o.id)).reduce((s, o) => s + o.delta, 0)
  return Math.max(0, item.price + delta)
}

function refresh(): void {
  root().querySelector('.qty__n')!.textContent = String(qty)
  root().querySelector('.sheet__price')!.textContent = money(unitPrice() * qty)
}

/** The questions an item asks, one answer each — exactly what the cashier would ask. */
export function openSheet(it: Item): void {
  item = it
  qty = 1
  lastFocus = document.activeElement as HTMLElement
  const el = root()
  const cat = state.shop.snapshot?.categories.find(c => c.id === it.categoryId)
  el.querySelector('.sheet__cat')!.textContent = cat?.name ?? ''
  el.querySelector('.sheet__title')!.textContent = it.name
  el.querySelector('.sheet__desc')!.textContent = it.description ?? ''
  el.querySelector('.sheet__groups')!.innerHTML = it.variants.map(g => `
    <fieldset class="opt-group">
      <legend>${escapeHtml(g.name)}<small>مطلوب</small></legend>
      <div class="pills">
        ${g.options.map((o, i) => `
          <label class="pill">
            <input type="radio" name="g${g.id}" value="${o.id}" ${i === 0 ? 'checked' : ''} />
            <span>${escapeHtml(o.name)}${o.delta ? `<small>${o.delta > 0 ? '+' : '−'}${num(Math.abs(o.delta))}</small>` : ''}</span>
          </label>`).join('')}
      </div>
    </fieldset>`).join('')
  refresh()
  el.hidden = false
  document.documentElement.classList.add('is-locked')
  gsap.fromTo(el.querySelector('.sheet__scrim'), { opacity: 0 }, { opacity: 1, duration: 0.4 })
  gsap.fromTo(el.querySelector('.sheet__panel'), { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out' })
  el.querySelector<HTMLElement>('.sheet__add')!.focus({ preventScroll: true })
}

export function closeSheet(): void {
  const el = root()
  if (el.hidden) return
  gsap.to(el.querySelector('.sheet__panel'), { y: 40, opacity: 0, duration: 0.3, ease: 'power2.in' })
  gsap.to(el.querySelector('.sheet__scrim'), {
    opacity: 0, duration: 0.3, onComplete: () => {
      el.hidden = true
      document.documentElement.classList.remove('is-locked')
      lastFocus?.focus({ preventScroll: true })
    },
  })
}

export function initSheet(): void {
  const el = root()
  el.addEventListener('click', e => {
    const t = e.target as HTMLElement
    if (t.closest('[data-close-sheet]')) closeSheet()
    const step = t.closest<HTMLElement>('[data-qty]')
    if (step) {
      qty = Math.max(1, Math.min(50, qty + Number(step.dataset.qty)))
      refresh()
    }
  })
  el.addEventListener('change', refresh)
  el.querySelector('.sheet__add')!.addEventListener('click', () => {
    if (!item) return
    const row = document.querySelector<HTMLElement>(`.dish[data-id="${item.id}"]`)
    addToCart(item, chosen(), qty, row)
    closeSheet()
  })
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !el.hidden) closeSheet()
  })
}
