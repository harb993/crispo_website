import './styles.css'
import gsap from 'gsap'
import { Stage } from './gl/stage'
import { state, setShop, on } from './state'
import { fetchShop } from './lib/api'
import { soundEnabled, setSound } from './lib/sound'
import { initScroll, initMotion, intro, remeasure, reduced } from './ui/motion'
import { initCursor, initMagnetic } from './ui/cursor'
import { initMenu } from './ui/menu'
import { initSheet } from './ui/sheet'
import { initDrawer } from './ui/drawer'
import { initTrack } from './ui/track'
import { initStatus } from './ui/status'
import type { Shop, Snapshot } from './lib/types'
// The same starter menu the demo till publishes — shown when the relay is unreachable.
import { DEMO_SNAPSHOT } from '../../relay/demo-menu.mjs'

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

function webglAvailable(): boolean {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

function preview(reason: Shop['reason']): Shop {
  return { open: false, reason, snapshot: DEMO_SNAPSHOT as unknown as Snapshot, updatedAt: null, preview: true }
}

/** The menu and whether the kitchen is open. Falls back to a preview if the relay is away. */
async function loadShop(): Promise<void> {
  try {
    const shop = await fetchShop()
    setShop(shop.snapshot ? shop : preview(shop.reason))
  } catch {
    // Keep a live menu we already had — only the status changes.
    setShop(state.shop.snapshot && !state.shop.preview
      ? { ...state.shop, open: false, reason: 'offline' }
      : preview('preview'))
  }
}

/** The oil coming up to 180°, while the fonts arrive and the shaders compile. */
function loader() {
  const root = document.querySelector<HTMLElement>('.loader')!
  const num = root.querySelector<HTMLElement>('.loader__num')!
  const bar = root.querySelector<HTMLElement>('.loader__bar i')!
  const shown = { p: 0 }
  let target = 0
  const tween = () => gsap.to(shown, {
    p: target, duration: 0.8, ease: 'power2.out', overwrite: true,
    onUpdate: () => {
      num.textContent = String(Math.round(shown.p * 180))
      bar.style.transform = `scaleX(${shown.p})`
    },
  })
  return {
    progress(p: number) { target = Math.max(target, Math.min(1, p)); tween() },
    async finish() {
      target = 1
      await tween().then()
      const curtain = root.querySelector('.loader__curtain')!
      const tl = gsap.timeline()
      tl.to(curtain, { y: '0%', duration: 0.7, ease: 'expo.inOut' })
        .set(root.querySelector('.loader__inner'), { opacity: 0 })
        .set(root, { backgroundColor: 'transparent' })
        .to(curtain, { y: '-100%', duration: 0.9, ease: 'expo.inOut' })
        .add(() => {
          document.body.classList.remove('is-loading')
          document.body.classList.add('is-loaded')
        }, '-=0.6')
        .set(root, { display: 'none' })
      await sleep(900)
    },
  }
}

async function boot(): Promise<void> {
  document.body.dataset.theme = 'ink'
  const canvas = document.querySelector<HTMLCanvasElement>('canvas.gl')!
  const stage = webglAvailable() ? new Stage(canvas) : null
  state.stage = stage?.ok ? stage : null
  if (!state.stage) document.documentElement.classList.add('no-webgl')

  const load = loader()
  initStatus()
  initMenu()
  initSheet()
  initDrawer()
  initCursor()
  initMagnetic()
  initScroll()

  const sound = document.querySelector<HTMLButtonElement>('.nav__sound')!
  sound.setAttribute('aria-pressed', String(soundEnabled()))
  sound.addEventListener('click', () => {
    setSound(!soundEnabled())
    sound.setAttribute('aria-pressed', String(soundEnabled()))
  })

  state.stage?.registerAnchors()
  gsap.ticker.add(() => state.stage?.render())

  let done = 0
  const step = () => load.progress(++done / 6)
  await Promise.all([
    loadShop().then(step),
    Promise.race([document.fonts?.ready, sleep(2500)]).then(step),
    state.stage
      ? state.stage.warmUp(p => load.progress((done + p * 4) / 6)).then(() => { done += 4; load.progress(done / 6) })
      : Promise.resolve().then(() => { done += 4 }),
    sleep(reduced ? 0 : 1200),
  ])

  initMotion()
  on('shop', remeasure)
  remeasure()
  await load.finish()
  intro()
  initTrack()

  // The kitchen's state changes through the day; keep the pill and the menu honest.
  setInterval(() => { if (!document.hidden) void loadShop() }, 30_000)
}

void boot()
