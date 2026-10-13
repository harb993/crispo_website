import { on, state } from '../state'
import { escapeHtml, num, currencyLabel, setCurrency } from '../lib/format'
import type { Shop } from '../lib/types'

export function closedMessage(shop: Shop): string {
  switch (shop.reason) {
    case 'preview': return 'ده عرض للمنيو — الطلب أونلاين مش متوصل بالمطعم دلوقتي'
    case 'paused': return 'المطبخ موقّف الطلبات أونلاين شوية — جرّب كمان شوية'
    case 'closed': return 'المطبخ مقفول دلوقتي — نشوفك في الوردية الجاية'
    case 'not_configured': return 'الطلب أونلاين قريب جداً'
    case 'offline':
    default: return 'المطعم مش متصل دلوقتي — الطلب أونلاين متوقف مؤقتاً'
  }
}

function shortStatus(shop: Shop): string {
  if (shop.demo) return 'تجريبي · مطبخ وهمي'
  if (shop.open) return `المطبخ شغّال · ~${shop.snapshot?.eta.delivery ?? 40} د`
  switch (shop.reason) {
    case 'preview': return 'معاينة'
    case 'paused': return 'الطلبات متوقفة مؤقتاً'
    case 'closed': return 'المطبخ مقفول'
    case 'not_configured': return 'قريباً'
    default: return 'غير متصل'
  }
}

/** The bits of the page that come straight from the till: status, areas, phone. */
export function initStatus(): void {
  const render = (shop: Shop) => {
    const snap = shop.snapshot
    setCurrency(snap?.business.currency)

    const pill = document.querySelector<HTMLElement>('.status')!
    pill.dataset.status = shop.open ? 'open' : 'closed'
    pill.querySelector('.status__text')!.textContent = shortStatus(shop)
    pill.title = shop.demo
      ? 'دي نسخة للتجربة: الطلبات بتتسجل في المتصفح ده بس ومش بتوصل للمطعم'
      : shop.open ? 'طلبك بيوصل لشاشة الكاشير على طول' : closedMessage(shop)
    const note = document.querySelector<HTMLElement>('.drawer__note')
    if (note && shop.demo) note.textContent = 'نسخة تجريبية: الطلب ده مش هيوصل للمطعم — المطبخ هنا وهمي وبيمشّي الطلب لوحده.'
    const codeLabel = document.querySelector<HTMLElement>('.track__code-label')
    if (codeLabel && shop.demo) codeLabel.textContent = 'طلب تجريبي رقم'

    document.querySelector<HTMLElement>('.preview-note')!.hidden = !shop.preview

    const zones = document.querySelector<HTMLElement>('.zones__list')!
    zones.innerHTML = (snap?.areas ?? []).map(a => `
      <li><span>${escapeHtml(a.name)}</span><b>${num(a.fee)}<small>${escapeHtml(currencyLabel())}</small></b></li>`).join('')
    if (snap?.takeaway !== false) {
      zones.insertAdjacentHTML('beforeend', `<li><span>استلام من الفرع</span><b>${num(0)}<small>${escapeHtml(currencyLabel())}</small></b></li>`)
    }
    document.querySelector('.zones__eta')!.innerHTML = `${snap?.eta.delivery ?? 40}<small>دقيقة</small>`

    const phone = snap?.business.phone?.trim()
    const phoneEl = document.querySelector<HTMLAnchorElement>('.footer__phone')!
    phoneEl.textContent = phone || '—'
    phoneEl.href = phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : '#'
    if (snap?.business.address) document.querySelector('.footer__address')!.textContent = snap.business.address
  }
  on('shop', render)
  render(state.shop)
  document.querySelector('.footer__year')!.textContent = String(new Date().getFullYear())
}
