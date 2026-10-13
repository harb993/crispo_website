import gsap from 'gsap'
import { state, on, emit } from '../state'
import { modelForCategory } from '../gl/models'
import { escapeHtml, num, currencyLabel } from '../lib/format'
import { crunch, tick } from '../lib/sound'
import { toast } from './toast'
import { openSheet } from './sheet'
import type { Item, Snapshot } from '../lib/types'

const tabsEl = () => document.querySelector<HTMLElement>('.menu__tabs')!
const listEl = () => document.querySelector<HTMLElement>('.menu__list')!
const anchorEl = () => document.querySelector<HTMLElement>('.menu__anchor')!

let active: number | null = null

interface Section { id: number; name: string; items: Item[] }

/**
 * The till's categories, in the till's order, empty ones left out. A dish whose
 * category was deleted at the till still shows, under «أخرى», rather than vanishing.
 */
function sections(snap: Snapshot): Section[] {
  const cats = [...snap.categories].sort((a, b) => a.order - b.order)
  const out: Section[] = cats.map(c => ({ id: c.id, name: c.name, items: snap.items.filter(i => i.categoryId === c.id) }))
  const known = new Set(cats.map(c => c.id))
  const orphans = snap.items.filter(i => !known.has(i.categoryId))
  if (orphans.length) out.push({ id: -1, name: 'أخرى', items: orphans })
  return out.filter(s => s.items.length > 0)
}

/** "من 95" when a choice can change the price, plain "95" when it cannot. */
function priceOf(item: Item): { prefix: string; value: number } {
  const min = item.variants.reduce((sum, g) => sum + Math.min(...g.options.map(o => o.delta)), 0)
  const varies = item.variants.some(g => new Set(g.options.map(o => o.delta)).size > 1)
  return { prefix: varies ? 'من ' : '', value: Math.max(0, item.price + min) }
}

function dishHtml(item: Item, i: number): string {
  const p = priceOf(item)
  const opts = item.variants.map(g => g.options.map(o => o.name).join(' / ')).join(' · ')
  return `
    <li class="dish" data-id="${item.id}" data-cursor-label="أضف" tabindex="0" role="button"
        aria-label="${escapeHtml(item.name)} — ${num(p.value)} ${escapeHtml(currencyLabel())}">
      <span class="dish__idx">${String(i + 1).padStart(2, '0')}</span>
      <div class="dish__body">
        <h3 class="dish__name">${escapeHtml(item.name)}</h3>
        ${item.description ? `<p class="dish__desc">${escapeHtml(item.description)}</p>` : ''}
        ${opts ? `<p class="dish__opts">${escapeHtml(opts)}</p>` : ''}
      </div>
      <div class="dish__price"><small>${escapeHtml(p.prefix)}</small><b>${num(p.value)}</b><small>${escapeHtml(currencyLabel())}</small></div>
      <span class="dish__add" aria-hidden="true">+</span>
    </li>`
}

function show(sectionsList: Section[], id: number, animate: boolean): void {
  const section = sectionsList.find(s => s.id === id) ?? sectionsList[0]
  if (!section) return
  active = section.id
  tabsEl().querySelectorAll<HTMLElement>('.tab').forEach(t => t.setAttribute('aria-selected', String(Number(t.dataset.id) === section.id)))

  const list = listEl()
  list.innerHTML = section.items.map(dishHtml).join('')
  if (animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.fromTo(list.children, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.05 })
  }

  document.querySelector('.menu__cat-name')!.textContent = section.name
  document.querySelector('.menu__cat-n')!.textContent = `${String(section.items.length).padStart(2, '0')} ITEMS`
  state.stage?.setAnchorModel(anchorEl(), modelForCategory(section.name))
}

export function addToCart(item: Item, optionIds: number[], qty: number, row?: HTMLElement | null): void {
  state.cart.add(item.id, optionIds, qty)
  crunch(1)
  state.stage?.kick(1)
  emit('added', item)
  toast(`اتضاف للسلة — ${item.name}`)
  if (row) {
    row.classList.add('is-added')
    setTimeout(() => row.classList.remove('is-added'), 700)
  }
}

function pick(item: Item, row: HTMLElement): void {
  if (item.variants.length) openSheet(item)
  else addToCart(item, [], 1, row)
}

export function initMenu(): void {
  let current: Section[] = []

  const render = () => {
    const snap = state.shop.snapshot
    if (!snap) {
      tabsEl().innerHTML = ''
      listEl().innerHTML = '<li class="dish"><div class="dish__body"><h3 class="dish__name">المنيو بيتحمّل…</h3></div></li>'
      return
    }
    current = sections(snap)
    tabsEl().innerHTML = current.map(s => `
      <button class="tab" type="button" role="tab" data-id="${s.id}" aria-selected="false">
        ${escapeHtml(s.name)}<small>${s.items.length}</small>
      </button>`).join('')
    const keep = current.some(s => s.id === active) ? active! : current[0]?.id
    show(current, keep, false)
    document.querySelector('.menu__count')!.textContent = `${snap.items.length} صنف — كل اللي في المطبخ، بأسعار الكاشير.`
  }

  on('shop', render)
  render()

  tabsEl().addEventListener('click', e => {
    const tab = (e.target as HTMLElement).closest<HTMLElement>('.tab')
    if (!tab || Number(tab.dataset.id) === active) return
    tick()
    show(current, Number(tab.dataset.id), true)
  })

  const itemFrom = (row: HTMLElement) => state.shop.snapshot?.items.find(i => i.id === Number(row.dataset.id))
  listEl().addEventListener('click', e => {
    const row = (e.target as HTMLElement).closest<HTMLElement>('.dish[data-id]')
    const item = row && itemFrom(row)
    if (row && item) pick(item, row)
  })
  listEl().addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return
    const row = (e.target as HTMLElement).closest<HTMLElement>('.dish[data-id]')
    const item = row && itemFrom(row)
    if (row && item) { e.preventDefault(); pick(item, row) }
  })
}
