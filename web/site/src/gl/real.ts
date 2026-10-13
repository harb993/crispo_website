import * as THREE from 'three'
import type { Model, Quality } from './models'
import type { CrustUniforms } from './materials'

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
  /** A lighter version for phones and slow GPUs (fewer triangles, smaller textures). */
  fileLite?: string
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
  /**
   * Meshes only, drumstick only: let the ritual cook it — the same real piece shown
   * marinated, floured and fried by regrading its own texture. On unless set false.
   */
  cook?: boolean
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
      const ok = (f: unknown) => typeof f === 'string' && (SPLAT.test(f) || MESH.test(f))
      if (spec && ok(spec.file) && (spec.fileLite === undefined || ok(spec.fileLite))) out[slot] = spec
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
// Cooking a real piece
// ---------------------------------------------------------------------------

const lin = (hex: string) => ({ value: new THREE.Color(hex) })

/**
 * The ritual, on the real drumstick.
 *
 * The capture is the FRIED piece; marinated and floured are worked out from it. Its
 * own brightness says where the peaks and cracks are, so each stage keeps the real
 * relief and only changes what it is made of: pale flesh under a red spice rub, then
 * a matte white dredge, then — as uFry rises — back to the captured gold, peaks
 * first. Same uniforms as the drawn drumstick, so the page drives both the same way.
 */
function makeCookable(material: THREE.MeshStandardMaterial): CrustUniforms {
  const uniforms = {
    uTime: { value: 0 },
    uCoat: { value: 1 },
    uFry: { value: 1 },
    uMarinade: { value: 1 },
    uRawTone: lin('#e7b9a1'),
    uSpiceTone: lin('#c2502a'),
    uFlourTone: lin('#f1e7d6'),
  }
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, uniforms)
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uCoat, uFry, uMarinade;
        uniform vec3 uRawTone, uSpiceTone, uFlourTone;`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec3 friedC = diffuseColor.rgb;
        // Linear luminance of the fried colour, opened up to roughly 0..1.
        float cookT = clamp(sqrt(dot(friedC, vec3(0.2126, 0.7152, 0.0722))) * 1.7, 0.0, 1.0);
        vec3 rawC = uRawTone * mix(0.62, 1.0, cookT);
        vec3 rubC = mix(uRawTone, uSpiceTone, 0.6 + 0.3 * (1.0 - cookT)) * mix(0.55, 1.0, cookT);
        vec3 flourC = uFlourTone * mix(0.6, 1.0, cookT);
        vec3 stageC = mix(mix(rawC, rubC, uMarinade), flourC, uCoat);
        #ifdef USE_COLOR
          // The baked occlusion lives in the vertex colours — keep the cracks dark in
          // every stage, not only the fried one.
          stageC *= mix(vec3(1.0), vec3(dot(vColor.rgb, vec3(0.333))), 0.85);
        #endif
        float browned = clamp(pow(uFry, 0.6) * 1.35 - (1.0 - cookT) * 0.35, 0.0, 1.0);
        diffuseColor.rgb = mix(stageC, friedC, browned);`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        float stageRough = mix(mix(0.62, 0.36, uMarinade), 0.93, uCoat);
        roughnessFactor = mix(stageRough, roughnessFactor, browned);`)
      .replace('#include <lights_physical_fragment>', `#include <lights_physical_fragment>
        #ifdef USE_CLEARCOAT
          material.clearcoat *= mix(uMarinade * 0.5 * (1.0 - uCoat), 1.0, browned);
        #endif`)
  }
  material.customProgramCacheKey = () => 'real-cook'
  return uniforms
}

// ---------------------------------------------------------------------------
// Meshes
// ---------------------------------------------------------------------------

async function loadMesh(spec: AssetSpec, file: string, cookable: boolean): Promise<{ group: THREE.Group; cook?: CrustUniforms }> {
  const [{ GLTFLoader }, { DRACOLoader }, { MeshoptDecoder }] = await Promise.all([
    import('three/addons/loaders/GLTFLoader.js'),
    import('three/addons/loaders/DRACOLoader.js'),
    import('three/addons/libs/meshopt_decoder.module.js'),
  ])
  const loader = new GLTFLoader()
  loader.setDRACOLoader(new DRACOLoader().setDecoderPath('/draco/'))
  loader.setMeshoptDecoder(MeshoptDecoder)
  const gltf = await loader.loadAsync(resolveUrl(file))
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

  // One material is all a single food piece has; that is the one the ritual cooks.
  let cook: CrustUniforms | undefined
  if (cookable) {
    const mats = new Set<THREE.Material>()
    root.traverse(obj => {
      const mesh = obj as THREE.Mesh
      if (mesh.isMesh) (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).forEach(m => mats.add(m))
    })
    if (mats.size === 1) {
      const only = [...mats][0] as THREE.MeshStandardMaterial
      if (only.isMeshStandardMaterial) cook = makeCookable(only)
    }
  }

  root.rotation.copy(eulerOf(spec))
  root.updateMatrixWorld(true)
  const box = new THREE.Box3().setFromObject(root)
  return { group: fit(root, box, spec), cook }
}

// ---------------------------------------------------------------------------

export async function loadReal(
  slot: Slot,
  spec: AssetSpec,
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  quality: Quality,
): Promise<Model> {
  const file = quality.low && spec.fileLite ? spec.fileLite : spec.file
  let group: THREE.Group
  let cook: CrustUniforms | undefined
  if (SPLAT.test(file)) {
    group = await loadSplat({ ...spec, file }, renderer, scene)
  } else {
    ;({ group, cook } = await loadMesh(spec, file, slot === 'drumstick' && spec.cook !== false))
  }
  return {
    name: slot.startsWith('drumstick') ? 'drumstick' : (slot as Model['name']),
    key: `real:${slot}`,
    real: true,
    group,
    tilt: spec.tilt ?? 0,
    spin: spec.spin ?? 0.28,
    cook,
    timed: cook ? [cook] : [],
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
