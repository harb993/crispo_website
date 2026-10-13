import * as THREE from 'three'
import type { Model } from './models'

/**
 * Real food, captured — the part of the stage that makes it look like chicken rather
 * than a very good drawing of chicken.
 *
 * No amount of noise in a shader reads as the real thing up close. What does is a
 * capture of an actual piece: a Gaussian splat (every crumb, every glint of oil, the
 * way the light really sat on it) or a photogrammetry mesh with photo textures. Drop
 * one into `site/public/models/` and list it in `manifest.json` there, and it takes
 * that object's place on every section of the page. Nothing is required: with no
 * manifest the procedural cast stands in, so the page is never empty.
 *
 * See web/SCANNING.md for how to capture one with a phone.
 */

/** Where a capture can go. The three drumstick stages are for the ritual section. */
export type Slot = 'drumstick' | 'drumstick-raw' | 'drumstick-dredged' | 'burger' | 'fries' | 'can'

export const SLOTS: Slot[] = ['drumstick', 'drumstick-raw', 'drumstick-dredged', 'burger', 'fries', 'can']

export interface AssetSpec {
  /** Relative to /models/, or an absolute URL (a CDN). */
  file: string
  /** Euler rotation in degrees, applied first — scans come out of the apps every which way up. */
  rotate?: [number, number, number]
  /** Multiplies the automatic fit. */
  scale?: number
  /** Nudge after fitting, in units of the fitted radius. */
  offset?: [number, number, number]
  /** Resting tilt on stage, radians. Real scans default to upright. */
  tilt?: number
  /** Turntable speed, radians per second. */
  spin?: number
  /** Meshes only: add a thin clearcoat, for a scan whose roughness map lost the oil. */
  oil?: number
}

export type Manifest = Partial<Record<Slot, AssetSpec>>

const SPLAT = /\.(spz|ply|splat|ksplat|sog)(\?.*)?$/i
const MESH = /\.(glb|gltf)(\?.*)?$/i

/** The manifest, or null when there is none — the normal state before anything is scanned. */
export async function fetchManifest(): Promise<Manifest | null> {
  try {
    const res = await fetch('/models/manifest.json', { cache: 'no-cache' })
    if (!res.ok || !(res.headers.get('content-type') ?? '').includes('json')) return null
    const raw = await res.json()
    if (!raw || typeof raw !== 'object') return null
    const out: Manifest = {}
    for (const slot of SLOTS) {
      const spec = raw[slot]
      if (spec && typeof spec.file === 'string' && (SPLAT.test(spec.file) || MESH.test(spec.file))) out[slot] = spec
    }
    return Object.keys(out).length ? out : null
  } catch {
    return null
  }
}

function resolveUrl(file: string): string {
  return new URL(file, new URL('/models/', location.origin)).href
}

/**
 * Centre an object on the origin and scale it to fit a sphere of radius 1 — the
 * stage sizes everything from that — given the box it occupies once rotated.
 */
function fit(object: THREE.Object3D, box: THREE.Box3, spec: AssetSpec): THREE.Group {
  const size = box.getSize(new THREE.Vector3())
  const centre = box.getCenter(new THREE.Vector3())
  const s = (2 / Math.max(size.x, size.y, size.z, 1e-6)) * (spec.scale ?? 1)
  const inner = new THREE.Group()
  inner.add(object)
  inner.position.copy(centre).multiplyScalar(-1)
  const group = new THREE.Group()
  group.add(inner)
  group.scale.setScalar(s)
  if (spec.offset) group.position.set(spec.offset[0], spec.offset[1], spec.offset[2])
  return group
}

function eulerOf(spec: AssetSpec): THREE.Euler {
  const [x, y, z] = (spec.rotate ?? [0, 0, 0]).map(d => THREE.MathUtils.degToRad(Number(d) || 0))
  return new THREE.Euler(x, y, z)
}

// ---------------------------------------------------------------------------
// Gaussian splats
// ---------------------------------------------------------------------------

type SparkModule = typeof import('@sparkjsdev/spark')
let spark: Promise<SparkModule> | null = null
let sparkRenderer: THREE.Object3D | null = null

/**
 * Spark is a large module (it carries its own WebAssembly sorter), so it is only
 * fetched when there is a splat to show — a page with no captures never pays for it.
 */
async function loadSplat(spec: AssetSpec, renderer: THREE.WebGLRenderer, scene: THREE.Scene): Promise<THREE.Group> {
  const mod = await (spark ??= import('@sparkjsdev/spark'))
  if (!sparkRenderer) {
    sparkRenderer = new mod.SparkRenderer({ renderer }) as unknown as THREE.Object3D
    scene.add(sparkRenderer)
  }
  const mesh = new mod.SplatMesh({ url: resolveUrl(spec.file) })
  await mesh.initialized
  mesh.rotation.copy(eulerOf(spec))
  mesh.updateMatrix()
  const box = mesh.getBoundingBox(true).applyMatrix4(mesh.matrix)
  return fit(mesh, box, spec)
}

// ---------------------------------------------------------------------------
// Meshes
// ---------------------------------------------------------------------------

async function loadMesh(spec: AssetSpec): Promise<THREE.Group> {
  const [{ GLTFLoader }, { DRACOLoader }, { MeshoptDecoder }] = await Promise.all([
    import('three/addons/loaders/GLTFLoader.js'),
    import('three/addons/loaders/DRACOLoader.js'),
    import('three/addons/libs/meshopt_decoder.module.js'),
  ])
  const loader = new GLTFLoader()
  loader.setDRACOLoader(new DRACOLoader().setDecoderPath('/draco/'))
  loader.setMeshoptDecoder(MeshoptDecoder)
  const gltf = await loader.loadAsync(resolveUrl(spec.file))
  const root = gltf.scene

  // Scans usually arrive as plain standard materials. Oil is a thin glossy film over
  // a rough crust — which is exactly what a clearcoat is — so `oil` adds one.
  const oily = (m: THREE.Material): THREE.Material => {
    const std = m as THREE.MeshStandardMaterial
    if (!spec.oil || !std.isMeshStandardMaterial || (std as THREE.MeshPhysicalMaterial).isMeshPhysicalMaterial) return m
    const phys = new THREE.MeshPhysicalMaterial()
    THREE.MeshStandardMaterial.prototype.copy.call(phys, std)
    phys.clearcoat = Math.min(1, Math.max(0, spec.oil))
    phys.clearcoatRoughness = 0.35
    std.dispose()
    return phys
  }
  root.traverse(obj => {
    const mesh = obj as THREE.Mesh
    if (!mesh.isMesh) return
    mesh.material = Array.isArray(mesh.material) ? mesh.material.map(oily) : oily(mesh.material)
  })

  root.rotation.copy(eulerOf(spec))
  root.updateMatrixWorld(true)
  const box = new THREE.Box3().setFromObject(root)
  return fit(root, box, spec)
}

// ---------------------------------------------------------------------------

export async function loadReal(
  slot: Slot,
  spec: AssetSpec,
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
): Promise<Model> {
  const group = SPLAT.test(spec.file) ? await loadSplat(spec, renderer, scene) : await loadMesh(spec)
  return {
    name: slot.startsWith('drumstick') ? 'drumstick' : (slot as Model['name']),
    key: `real:${slot}`,
    real: true,
    group,
    tilt: spec.tilt ?? 0,
    spin: spec.spin ?? 0.28,
    timed: [],
    dispose() {
      group.traverse(obj => {
        const anyObj = obj as any
        if (typeof anyObj.dispose === 'function' && !(obj as THREE.Mesh).isMesh) anyObj.dispose()
        const mesh = obj as THREE.Mesh
        if (mesh.isMesh) {
          mesh.geometry?.dispose()
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
          mats.forEach(m => m?.dispose())
        }
      })
    },
  }
}
