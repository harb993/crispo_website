import { state, on } from '../state'
import { escapeHtml, money, normalizePhone, store } from '../lib/format'
import { placeOrder, ApiError, fetchShop } from '../lib/api'
import { setShop } from '../state'
import { openTrack } from './track'
import { toast } from './toast'
import { closedMessage } from './status'

const root = () => document.querySelector<HTMLElement>('#drawer')!
const form = () => root().querySelector<HTMLFormElement>('.checkout')!

type View = 'cart' | 'checkout'
let view: View = 'cart'
/**
 * One idempotency key per attempt at checking out. It survives a failed send, so
 * pressing the button again after a dropped connection cannot place the order twice,
 * and is replaced once an order has gone through.
 */
let clientRef = newRef()
let sending = false

function newRef(): string {
  return crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

interface Profile { name?: string; phone?: string; areaId?: string; address?: string; type?: string; payment?: string }
const PROFILE = 'crispo:profile'

function orderType(): 'delivery' | 'takeaway' {
  return (form().elements.namedItem('type') as RadioNodeList).value === 'takeaway' ? 'takeaway' : 'delivery'
}

function deliveryFee(): number {
  if (orderType() !== 'delivery') return 0
  const id = Number((form().elements.namedItem('areaId') as HTMLSelectElement).value)
  return state.shop.snapshot?.areas.find(a => a.id === id)?.fee ?? 0
}

function render(): void {
  const el = root()
  const { lines, subtotal, dropped } = state.cart.priced(state.shop.snapshot)
  if (dropped) toast('في صنف اتشال من المنيو — شيلناه من سلتك')

  el.classList.toggle('drawer--empty', lines.length === 0 && view === 'cart')
  el.querySelector('.cart')!.innerHTML = lines.map(l => `
    <li data-key="${escapeHtml(l.key)}">
      <span class="cart__name">${escapeHtml(l.item.name)}</span>
      ${l.label ? `<span class="cart__label">${escapeHtml(l.label)}</span>` : ''}
      <div class="cart__row">
        <div class="qty qty--sm">
          <button type="button" data-step="-1" aria-label="أقل">−</button>
          <output class="qty__n">${l.qty}</output>
          <button type="button" data-step="1" aria-label="أكتر">+</button>
        </div>
        <button class="cart__remove" type="button" data-remove>شيل</button>
        <b class="cart__price">${money(l.total)}</b>
      </div>
    </li>`).join('')

  const fee = view === 'checkout' ? deliveryFee() : 0
  el.querySelector('.totals__sub')!.textContent = money(subtotal)
  el.querySelector<HTMLElement>('.totals__fee-row')!.hidden = !(view === 'checkout' && orderType() === 'delivery')
  el.querySelector('.totals__fee')!.textContent = money(fee)
  el.querySelector('.totals__total')!.textContent = money(subtotal + fee)

  const go = el.querySelector<HTMLButtonElement>('.drawer__go')!
  go.querySelector('span')!.textContent = view === 'cart' ? 'كمّل الطلب' : sending ? 'بنبعت…' : 'ابعت الطلب'
  go.disabled = sending || lines.length === 0
  el.querySelector<HTMLElement>('.drawer__note')!.hidden = view !== 'checkout'

  document.querySelector('.nav__count')!.textContent = String(state.cart.count())
}

function setView(v: View): void {
  view = v
  const el = root()
  el.querySelector<HTMLElement>('.drawer__view--cart')!.hidden = v !== 'cart'
  form().hidden = v !== 'checkout'
  el.querySelector<HTMLElement>('.drawer__back')!.hidden = v !== 'checkout'
  el.querySelector('#drawer-title')!.textContent = v === 'cart' ? 'سلتك' : 'بيانات الطلب'
  render()
}

function fillAreas(): void {
  const select = form().elements.namedItem('areaId') as HTMLSelectElement
  const areas = state.shop.snapshot?.areas ?? []
  const current = select.value
  select.innerHTML = `<option value="">اختار منطقتك</option>` +
    areas.map(a => `<option value="${a.id}">${escapeHtml(a.name)} — توصيل ${money(a.fee)}</option>`).join('')
  if (areas.some(a => String(a.id) === current)) select.value = current

  const takeaway = form().querySelector<HTMLInputElement>('input[name="type"][value="takeaway"]')!
  takeaway.disabled = state.shop.snapshot?.takeaway === false
  takeaway.closest('label')!.hidden = takeaway.disabled
}

function restoreProfile(): void {
  const p = store.get<Profile>(PROFILE, {})
  const f = form()
  for (const key of ['name', 'phone', 'address'] as const) {
    const input = f.elements.namedItem(key) as HTMLInputElement
    if (p[key] && !input.value) input.value = p[key]!
  }
  const area = f.elements.namedItem('areaId') as HTMLSelectElement
  if (p.areaId && !area.value && [...area.options].some(o => o.value === p.areaId)) area.value = p.areaId
  for (const key of ['type', 'payment'] as const) {
    const radio = f.querySelector<HTMLInputElement>(`input[name="${key}"][value="${p[key]}"]`)
    if (radio && !radio.disabled) radio.checked = true
  }
  f.classList.toggle('is-takeaway', orderType() === 'takeaway')
}

function fieldError(name: string, message: string): false {
  const f = form()
  const field = (f.elements.namedItem(name) as HTMLElement | null)?.closest('.field')
  field?.classList.add('is-invalid')
  const err = f.querySelector<HTMLElement>('.checkout__error')!
  err.textContent = message
  err.hidden = false
  ;(f.elements.namedItem(name) as HTMLElement | null)?.focus()
  return false
}

function validate(): false | { name: string; phone: string; address: string; areaId: number; notes: string } {
  const f = form()
  f.querySelectorAll('.is-invalid').forEach(x => x.classList.remove('is-invalid'))
  f.querySelector<HTMLElement>('.checkout__error')!.hidden = true

  const val = (n: string) => ((f.elements.namedItem(n) as HTMLInputElement).value ?? '').trim()
  const name = val('name')
  if (name.length < 2) return fieldError('name', 'اكتب اسمك')
  const phone = normalizePhone(val('phone'))
  if (!phone) return fieldError('phone', 'رقم الموبايل مش مظبوط — اكتبه زي 01012345678')
  let address = ''
  let areaId = 0
  if (orderType() === 'delivery') {
    areaId = Number(val('areaId'))
    if (!areaId) return fieldError('areaId', 'اختار منطقة التوصيل')
    address = val('address')
    if (address.length < 5) return fieldError('address', 'اكتب العنوان بالتفصيل عشان الطيار يوصلك')
  }
  return { name, phone, address, areaId, notes: val('notes') }
}

async function submit(): Promise<void> {
  if (sending) return
  if (!state.shop.open) {
    toast(closedMessage(state.shop))
    return
  }
  const data = validate()
  if (!data) return
  const { lines } = state.cart.priced(state.shop.snapshot)
  if (lines.length === 0) return

  sending = true
  render()
  const payment = (form().elements.namedItem('payment') as RadioNodeList).value === 'card' ? 'card' : 'cash'
  const type = orderType()
  try {
    const order = await placeOrder({
      clientRef,
      type,
      payment,
      customer: {
        name: data.name,
        phone: data.phone,
        ...(type === 'delivery' ? { address: data.address, areaId: data.areaId } : {}),
      },
      notes: data.notes || undefined,
      lines: lines.map(l => ({ itemId: l.itemId, qty: l.qty, optionIds: l.optionIds })),
    })
    store.set(PROFILE, {
      name: data.name, phone: data.phone, address: data.address,
      areaId: data.areaId ? String(data.areaId) : '', type, payment,
    } satisfies Profile)
    clientRef = newRef()
    state.cart.clear()
    closeCart()
    setTimeout(() => setView('cart'), 800)
    openTrack(order.id, order)
  } catch (err) {
    const e = err as ApiError
    const box = form().querySelector<HTMLElement>('.checkout__error')!
    box.textContent = e.message
    box.hidden = false
    if (e.code === 'menu_changed' || e.code === 'closed') {
      // The till changed something under us — take the fresh menu and let them retry.
      try { setShop(await fetchShop()) } catch { /* keep what we have */ }
    }
    if (e.body?.field) fieldError(e.body.field, e.message)
  } finally {
    sending = false
    render()
  }
}

export function openCart(): void {
  const el = root()
  fillAreas()
  restoreProfile()
  setView('cart')
  el.classList.add('is-open')
  el.setAttribute('aria-hidden', 'false')
  document.documentElement.classList.add('is-locked')
  el.querySelector<HTMLElement>('[data-close-cart].icon-btn')?.focus({ preventScroll: true })
}

export function closeCart(): void {
  const el = root()
  el.classList.remove('is-open')
  el.setAttribute('aria-hidden', 'true')
  document.documentElement.classList.remove('is-locked')
}

export function initDrawer(): void {
  const el = root()
  state.cart.subscribe(render)
  on('shop', () => { fillAreas(); render() })
  on('added', () => {
    const btn = document.querySelector<HTMLElement>('.nav__cart')!
    btn.classList.remove('is-bump')
    void btn.offsetWidth
    btn.classList.add('is-bump')
  })

  document.querySelectorAll('[data-open-cart]').forEach(b => b.addEventListener('click', openCart))
  el.addEventListener('click', e => {
    const t = e.target as HTMLElement
    if (t.closest('[data-close-cart]')) return closeCart()
    const li = t.closest<HTMLElement>('li[data-key]')
    if (li) {
      const key = li.dataset.key!
      const line = state.cart.raw().find(l => l.key === key)
      if (!line) return
      const step = t.closest<HTMLElement>('[data-step]')
      if (step) state.cart.setQty(key, line.qty + Number(step.dataset.step))
      if (t.closest('[data-remove]')) state.cart.setQty(key, 0)
    }
  })
  el.querySelector('.drawer__back')!.addEventListener('click', () => setView('cart'))
  el.querySelector('.drawer__go')!.addEventListener('click', () => {
    if (view === 'cart') {
      if (!state.shop.open) toast(closedMessage(state.shop), 4000)
      setView('checkout')
      ;(form().elements.namedItem('name') as HTMLInputElement).focus({ preventScroll: true })
    } else {
      void submit()
    }
  })
  form().addEventListener('change', () => {
    form().classList.toggle('is-takeaway', orderType() === 'takeaway')
    render()
  })
  form().addEventListener('input', e => (e.target as HTMLElement).closest('.field')?.classList.remove('is-invalid'))
  form().addEventListener('submit', e => { e.preventDefault(); void submit() })
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && el.classList.contains('is-open')) closeCart()
  })
  render()
}
