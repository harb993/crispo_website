import gsap from 'gsap'

/**
 * A dot that is exactly where the pointer is, and a ring that catches up. Over
 * anything clickable the ring swells; over a dish it becomes a gold "أضف" disc.
 * Touch screens never see it.
 */
export function initCursor(): void {
  if (matchMedia('(hover: none), (pointer: coarse)').matches) return
  const root = document.querySelector<HTMLElement>('.cursor')!
  const dot = root.querySelector<HTMLElement>('.cursor__dot')!
  const ring = root.querySelector<HTMLElement>('.cursor__ring')!
  const label = root.querySelector<HTMLElement>('.cursor__label')!
  const pos = { x: innerWidth / 2, y: innerHeight / 2 }
  const ringPos = { ...pos }
  let shown = false

  addEventListener('pointermove', e => {
    pos.x = e.clientX
    pos.y = e.clientY
    if (!shown) { shown = true; ringPos.x = pos.x; ringPos.y = pos.y; root.classList.add('is-active') }
    const target = e.target as HTMLElement
    const labelled = target.closest<HTMLElement>('[data-cursor-label]')
    const hover = target.closest('a, button, [data-cursor="hover"], label, select')
    root.classList.toggle('is-label', !!labelled)
    root.classList.toggle('is-hover', !labelled && !!hover)
    if (labelled) label.textContent = labelled.dataset.cursorLabel || ''
  }, { passive: true })
  document.addEventListener('pointerleave', () => { shown = false; gsap.to([dot, ring], { opacity: 0, duration: 0.3 }) })
  document.addEventListener('pointerenter', () => gsap.to([dot, ring], { opacity: 1, duration: 0.3 }))

  gsap.ticker.add(() => {
    ringPos.x += (pos.x - ringPos.x) * 0.18
    ringPos.y += (pos.y - ringPos.y) * 0.18
    dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
    ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`
  })
}

/** Buttons that lean towards the pointer, and spring back when it leaves. */
export function initMagnetic(root: ParentNode = document): void {
  if (matchMedia('(hover: none), (pointer: coarse)').matches) return
  root.querySelectorAll<HTMLElement>('[data-magnetic]').forEach(el => {
    if (el.dataset.magneticBound) return
    el.dataset.magneticBound = '1'
    const inner = el.querySelector<HTMLElement>('span')
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      gsap.to(el, { x: dx * 0.22, y: dy * 0.32, duration: 0.6, ease: 'power3.out' })
      if (inner) gsap.to(inner, { x: dx * 0.1, y: dy * 0.12, duration: 0.6, ease: 'power3.out' })
    })
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.4)' })
      if (inner) gsap.to(inner, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.4)' })
    })
  })
}
