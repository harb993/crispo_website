import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { state } from '../state'

export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
let lenis: Lenis | null = null

gsap.registerPlugin(ScrollTrigger)

/** Smooth scrolling, and the page lock the overlays use. */
export function initScroll(): void {
  if (!reduced) {
    lenis = new Lenis({ lerp: 0.085, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(t => lenis!.raf(t * 1000))
    gsap.ticker.lagSmoothing(0)
  }

  document.addEventListener('click', e => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
    const href = a?.getAttribute('href')
    if (!a || !href || href === '#') return
    const target = href === '#top' ? 0 : document.querySelector<HTMLElement>(href)
    if (target === null) return
    e.preventDefault()
    if (lenis) lenis.scrollTo(target, { offset: href === '#top' ? 0 : -40, duration: 1.6 })
    else if (target === 0) scrollTo({ top: 0, behavior: 'smooth' })
    else target.scrollIntoView({ behavior: 'smooth' })
  })

  // Overlays put `is-locked` on <html>; the page behind them must not scroll.
  let locked = false
  new MutationObserver(() => {
    const now = document.documentElement.classList.contains('is-locked')
    if (now === locked) return
    locked = now
    if (now) lenis?.stop()
    else lenis?.start()
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  const nav = document.querySelector<HTMLElement>('.nav')!
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 40)
  addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

/** Wrap each `.line` in a mask so it can rise into view. */
function splitLines(el: Element): void {
  el.querySelectorAll('.line').forEach(line => {
    const inner = document.createElement('span')
    inner.className = 'split-inner'
    while (line.firstChild) inner.appendChild(line.firstChild)
    line.classList.add('split-mask')
    line.appendChild(inner)
  })
}

/**
 * Wrap each word in a span — and only words. Arabic letters join to their
 * neighbours, so splitting into characters, the usual trick, would break every word
 * into its isolated letterforms. A chip counts as one word.
 */
function splitWords(el: HTMLElement): HTMLElement[] {
  const out: HTMLElement[] = []
  const nodes = [...el.childNodes]
  el.textContent = ''
  for (const node of nodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      for (const part of (node.textContent ?? '').split(/(\s+)/)) {
        if (!part) continue
        if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); continue }
        const w = document.createElement('span')
        w.className = 'w'
        w.textContent = part
        el.appendChild(w)
        out.push(w)
      }
    } else if (node instanceof HTMLElement) {
      node.classList.add('w')
      el.appendChild(node)
      out.push(node)
    }
  }
  return out
}

/** Which colour the page is: whichever section is across the middle of the screen. */
function themes(): void {
  document.querySelectorAll<HTMLElement>('main [data-theme], footer[data-theme]').forEach(sec => {
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: self => { if (self.isActive) document.body.dataset.theme = sec.dataset.theme },
    })
  })
}

/**
 * The ritual: one scroll through it takes the drumstick from cooked, back to raw, and
 * through marinade, dredge and fryer again. The thermometer follows — 4° in the
 * fridge, 22° on the bench, then up to 180°.
 */
function ritual(): void {
  const section = document.querySelector<HTMLElement>('.ritual')!
  const steps = [...section.querySelectorAll<HTMLElement>('.ritual__step')]
  const deg = section.querySelector<HTMLElement>('.ritual__deg')!
  const bar = section.querySelector<HTMLElement>('.ritual__progress')!
  const pin = section.querySelector<HTMLElement>('.ritual__pin')!
  const seg = (p: number, a: number, b: number) => Math.min(1, Math.max(0, (p - a) / (b - a)))
  const ease = (x: number) => x * x * (3 - 2 * x)
  let lastStep = -1

  const update = (p: number) => {
    const rewind = 1 - ease(seg(p, 0.02, 0.14))
    const marinade = Math.max(rewind, ease(seg(p, 0.16, 0.38)))
    const coat = Math.max(rewind, ease(seg(p, 0.42, 0.64)))
    const fry = Math.max(rewind, ease(seg(p, 0.7, 0.94)))
    state.stage?.setCook({ marinade, coat, fry })
    if (p > 0.02 && p < 0.14) state.stage?.kick(0.04)

    const step = p < 0.4 ? 0 : p < 0.68 ? 1 : 2
    if (step !== lastStep) {
      steps.forEach((s, i) => {
        s.classList.toggle('is-active', i === step)
        s.classList.toggle('is-past', i < step)
      })
      lastStep = step
    }
    const t = p < 0.14 ? Math.round(180 * rewind) : p < 0.4 ? 4 : p < 0.68 ? 22 : Math.round(22 + 158 * seg(p, 0.7, 0.94))
    deg.textContent = String(t)
    pin.style.setProperty('--heat', (fry * (p >= 0.68 || p < 0.14 ? 1 : 0)).toFixed(3))
    bar.style.setProperty('--p', p.toFixed(3))
  }

  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: self => update(self.progress),
    onLeave: () => update(1),
    onLeaveBack: () => update(0),
  })
  update(0)
}

export function initMotion(): void {
  themes()
  ritual()

  splitLines(document.querySelector('.hero__title')!)

  const words = splitWords(document.querySelector<HTMLElement>('.manifesto__text')!)
  if (!reduced) {
    gsap.to(words, {
      opacity: 1,
      ease: 'none',
      stagger: 0.08,
      scrollTrigger: { trigger: '.manifesto__text', start: 'top 78%', end: 'bottom 42%', scrub: true },
    })

    gsap.to('.hero__word span', {
      yPercent: 22, scale: 0.94, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    })
    gsap.to('.hero__content', {
      y: -90, opacity: 0, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: '30% top', end: 'bottom top', scrub: true },
    })
    gsap.fromTo('.band--red', { yPercent: -50, rotate: -7 }, {
      yPercent: -50, rotate: -2.5, ease: 'none',
      scrollTrigger: { trigger: '.bands', start: 'top bottom', end: 'bottom top', scrub: true },
    })
    gsap.fromTo('.band--gold', { yPercent: -50, rotate: 6 }, {
      yPercent: -50, rotate: 2, ease: 'none',
      scrollTrigger: { trigger: '.bands', start: 'top bottom', end: 'bottom top', scrub: true },
    })
    gsap.from('.menu__title', {
      yPercent: 40, opacity: 0, duration: 1.4, ease: 'expo.out',
      scrollTrigger: { trigger: '.menu__head', start: 'top 80%' },
    })
    gsap.from('.zones__title', {
      yPercent: 30, opacity: 0, duration: 1.4, ease: 'expo.out',
      scrollTrigger: { trigger: '.zones', start: 'top 70%' },
    })
    gsap.from('.footer__word', {
      yPercent: 45, ease: 'none',
      scrollTrigger: { trigger: '.footer__word', start: 'top bottom', end: 'bottom bottom', scrub: true },
    })
    gsap.from('.footer__q', {
      yPercent: 40, opacity: 0, duration: 1.4, ease: 'expo.out',
      scrollTrigger: { trigger: '.footer', start: 'top 70%' },
    })
  }

  document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
    const to = Number(el.dataset.count)
    const suffix = el.dataset.suffix ?? ''
    const box = { v: 0 }
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => gsap.to(box, {
        v: to, duration: reduced ? 0 : 2.2, ease: 'power3.out',
        onUpdate: () => { el.textContent = `${Math.round(box.v)}${suffix}` },
      }),
    })
  })
}

/** The first thing anybody sees once the oil is hot. */
export function intro(): gsap.core.Timeline {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
  if (reduced) return tl
  tl.from('.hero__word span', { yPercent: 40, opacity: 0, duration: 2 }, 0)
    .from('.hero__title .split-inner', { yPercent: 110, duration: 1.5, stagger: 0.12 }, 0.2)
    .from('.hero__eyebrow, .hero__aside > *, .hero__lede, .hero__ctas > *', { y: 30, opacity: 0, duration: 1.3, stagger: 0.07 }, 0.5)
    .from('.hero__meta > *', { y: 20, opacity: 0, duration: 1.1, stagger: 0.06 }, 0.8)
    .from('.nav > *', { y: -24, opacity: 0, duration: 1.1, stagger: 0.06 }, 0.35)
  return tl
}

let refreshTimer = 0
/** Layout changed (the menu arrived, fonts swapped in): re-measure the scroll triggers. */
export function remeasure(): void {
  clearTimeout(refreshTimer)
  refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 120)
}
