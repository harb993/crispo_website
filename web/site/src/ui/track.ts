import gsap from 'gsap'
import { fetchOrder, ApiError } from '../lib/api'
import { escapeHtml, money, store } from '../lib/format'
import { crunch } from '../lib/sound'
import { state } from '../state'
import { FINAL, type OrderStatus, type PublicOrder } from '../lib/types'

const root = () => document.querySelector<HTMLElement>('#track')!
const pill = () => document.querySelector<HTMLElement>('.track-pill')!
const ACTIVE = 'crispo:active-order'

let currentId: string | null = null
let timer = 0
let lastStatus: OrderStatus | null = null

const STEPS: Record<PublicOrder['type'], { status: OrderStatus; label: string }[]> = {
  delivery: [
    { status: 'received', label: 'وصل للمطعم' },
    { status: 'preparing', label: 'في المطبخ' },
    { status: 'ready', label: 'جاهز' },
    { status: 'on_the_way', label: 'مع الطيار' },
    { status: 'delivered', label: 'وصل' },
  ],
  takeaway: [
    { status: 'received', label: 'وصل للمطعم' },
    { status: 'preparing', label: 'في المطبخ' },
    { status: 'ready', label: 'جاهز للاستلام' },
    { status: 'collected', label: 'اتستلم' },
  ],
}

function headline(o: PublicOrder): { title: string; sub: string } {
  const eta = o.etaMinutes ? `الوقت المتوقع حوالي ${o.etaMinutes} دقيقة.` : ''
  const minutes = (Date.now() - Date.parse(o.createdAt)) / 60000
  switch (o.status) {
    case 'pending':
      return { title: 'بنبعت طلبك للمطعم…', sub: 'ثواني والكاشير هيشوفه على شاشته.' }
    case 'received':
      return minutes > 8
        ? { title: 'الطلب مستني تأكيد', sub: 'الكاشير لسه ما أكّدش — لو مستعجل كلّمنا.' }
        : { title: 'المطعم استلم طلبك', sub: 'الكاشير بيراجعه دلوقتي.' }
    case 'preparing':
      return { title: 'بيتقلي دلوقتي 🔥', sub: `${o.firstName}، طلبك في الزيت على ١٨٠°. ${eta}` }
    case 'ready':
      return o.type === 'delivery'
        ? { title: 'جاهز ومستني الطيار', sub: 'متغلّف وسخن، وطالع حالاً.' }
        : { title: 'جاهز — تعالى استلمه', sub: 'قول رقم الطلب للكاشير.' }
    case 'on_the_way':
      return { title: 'الطيار في الطريق 🛵', sub: `رايح ${o.areaName ? `لـ ${o.areaName}` : 'ليك'} دلوقتي.` }
    case 'delivered':
      return { title: 'وصل. بالهنا والشفا', sub: 'شكراً إنك اخترت كريسبو.' }
    case 'collected':
      return { title: 'استلمته. بالهنا والشفا', sub: 'شكراً إنك اخترت كريسبو.' }
    case 'rejected':
      return { title: 'اعتذرنا عن الطلب', sub: o.reason ? `السبب: ${o.reason}` : 'كلّمنا ونشوف نقدر نعمل إيه.' }
    case 'cancelled':
      return { title: 'الطلب اتلغى', sub: o.reason ?? 'لو ده مش متوقع كلّمنا.' }
    case 'expired':
      return { title: 'المطعم ما ردّش', sub: 'الطلب ما وصلش للكاشير في الوقت — كلّمنا على التليفون.' }
  }
}

function render(o: PublicOrder): void {
  const el = root()
  const bad = o.status === 'rejected' || o.status === 'cancelled' || o.status === 'expired'
  el.classList.toggle('is-bad', bad)
  el.querySelector('.track__code')!.textContent = o.code
  const h = headline(o)
  const title = el.querySelector<HTMLElement>('.track__title')!
  if (title.textContent !== h.title) {
    title.textContent = h.title
    if (lastStatus && lastStatus !== o.status) {
      gsap.fromTo(title, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' })
      crunch(0.5)
      state.stage?.kick(0.6)
    }
  }
  el.querySelector('.track__sub')!.textContent = h.sub

  const steps = STEPS[o.type]
  const reached = new Set(o.timeline.map(t => t.status))
  const nowIndex = steps.findIndex(s => s.status === o.status)
  el.querySelector('.track__steps')!.innerHTML = steps.map((s, i) => {
    const done = nowIndex >= 0 ? i < nowIndex : reached.has(s.status)
    const now = i === nowIndex && !FINAL.has(o.status)
    const finished = i === nowIndex && FINAL.has(o.status)
    return `<li class="${done || finished ? 'is-done' : ''} ${now ? 'is-now' : ''}">${escapeHtml(s.label)}</li>`
  }).join('')

  el.querySelector('.track__lines')!.innerHTML = o.lines.map(l => `
    <li><span>${l.qty} × ${escapeHtml(l.name)}${l.label ? `<small>${escapeHtml(l.label)}</small>` : ''}</span><b>${money(l.total)}</b></li>`).join('')
  el.querySelector<HTMLElement>('.track__fee-row')!.hidden = o.type !== 'delivery'
  el.querySelector('.track__fee')!.textContent = money(o.quote.deliveryFee)
  const total = o.final?.total ?? o.quote.total
  el.querySelector('.track__total')!.textContent = money(total)
  el.querySelector('.track__invoice')!.textContent = o.final?.invoiceNumber
    ? `فاتورة رقم ${o.final.invoiceNumber} · ${o.payment === 'card' ? 'فيزا' : 'كاش'} عند الاستلام`
    : `السعر النهائي بيأكده الكاشير · ${o.payment === 'card' ? 'فيزا' : 'كاش'} عند الاستلام`

  const phone = state.shop.snapshot?.business.phone?.replace(/[^\d+]/g, '')
  const call = el.querySelector<HTMLAnchorElement>('.track__call')!
  call.hidden = !phone
  if (phone) call.href = `tel:${phone}`

  lastStatus = o.status
  if (FINAL.has(o.status)) store.remove(ACTIVE)
  updatePill(o)
}

function updatePill(o: PublicOrder | null): void {
  const p = pill()
  const show = !!o && !FINAL.has(o.status) && root().hidden
  p.hidden = !show
  if (o) p.querySelector('b')!.textContent = o.code
}

async function poll(): Promise<void> {
  if (!currentId) return
  clearTimeout(timer)
  try {
    const o = await fetchOrder(currentId)
    render(o)
    // 'expired' can still turn round — the till may have had it all along — so keep
    // an eye on it for a while; every other final state is final.
    if (FINAL.has(o.status) && (o.status !== 'expired' || Date.now() - Date.parse(o.createdAt) > 45 * 60_000)) return
  } catch (err) {
    if ((err as ApiError).status === 404) {
      store.remove(ACTIVE)
      updatePill(null)
      if (!root().hidden) {
        root().querySelector('.track__title')!.textContent = 'الطلب ده مش موجود'
        root().querySelector('.track__sub')!.textContent = 'ممكن يكون قديم — الطلبات بتتمسح بعد أسبوعين.'
      }
      return
    }
  }
  // Fast while somebody is watching, slow while the page sits in the background.
  timer = window.setTimeout(poll, root().hidden || document.hidden ? 15_000 : 4_000)
}

export function openTrack(id: string, initial?: PublicOrder): void {
  currentId = id
  lastStatus = null
  store.set(ACTIVE, id)
  const el = root()
  el.hidden = false
  pill().hidden = true
  document.documentElement.classList.add('is-locked')
  if (location.pathname !== `/track/${id}`) history.pushState({ track: id }, '', `/track/${id}`)
  if (initial) render(initial)
  else {
    el.querySelector('.track__title')!.textContent = 'بنجيب حالة طلبك…'
    el.querySelector('.track__sub')!.textContent = ''
  }
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  gsap.fromTo(el.querySelector('.track__panel'), { y: 50 }, { y: 0, duration: 1, ease: 'expo.out' })
  void poll()
}

function closeTrack(): void {
  const el = root()
  gsap.to(el, {
    opacity: 0, duration: 0.35, onComplete: () => {
      el.hidden = true
      document.documentElement.classList.remove('is-locked')
      if (location.pathname.startsWith('/track/')) history.pushState({}, '', '/')
      void poll()
    },
  })
}

export function initTrack(): void {
  const el = root()
  el.querySelector('.track__close')!.addEventListener('click', closeTrack)
  el.querySelector('.track__again')!.addEventListener('click', () => {
    closeTrack()
    setTimeout(() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }), 400)
  })
  pill().addEventListener('click', () => currentId && openTrack(currentId))
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !el.hidden) closeTrack() })
  addEventListener('popstate', () => {
    const m = /^\/track\/([A-Za-z0-9_-]+)/.exec(location.pathname)
    if (m) openTrack(m[1])
    else if (!el.hidden) closeTrack()
  })
  document.addEventListener('visibilitychange', () => { if (!document.hidden && currentId) void poll() })

  // Arriving from a tracking link, or coming back with an order still on the go.
  const m = /^\/track\/([A-Za-z0-9_-]+)/.exec(location.pathname)
  if (m) openTrack(m[1])
  else {
    const saved = store.get<string | null>(ACTIVE, null)
    if (saved) {
      currentId = saved
      void poll()
    }
  }
}
