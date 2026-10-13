import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { BUILDERS, type Model, type ModelName, type Quality } from './models'
import { crustMaterial, type CrustUniforms } from './materials'
import { fetchManifest, loadReal, type Manifest, type Slot } from './real'

/**
 * What an anchor can ask for: one of the cast, or 'ritual' — the drumstick in the
 * ritual section, which is the procedural one being cooked unless all three real
 * stages have been captured.
 */
export type StageSlot = ModelName | 'ritual'

/**
 * One canvas, fixed behind the page, with one object on it at a time.
 *
 * WHERE THE OBJECT GOES
 *
 * Not choreographed in world units. Each section of the page marks a box with
 * `data-gl-anchor`, and every frame the stage finds the anchor most in view and eases
 * the object towards that box's position and size on screen. So the layout — CSS,
 * breakpoints, a phone held sideways — decides where the chicken sits, and the
 * WebGL simply follows it. Moving a section never means re-tuning a camera.
 *
 * The object glides between anchors as the page scrolls past them, which is the
 * whole transition system: there is no timeline to keep in step with the layout.
 */

export interface Cook {
  coat: number
  fry: number
  marinade: number
}

interface Anchor {
  el: HTMLElement
  model: StageSlot | null
  scale: number
  spinBoost: number
}

const DAMP = 4.2

export class Stage {
  readonly ok: boolean
  private renderer!: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  private root = new THREE.Group()     // follows the anchor
  private tiltGroup = new THREE.Group() // the model's resting tilt + the pointer
  private spinGroup = new THREE.Group() // spins about the model's own axis
  private crumbs: THREE.InstancedMesh | null = null
  private crumbData: { r: number; a: number; y: number; s: number; speed: number; wob: number; rot: THREE.Euler }[] = []
  private crumbUniforms: CrustUniforms | null = null

  private quality: Quality
  private cache = new Map<ModelName, Model>()
  /** Captures that have finished loading, by slot. They win over the procedural cast. */
  private real = new Map<Slot, Model>()
  private manifest: Manifest | null = null
  private current: Model | null = null
  private pendingSlot: StageSlot = 'drumstick'
  /** 0..1 — shrinks to swap one object for the next. */
  private swap = 1
  private swapping = false

  private anchors: Anchor[] = []
  private target = { x: 0, y: 0, s: 0 }
  private pos = { x: 0, y: 0, s: 0 }
  private pointer = { x: 0, y: 0, tx: 0, ty: 0 }
  private spin = 0
  private spinBoost = 0
  private burst = 0
  private cook: Cook = { coat: 1, fry: 1, marinade: 1 }
  private width = 1
  private height = 1
  private visible = true
  private clock = new THREE.Clock()
  /** Adaptive resolution: frames are timed, and a GPU that cannot keep up gets fewer pixels. */
  private dpr = 1
  private frameTimes: number[] = []

  constructor(private canvas: HTMLCanvasElement) {
    const coarse = matchMedia('(pointer: coarse)').matches
    const cores = navigator.hardwareConcurrency || 4
    this.quality = { low: coarse || cores <= 4 }

    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas, antialias: true, alpha: true, powerPreference: 'high-performance',
      })
    } catch {
      this.ok = false
      return
    }
    this.ok = true

    const r = this.renderer
    this.dpr = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.5 : 1.75)
    r.setPixelRatio(this.dpr)
    r.outputColorSpace = THREE.SRGBColorSpace
    r.toneMapping = THREE.ACESFilmicToneMapping
    r.toneMappingExposure = 0.98
    r.setClearColor(0x000000, 0)

    // A synthetic room straight away, then a real photographed studio once it has
    // downloaded — reflections from a real place are much of what reads as "real".
    const pmrem = new THREE.PMREMGenerator(r)
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    this.scene.environmentIntensity = 0.55
    void import('three/addons/loaders/EXRLoader.js')
      .then(({ EXRLoader }) => new EXRLoader().loadAsync('/env/studio.exr'))
      .then(tex => {
        tex.mapping = THREE.EquirectangularReflectionMapping
        const env = pmrem.fromEquirectangular(tex).texture
        tex.dispose()
        this.scene.environment = env
        this.scene.environmentIntensity = 0.85
        this.scene.environmentRotation.set(0, Math.PI * 0.35, 0)
      })
      .catch(() => { /* the room stays — still lit, just less convincingly */ })
      .finally(() => pmrem.dispose())

    // Warm key from the top right, Crispo-red rim from behind, a gold fill from below:
    // the heat lamp, the brand, and the bounce off a fryer basket.
    const key = new THREE.DirectionalLight('#ffe0bd', 2.7)
    key.position.set(3.5, 4.5, 5)
    const rim = new THREE.DirectionalLight('#ff2638', 5.5)
    rim.position.set(-4.5, 1.5, -3.5)
    const rim2 = new THREE.DirectionalLight('#ff8a3d', 2.2)
    rim2.position.set(4, -1, -4)
    const fill = new THREE.DirectionalLight('#ffb347', 0.9)
    fill.position.set(-2, -3, 4)
    this.scene.add(key, rim, rim2, fill, new THREE.HemisphereLight('#fff1dc', '#2a0d08', 0.35))

    this.camera.position.set(0, 0, 9)
    this.scene.add(this.root)
    this.root.add(this.tiltGroup)
    this.tiltGroup.add(this.spinGroup)

    this.buildCrumbs()
    this.setModelNow(this.resolve('drumstick'))

    window.addEventListener('pointermove', e => {
      this.pointer.tx = (e.clientX / window.innerWidth) * 2 - 1
      this.pointer.ty = (e.clientY / window.innerHeight) * 2 - 1
    }, { passive: true })
    document.addEventListener('visibilitychange', () => { this.visible = !document.hidden })
    this.resize()
    window.addEventListener('resize', () => this.resize())
  }

  /** Compile every object's shaders up front so the first swap does not hitch. */
  async warmUp(onProgress?: (p: number) => void): Promise<void> {
    if (!this.ok) return
    const names: ModelName[] = ['drumstick', 'burger', 'fries', 'can']
    for (let i = 0; i < names.length; i++) {
      const m = this.getModel(names[i])
      const holder = new THREE.Group()
      holder.add(m.group)
      holder.position.set(0, 0, -50) // out of shot
      this.scene.add(holder)
      await (this.renderer.compileAsync?.(this.scene, this.camera) ?? Promise.resolve(this.renderer.compile(this.scene, this.camera)))
      this.scene.remove(holder)
      holder.remove(m.group)
      onProgress?.((i + 1) / names.length)
    }
    // Put the current one back where it lives.
    if (this.current) this.spinGroup.add(this.current.group)
  }

  private getModel(name: ModelName): Model {
    let m = this.cache.get(name)
    if (!m) {
      m = BUILDERS[name](this.quality)
      this.cache.set(name, m)
    }
    return m
  }

  /** The three real ritual stages, when every one of them has been captured. */
  private realRitual(): boolean {
    return this.real.has('drumstick-raw') && this.real.has('drumstick-dredged') && this.real.has('drumstick')
  }

  /**
   * Which object a slot shows right now. A capture beats the procedural model; the
   * ritual uses captures only as a complete set, because a real fried piece next to a
   * drawn raw one would make the drawn one look worse than it is.
   */
  private resolve(slot: StageSlot): Model {
    if (slot === 'ritual') {
      if (!this.realRitual()) return this.getModel('drumstick')
      const c = this.cook
      const stage: Slot = c.fry > 0.5 ? 'drumstick' : c.coat > 0.5 ? 'drumstick-dredged' : 'drumstick-raw'
      return this.real.get(stage)!
    }
    return this.real.get(slot) ?? this.getModel(slot)
  }

  private setModelNow(model: Model): void {
    if (this.current) this.spinGroup.remove(this.current.group)
    this.current = model
    this.spinGroup.add(model.group)
    this.applyCook()
  }

  /** Swap the object on stage: shrink and spin out, grow the next one in. */
  setModel(slot: StageSlot): void {
    this.pendingSlot = slot
    if (!this.ok || this.swapping || this.current?.key === this.resolve(slot).key) return
    this.swapping = true
    this.burst = 1
  }

  /**
   * Load whatever has been captured (see real.ts). Resolves with how many loaded; the
   * page carries on with the procedural cast in the meantime and swaps each capture
   * in as it arrives. `first` is reported as soon as the hero's own capture is ready.
   */
  async loadCaptures(onHeroReady?: () => void): Promise<number> {
    if (!this.ok) return 0
    this.manifest = await fetchManifest()
    if (!this.manifest) { onHeroReady?.(); return 0 }
    const entries = Object.entries(this.manifest) as [Slot, NonNullable<Manifest[Slot]>][]
    // The hero first: it is what is on screen when the page opens.
    entries.sort(([a], [b]) => (a === 'drumstick' ? -1 : b === 'drumstick' ? 1 : 0))
    let loaded = 0
    for (const [slot, spec] of entries) {
      try {
        this.real.set(slot, await loadReal(slot, spec, this.renderer, this.scene))
        loaded++
      } catch (err) {
        console.warn(`[stage] capture for ${slot} did not load (${spec.file}):`, err)
      }
      if (slot === 'drumstick') onHeroReady?.()
    }
    if (!this.manifest.drumstick) onHeroReady?.()
    return loaded
  }

  /** True when the hero drumstick on screen is a capture. */
  get showingReal(): boolean {
    return !!this.current?.real
  }

  /** Drive the drumstick from raw to golden. Other objects arrive cooked. */
  setCook(c: Partial<Cook>): void {
    Object.assign(this.cook, c)
    this.applyCook()
    // With real ritual captures, cooking means changing which capture is shown.
    if (this.pendingSlot === 'ritual' && this.realRitual()) this.setModel('ritual')
  }

  private applyCook(): void {
    const u = this.current?.cook
    if (!u) return
    u.uCoat.value = this.cook.coat
    u.uFry.value = this.cook.fry
    u.uMarinade.value = this.cook.marinade
  }

  /** A little extra spin — for the moment something is added to the cart. */
  kick(amount = 1): void {
    this.spinBoost += 6 * amount
    this.burst = Math.max(this.burst, 0.7 * amount)
  }

  registerAnchors(root: ParentNode = document): void {
    this.anchors = [...root.querySelectorAll<HTMLElement>('[data-gl-anchor]')].map(el => ({
      el,
      model: (el.dataset.glModel as StageSlot) || null,
      scale: Number(el.dataset.glScale) || 1,
      spinBoost: Number(el.dataset.glSpin) || 0,
    }))
  }

  /** Point an anchor at a different object — the menu does this on a category change. */
  setAnchorModel(el: HTMLElement, model: StageSlot): void {
    el.dataset.glModel = model
    const a = this.anchors.find(x => x.el === el)
    if (a) a.model = model
  }

  private buildCrumbs(): void {
    const count = this.quality.low ? 34 : 60
    const geo = new THREE.IcosahedronGeometry(1, 2)
    const mat = crustMaterial({ amp: 0.45, freq: 1.4, detail: 3, bump: 0.6, seed: 5.5, lowQuality: true })
    this.crumbUniforms = mat.userData.crust
    this.crumbs = new THREE.InstancedMesh(geo, mat, count)
    this.crumbs.frustumCulled = false
    let seed = 7
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
    for (let i = 0; i < count; i++) {
      this.crumbData.push({
        r: 1.05 + rand() * 0.75,
        a: rand() * Math.PI * 2,
        y: (rand() - 0.5) * 1.9,
        s: 0.012 + Math.pow(rand(), 3) * 0.045,
        speed: (0.08 + rand() * 0.22) * (rand() > 0.5 ? 1 : -1),
        wob: rand() * 10,
        rot: new THREE.Euler(rand() * 6, rand() * 6, rand() * 6),
      })
    }
    this.tiltGroup.add(this.crumbs)
  }

  private resize(): void {
    if (!this.ok) return
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.renderer.setSize(this.width, this.height, false)
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  /** Height of the visible world at z = 0, in world units. */
  private worldHeight(): number {
    return 2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * this.camera.position.z
  }

  /** Find the anchor most in view and set the object's target from its box. */
  private updateTarget(): void {
    let best: Anchor | null = null
    let bestScore = 0
    let bestRect: DOMRect | null = null
    for (const a of this.anchors) {
      const r = a.el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) continue
      const visH = Math.max(0, Math.min(r.bottom, this.height) - Math.max(r.top, 0))
      const visW = Math.max(0, Math.min(r.right, this.width) - Math.max(r.left, 0))
      // How much of the box is on screen, weighted towards the middle of the screen.
      const cover = (visH * visW) / (r.width * r.height)
      const mid = (r.top + r.bottom) / 2
      const central = 1 - Math.min(1, Math.abs(mid - this.height / 2) / this.height)
      const score = cover * (0.5 + central)
      if (score > bestScore) { best = a; bestScore = score; bestRect = r }
    }

    if (!best || !bestRect || bestScore < 0.12) {
      this.target.s = 0
      return
    }
    const wh = this.worldHeight()
    const unit = wh / this.height // world units per CSS pixel
    const cx = bestRect.left + bestRect.width / 2
    const cy = bestRect.top + bestRect.height / 2
    this.target.x = (cx - this.width / 2) * unit
    this.target.y = -(cy - this.height / 2) * unit
    this.target.s = (Math.min(bestRect.width, bestRect.height) / 2) * unit * best.scale
    this.spinBoost = Math.max(this.spinBoost, best.spinBoost)
    // Compared by what would be SHOWN, so a capture that finishes loading while its
    // section is on screen swaps itself in.
    if (best.model) this.setModel(best.model)
  }

  render(): void {
    if (!this.ok || !this.visible) return
    const raw = this.clock.getDelta()
    const dt = Math.min(raw, 1 / 20)
    const t = this.clock.elapsedTime
    this.adapt(raw)

    this.updateTarget()
    const k = 1 - Math.exp(-DAMP * dt)
    // The first frame jumps straight there rather than flying in from the origin.
    if (this.pos.s === 0 && this.target.s > 0 && t < 1.5) {
      this.pos.x = this.target.x
      this.pos.y = this.target.y
    }
    this.pos.x += (this.target.x - this.pos.x) * k
    this.pos.y += (this.target.y - this.pos.y) * k
    this.pos.s += (this.target.s - this.pos.s) * k

    // Swap: shrink out, change, grow in.
    if (this.swapping) {
      this.swap = Math.max(0, this.swap - dt * 4)
      if (this.swap === 0) {
        this.setModelNow(this.resolve(this.pendingSlot))
        this.swapping = false
        this.spinBoost += 4
      }
    } else if (this.swap < 1) {
      this.swap = Math.min(1, this.swap + dt * 2.6)
    }
    const easeSwap = this.swapping ? this.swap * this.swap : 1 - Math.pow(1 - this.swap, 3)

    const m = this.current
    const bob = Math.sin(t * 1.1) * 0.035
    this.root.position.set(this.pos.x, this.pos.y + bob * this.pos.s, 0)
    this.root.scale.setScalar(Math.max(0.0001, this.pos.s * easeSwap))

    this.pointer.x += (this.pointer.tx - this.pointer.x) * k
    this.pointer.y += (this.pointer.ty - this.pointer.y) * k
    this.tiltGroup.rotation.set(this.pointer.y * 0.25, this.pointer.x * 0.35, (m?.tilt ?? 0) + this.pointer.x * -0.08)

    this.spinBoost *= Math.exp(-2.4 * dt)
    this.spin += ((m?.spin ?? 0.3) + this.spinBoost) * dt
    this.spinGroup.rotation.y = this.spin

    for (const u of m?.timed ?? []) u.uTime.value = t

    this.burst *= Math.exp(-1.6 * dt)
    this.updateCrumbs(t, dt)

    this.renderer.render(this.scene, this.camera)
  }

  /**
   * Every second of rendering, look at how long frames took. Consistently slower than
   * ~45 fps and the canvas drops a step of resolution, down to 1×. The crust is a
   * per-pixel shader, so pixels are exactly what costs — and a slightly softer
   * drumstick is far better than a page that stutters while scrolling.
   */
  private adapt(frame: number): void {
    if (frame > 0.25) return // a tab switch or a hitch, not a measurement
    this.frameTimes.push(frame)
    if (this.frameTimes.length < 60) return
    const sorted = [...this.frameTimes].sort((a, b) => a - b)
    const median = sorted[Math.floor(sorted.length / 2)]
    this.frameTimes = []
    if (median > 1 / 45 && this.dpr > 1) {
      this.dpr = Math.max(1, this.dpr - 0.25)
      this.renderer.setPixelRatio(this.dpr)
      this.resize()
    }
  }

  private crumbMatrix = new THREE.Matrix4()
  private crumbQuat = new THREE.Quaternion()
  private crumbPos = new THREE.Vector3()
  private crumbScale = new THREE.Vector3()

  private updateCrumbs(t: number, dt: number): void {
    if (!this.crumbs) return
    const spread = 1 + this.burst * 0.9
    this.crumbData.forEach((c, i) => {
      c.a += c.speed * dt * (1 + this.burst * 4)
      c.rot.x += dt * 0.6
      c.rot.y += dt * 0.4
      const r = c.r * spread
      this.crumbPos.set(
        Math.cos(c.a) * r,
        c.y * spread + Math.sin(t * 0.7 + c.wob) * 0.08,
        Math.sin(c.a) * r * 0.7,
      )
      this.crumbQuat.setFromEuler(c.rot)
      const s = c.s * (this.swapping ? this.swap : 1)
      this.crumbScale.set(s, s * 0.8, s * 1.1)
      this.crumbMatrix.compose(this.crumbPos, this.crumbQuat, this.crumbScale)
      this.crumbs!.setMatrixAt(i, this.crumbMatrix)
    })
    this.crumbs.instanceMatrix.needsUpdate = true
    // Drawn crumbs next to a captured piece would only give the drawing away.
    if (this.current?.real) { this.crumbs.visible = false; return }
    // Crumbs are cooked whatever the drumstick is doing — except in the ritual, where
    // they follow it, so a raw piece of chicken is not surrounded by golden crumbs.
    if (this.crumbUniforms) {
      this.crumbUniforms.uFry.value = this.current?.cook ? this.cook.fry : 1
      this.crumbUniforms.uCoat.value = this.current?.cook ? Math.max(0.15, this.cook.coat) : 1
      ;(this.crumbs.material as THREE.Material).opacity = 1
      this.crumbs.visible = !(this.current?.cook && this.cook.coat < 0.05)
    }
  }
}
