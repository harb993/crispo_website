import * as THREE from 'three'
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js'
import {
  crustMaterial, bunMaterial, seedMaterial, lettuceMaterial, cheeseMaterial, cartonMaterial,
  canMaterial, type CrustUniforms,
} from './materials'

/**
 * The cast: one hero object per part of the menu, every one of them built from
 * primitives and noise at load time. No model files to download.
 */

export type ModelName = 'drumstick' | 'burger' | 'fries' | 'can'

export interface Model {
  name: ModelName
  group: THREE.Group
  /** The resting tilt, in radians, before the pointer adds its own. */
  tilt: number
  /** Spin speed around the model's own axis, radians per second. */
  spin: number
  /** Crust uniforms the page may drive — present on the drumstick only. */
  cook?: CrustUniforms
  /** Everything with a uTime. */
  timed: CrustUniforms[]
  dispose(): void
}

export interface Quality {
  low: boolean
}

/**
 * Lathe and sphere geometries carry a UV seam: the first and last columns are
 * separate vertices at the same place, so recomputing normals leaves a visible line
 * down the object. Nothing here uses UVs — every surface is textured from its object
 * position — so drop them, weld the seam, and the normals come out smooth.
 */
function weld(geometry: THREE.BufferGeometry): THREE.BufferGeometry {
  geometry.deleteAttribute('uv')
  geometry.deleteAttribute('normal')
  const welded = mergeVertices(geometry, 1e-4)
  welded.computeVertexNormals()
  geometry.dispose()
  return welded
}

/** Scale and centre a group so it fits a sphere of radius 1 — the stage sizes from that. */
function normalize(group: THREE.Group, radius = 1): void {
  const box = new THREE.Box3().setFromObject(group)
  const size = box.getSize(new THREE.Vector3())
  const centre = box.getCenter(new THREE.Vector3())
  const s = (radius * 2) / Math.max(size.x, size.y, size.z)
  const inner = new THREE.Group()
  while (group.children.length) inner.add(group.children[0])
  inner.position.copy(centre).multiplyScalar(-1)
  group.add(inner)
  group.scale.setScalar(s)
}

function disposer(group: THREE.Group): () => void {
  return () => {
    group.traverse(obj => {
      const mesh = obj as THREE.Mesh
      if (mesh.isMesh) {
        mesh.geometry.dispose()
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
        mats.forEach(m => m.dispose())
      }
    })
  }
}

// ---------------------------------------------------------------------------

/**
 * The drumstick: a solid of revolution — bulb, taper, bone, knuckle — given a slight
 * curve and an oval section so it does not read as a turned chair leg, then coated.
 */
export function drumstick(q: Quality): Model {
  const profile = [
    [0.0, -1.1], [0.2, -1.08], [0.38, -1.01], [0.52, -0.91], [0.62, -0.78], [0.69, -0.62],
    [0.72, -0.44], [0.71, -0.26], [0.66, -0.08], [0.58, 0.09], [0.47, 0.25], [0.35, 0.41],
    [0.24, 0.55], [0.165, 0.67], [0.13, 0.77], [0.112, 0.89], [0.108, 0.99], [0.122, 1.06],
    [0.158, 1.11], [0.192, 1.16], [0.2, 1.21], [0.18, 1.26], [0.12, 1.3], [0.05, 1.318], [0.0, 1.322],
  ].map(([x, y]) => new THREE.Vector2(x, y))

  const curve = new THREE.SplineCurve(profile)
  const points = curve.getPoints(q.low ? 120 : 220)
  // The poles must sit exactly on the axis or the lathe leaves a pinhole.
  points[0].x = 0
  points[points.length - 1].x = 0

  let geo: THREE.BufferGeometry = new THREE.LatheGeometry(points, q.low ? 96 : 180)
  const pos = geo.attributes.position as THREE.BufferAttribute
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i)
    // A gentle banana curve along the length, and an oval rather than round section.
    const t = (y + 1.1) / 2.42
    pos.setX(i, pos.getX(i) + 0.09 * t * t)
    pos.setZ(i, pos.getZ(i) * 0.88)
  }
  geo = weld(geo)

  const mat = crustMaterial({
    amp: 0.11, freq: 2.1, detail: 13, bump: 1.5, boneY: 0.74, seed: 3.1, lowQuality: q.low,
  })
  const mesh = new THREE.Mesh(geo, mat)

  const group = new THREE.Group()
  group.add(mesh)
  normalize(group, 1)

  const cook = mat.userData.crust
  return { name: 'drumstick', group, tilt: -0.62, spin: 0.32, cook, timed: [cook], dispose: disposer(group) }
}

// ---------------------------------------------------------------------------

/** Points spread evenly over a sphere — where the sesame seeds go. */
function fibonacciSphere(n: number): THREE.Vector3[] {
  const out: THREE.Vector3[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const a = golden * i
    out.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r))
  }
  return out
}

/** The crispy chicken burger: brioche, a craggy fillet, cheddar, lettuce. */
export function burger(q: Quality): Model {
  const group = new THREE.Group()

  // Crown — a squashed dome on its flat side.
  const crownGeo = weld(new THREE.SphereGeometry(1, q.low ? 64 : 112, q.low ? 32 : 56, 0, Math.PI * 2, 0, Math.PI / 2))
  const crown = new THREE.Mesh(crownGeo, bunMaterial({ crownY: 0.9 }))
  crown.scale.set(1.08, 0.66, 1.08)
  crown.position.y = 0.36
  group.add(crown)

  // Sesame, scattered over the upper part of the crown and turned to lie on it.
  const seedGeo = new THREE.SphereGeometry(1, 10, 6)
  seedGeo.scale(0.035, 0.012, 0.018)
  const seedPts = fibonacciSphere(220).filter(p => p.y > 0.42)
  const seeds = new THREE.InstancedMesh(seedGeo, seedMaterial(), seedPts.length)
  const m = new THREE.Matrix4()
  const qn = new THREE.Quaternion()
  const up = new THREE.Vector3(0, 1, 0)
  seedPts.forEach((p, i) => {
    const surface = new THREE.Vector3(p.x * 1.08, p.y * 0.66 + 0.36, p.z * 1.08)
    const n = new THREE.Vector3(p.x / 1.08, p.y / 0.66, p.z / 1.08).normalize()
    qn.setFromUnitVectors(up, n)
    qn.multiply(new THREE.Quaternion().setFromAxisAngle(up, Math.random() * Math.PI))
    m.compose(surface.addScaledVector(n, 0.004), qn, new THREE.Vector3(1, 1, 1))
    seeds.setMatrixAt(i, m)
  })
  group.add(seeds)

  // Lettuce frill under the crown.
  const lettuceGeo = new THREE.RingGeometry(0.001, 1.16, q.low ? 72 : 128, q.low ? 10 : 18)
  const lettuce = new THREE.Mesh(lettuceGeo, lettuceMaterial())
  lettuce.rotation.x = -Math.PI / 2
  lettuce.position.y = 0.33
  group.add(lettuce)

  // Cheese, corners slumping.
  const cheeseGeo = new THREE.PlaneGeometry(1.72, 1.72, 40, 40)
  const cheese = new THREE.Mesh(cheeseGeo, cheeseMaterial())
  cheese.rotation.x = -Math.PI / 2
  cheese.rotation.z = 0.5
  cheese.position.y = 0.24
  group.add(cheese)

  // The fillet — an irregular slab, fully crusted.
  let filletGeo: THREE.BufferGeometry = new THREE.SphereGeometry(1, q.low ? 72 : 128, q.low ? 36 : 64)
  const fp = filletGeo.attributes.position as THREE.BufferAttribute
  for (let i = 0; i < fp.count; i++) {
    const x = fp.getX(i), y = fp.getY(i), z = fp.getZ(i)
    const a = Math.atan2(z, x)
    const wobble = 1 + 0.08 * Math.sin(3 * a + 1) + 0.05 * Math.sin(5 * a + 2) + 0.03 * Math.sin(9 * a)
    fp.setXYZ(i, x * 1.3 * wobble, y * 0.27, z * 1.16 * wobble)
  }
  filletGeo = weld(filletGeo)
  const filletMat = crustMaterial({ amp: 0.06, freq: 2.6, detail: 10, bump: 1.4, seed: 7.7, lowQuality: q.low })
  const fillet = new THREE.Mesh(filletGeo, filletMat)
  fillet.position.y = 0.0
  group.add(fillet)

  // Heel — a rounded puck, its cut face pale.
  const heelProfile = [
    [0, -0.2], [0.85, -0.2], [0.97, -0.16], [1.03, -0.07], [1.04, 0.02], [1.0, 0.09], [0.93, 0.12], [0, 0.12],
  ].map(([x, y]) => new THREE.Vector2(x, y))
  const heelGeo = weld(new THREE.LatheGeometry(new THREE.SplineCurve(heelProfile).getPoints(48), q.low ? 64 : 112))
  const heel = new THREE.Mesh(heelGeo, bunMaterial({ cutY: 0.105, crownY: 0.4 }))
  heel.position.y = -0.36
  group.add(heel)

  normalize(group, 1)
  const cook = filletMat.userData.crust
  return { name: 'burger', group, tilt: 0.18, spin: 0.38, timed: [cook], dispose: disposer(group) }
}

// ---------------------------------------------------------------------------

/** A carton of fries, a little overfilled, every stick at its own angle. */
export function fries(q: Quality): Model {
  const group = new THREE.Group()

  const cartonGeo = new THREE.CylinderGeometry(0.82, 0.58, 1.3, 4, 1, true)
  cartonGeo.rotateY(Math.PI / 4)
  cartonGeo.scale(1.12, 1, 0.78)
  const carton = new THREE.Mesh(cartonGeo, cartonMaterial())
  group.add(carton)

  const stick = new THREE.BoxGeometry(0.11, 1.45, 0.11, 1, 8, 1)
  const friesMat = crustMaterial({
    amp: 0.006, freq: 6, detail: 16, bump: 0.5, coat: 0.25, seed: 1.9, lowQuality: q.low,
    palette: { deep: '#b06a1c', golden: '#e8ad45', peak: '#f8d983', batter: '#f3d38c' },
  })
  const count = q.low ? 26 : 38
  const sticks = new THREE.InstancedMesh(stick, friesMat, count)
  const m = new THREE.Matrix4()
  const e = new THREE.Euler()
  const qn = new THREE.Quaternion()
  let seed = 11
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  for (let i = 0; i < count; i++) {
    const x = (rand() - 0.5) * 1.2
    const z = (rand() - 0.5) * 0.66
    const y = 0.35 + rand() * 0.45
    e.set((rand() - 0.5) * 0.45, rand() * Math.PI, (rand() - 0.5) * 0.45 - x * 0.35)
    qn.setFromEuler(e)
    const len = 0.85 + rand() * 0.3
    m.compose(new THREE.Vector3(x, y, z), qn, new THREE.Vector3(1, len, 1))
    sticks.setMatrixAt(i, m)
  }
  group.add(sticks)

  normalize(group, 1)
  const cook = friesMat.userData.crust
  return { name: 'fries', group, tilt: 0.14, spin: 0.42, timed: [cook], dispose: disposer(group) }
}

// ---------------------------------------------------------------------------

/** A cold can, lacquered red. */
export function can(q: Quality): Model {
  const profile = [
    [0, -1.0], [0.4, -1.0], [0.47, -0.97], [0.52, -0.9], [0.55, -0.8], [0.55, 0.76], [0.5, 0.88],
    [0.45, 0.95], [0.455, 0.99], [0.44, 1.01], [0.4, 0.99], [0, 0.98],
  ].map(([x, y]) => new THREE.Vector2(x, y))
  const geo = weld(new THREE.LatheGeometry(new THREE.SplineCurve(profile).getPoints(90), q.low ? 72 : 128))
  const mesh = new THREE.Mesh(geo, canMaterial())
  const group = new THREE.Group()
  group.add(mesh)
  normalize(group, 1)
  return { name: 'can', group, tilt: -0.22, spin: 0.6, timed: [], dispose: disposer(group) }
}

export const BUILDERS: Record<ModelName, (q: Quality) => Model> = { drumstick, burger, fries, can }

/**
 * Which object stands for a menu category, guessed from its name — the till's
 * categories are whatever the owner typed, so this matches words, not ids.
 */
export function modelForCategory(name: string): ModelName {
  if (/برجر|برغر|سندو|ساندو|راب|تورتيلا|burger|sandwich|wrap/i.test(name)) return 'burger'
  if (/بطاطس|مقبلات|سلط|حلقات|fries|side/i.test(name)) return 'fries'
  if (/مشروب|عصير|حلو|بيبسي|كانز|drink|dessert|soda/i.test(name)) return 'can'
  return 'drumstick'
}
