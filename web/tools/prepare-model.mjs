#!/usr/bin/env node
/**
 * Turn a downloaded or generated food model into the one the site ships.
 *
 *   node tools/prepare-model.mjs <in.gltf|in.glb> <out-dir> [--name drumstick]
 *
 * writes  <out-dir>/<name>.glb        desktop: ~300k triangles, 4K colour
 *         <out-dir>/<name>-lite.glb   phones:  ~110k triangles, 2K colour
 *
 * Models from generators and marketplaces arrive heavy and flat: a million-plus
 * triangles split into a dozen meshes, one colour texture with no surface maps, and
 * the colour itself evenly lit — so on a page it reads as wax. This does what a 3D
 * artist would, from the model's own data:
 *
 *   1. weld the pieces into one mesh and simplify it, keeping the silhouette
 *   2. bake ambient occlusion by casting rays from every vertex into the real
 *      geometry, so the cracks between crumbs go dark exactly where the crumbs are
 *   3. regrade the colour from flat yellow towards fried golden-brown
 *   4. derive the maps it never had: a normal map for the crunch, and a roughness map
 *      that keeps the crevices matte and lets the peaks glint with oil
 *   5. add a thin clearcoat — the film of oil over the crust
 *   6. compress geometry (meshopt) and textures (WebP)
 */

import fs from 'node:fs'
import path from 'node:path'
import { NodeIO } from '@gltf-transform/core'
import {
  ALL_EXTENSIONS, KHRMaterialsClearcoat, EXTTextureWebP,
} from '@gltf-transform/extensions'
import {
  dedup, flatten, join, weld, simplify, prune, meshopt, clearNodeTransform, transformMesh,
} from '@gltf-transform/functions'
import { MeshoptSimplifier, MeshoptEncoder } from 'meshoptimizer'
import sharp from 'sharp'
import * as THREE from 'three'
import { MeshBVH } from 'three-mesh-bvh'

const args = process.argv.slice(2)
const input = args[0]
const outDir = args[1]
const name = args.includes('--name') ? args[args.indexOf('--name') + 1] : 'drumstick'
if (!input || !outDir) {
  console.error('usage: node tools/prepare-model.mjs <in.gltf|glb> <out-dir> [--name drumstick]')
  process.exit(1)
}

const VARIANTS = [
  { file: `${name}.glb`, tris: 300_000, albedo: 4096, maps: 2048, rays: 48 },
  { file: `${name}-lite.glb`, tris: 110_000, albedo: 2048, maps: 1024, rays: 32 },
]

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
  'meshopt.encoder': MeshoptEncoder,
})

const log = (...a) => console.log('[prepare]', ...a)
const clamp01 = x => (x < 0 ? 0 : x > 1 ? 1 : x)
const smoothstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t) }

// ---------------------------------------------------------------------------
// Colour
// ---------------------------------------------------------------------------

/** The colours of a well-fried crust, dark crack to sunlit peak (sRGB 0–1). */
const FRIED = [
  [0.0, [0.15, 0.055, 0.018]],
  [0.30, [0.38, 0.16, 0.04]],
  [0.55, [0.63, 0.31, 0.08]],
  [0.78, [0.82, 0.49, 0.16]],
  [1.0, [0.94, 0.68, 0.32]],
]

function gradient(stops, t) {
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) {
      const [t0, c0] = stops[i - 1]
      const [t1, c1] = stops[i]
      const k = (t - t0) / (t1 - t0)
      return [c0[0] + (c1[0] - c0[0]) * k, c0[1] + (c1[1] - c0[1]) * k, c0[2] + (c1[2] - c0[2]) * k]
    }
  }
  return stops[stops.length - 1][1]
}

/**
 * Regrade the albedo, and derive the normal and roughness maps from it.
 *
 * The source's own brightness is the best guess there is at its relief: in a lit
 * photograph-like texture the peaks of the crust are the bright parts and the cracks
 * the dark ones. That brightness is stretched (the source is flat), mapped through a
 * fried-crust ramp and blended with the original so its own variation survives.
 */
async function processTextures(image, albedoSize, mapSize) {
  const src = await sharp(image).removeAlpha().resize(albedoSize, albedoSize, { kernel: 'lanczos3' }).raw().toBuffer()
  const n = albedoSize * albedoSize

  // Luminance, and its spread, to stretch the flat source to the full range.
  const lum = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    lum[i] = (0.299 * src[i * 3] + 0.587 * src[i * 3 + 1] + 0.114 * src[i * 3 + 2]) / 255
  }
  const sorted = Float32Array.from(lum).sort()
  const lo = sorted[Math.floor(n * 0.02)]
  const hi = sorted[Math.floor(n * 0.995)]
  log(`  luminance ${lo.toFixed(2)}–${hi.toFixed(2)} → stretched`)

  const albedo = Buffer.alloc(n * 3)
  const stretched = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    const t = Math.pow(clamp01((lum[i] - lo) / (hi - lo)), 1.25)
    stretched[i] = t
    const g = gradient(FRIED, t)
    // 70% ramp, 30% the source's own hue — enough of the original to keep it varied.
    const px = [0, 0, 0]
    for (let c = 0; c < 3; c++) {
      const orig = src[i * 3 + c] / 255
      const shaded = orig * (0.5 + 0.5 * t) // the source is too evenly lit; let the cracks fall off
      px[c] = g[c] * 0.7 + shaded * 0.3
    }
    // A little saturation back: filmic tone mapping on the page takes some away, and
    // under-saturated fried food reads as stale.
    const grey = 0.299 * px[0] + 0.587 * px[1] + 0.114 * px[2]
    for (let c = 0; c < 3; c++) albedo[i * 3 + c] = Math.round(clamp01(grey + (px[c] - grey) * 1.14) * 255)
  }

  // ---- maps, at their own (smaller) size ----
  const height = await sharp(Buffer.from(Uint8Array.from(stretched, v => Math.round(v * 255)).buffer), {
    raw: { width: albedoSize, height: albedoSize, channels: 1 },
  }).resize(mapSize, mapSize).blur(0.8).extractChannel(0).raw().toBuffer({ resolveWithObject: true })
    // One channel, checked: read as one channel, a three-channel buffer shifts every
    // row and stripes the whole map.
    .then(({ data, info }) => {
      if (info.channels !== 1 || info.width !== mapSize) throw new Error(`height map came back ${info.channels}ch ${info.width}px`)
      return data
    })

  const m = mapSize
  const normal = Buffer.alloc(m * m * 3)
  const orm = Buffer.alloc(m * m * 3)
  const H = (x, y) => height[((y + m) % m) * m + ((x + m) % m)] / 255
  const strength = 2.2 * (m / 2048)
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < m; x++) {
      // Sobel
      const dx = (H(x + 1, y - 1) + 2 * H(x + 1, y) + H(x + 1, y + 1)) - (H(x - 1, y - 1) + 2 * H(x - 1, y) + H(x - 1, y + 1))
      const dy = (H(x - 1, y + 1) + 2 * H(x, y + 1) + H(x + 1, y + 1)) - (H(x - 1, y - 1) + 2 * H(x, y - 1) + H(x + 1, y - 1))
      let nx = -dx * strength
      let ny = dy * strength // glTF normal maps are +Y up; image rows run down
      let nz = 1
      const len = Math.hypot(nx, ny, nz)
      nx /= len; ny /= len; nz /= len
      const i = (y * m + x) * 3
      normal[i] = Math.round((nx * 0.5 + 0.5) * 255)
      normal[i + 1] = Math.round((ny * 0.5 + 0.5) * 255)
      normal[i + 2] = Math.round((nz * 0.5 + 0.5) * 255)

      // G: roughness — matte crumb, glossy oil on the high points, chalky in the cracks.
      // R: where the oil film sits, for the clearcoat — on the peaks, never down in the
      //    cracks, where a sheen reads as wet rather than fried.
      // B: metalness, none.
      const h = H(x, y)
      const rough = 0.86 - 0.32 * smoothstep(0.55, 0.95, h) + 0.08 * (1 - smoothstep(0.0, 0.25, h))
      const oil = 0.06 + 0.94 * smoothstep(0.5, 0.92, h)
      orm[i] = Math.round(clamp01(oil) * 255)
      orm[i + 1] = Math.round(clamp01(rough) * 255)
      orm[i + 2] = 0
    }
  }

  const webp = (buf, size, q, lossless = false) =>
    sharp(buf, { raw: { width: size, height: size, channels: 3 } }).webp({ quality: q, lossless, effort: 5 }).toBuffer()

  return {
    albedo: await webp(albedo, albedoSize, 84),
    normal: await webp(normal, m, 92),
    orm: await webp(orm, m, 88),
  }
}

// ---------------------------------------------------------------------------
// Ambient occlusion
// ---------------------------------------------------------------------------

/**
 * Per-vertex ambient occlusion, ray-traced against the model itself.
 *
 * Rays are short — a tenth of the model's size — so this measures how buried each
 * point is among its neighbouring crumbs, not how far it is from the edge of the
 * whole drumstick. Written into the vertex colours as a warm darkening, because a
 * crack in fried batter is dark brown, not grey.
 */
function bakeAO(prim, rays) {
  const pos = prim.getAttribute('POSITION').getArray()
  const nor = prim.getAttribute('NORMAL').getArray()
  const idx = prim.getIndices().getArray()
  const count = pos.length / 3

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setIndex(new THREE.BufferAttribute(idx, 1))
  geo.computeBoundingBox()
  const size = geo.boundingBox.getSize(new THREE.Vector3()).length()
  const bvh = new MeshBVH(geo)

  const maxDist = size * 0.1
  const eps = size * 0.0008

  // A fixed set of cosine-weighted directions about +Z, spun randomly per vertex.
  const dirs = []
  for (let k = 0; k < rays; k++) {
    const u = (k + 0.5) / rays
    const phi = k * 2.399963229728653 // golden angle
    const r = Math.sqrt(u)
    dirs.push(new THREE.Vector3(Math.cos(phi) * r, Math.sin(phi) * r, Math.sqrt(1 - u)))
  }

  const ao = new Float32Array(count)
  const ray = new THREE.Ray()
  const n = new THREE.Vector3()
  const q = new THREE.Quaternion()
  const spin = new THREE.Quaternion()
  const Z = new THREE.Vector3(0, 0, 1)
  const d = new THREE.Vector3()
  let seed = 7
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  const t0 = Date.now()

  for (let v = 0; v < count; v++) {
    n.set(nor[v * 3], nor[v * 3 + 1], nor[v * 3 + 2]).normalize()
    q.setFromUnitVectors(Z, n)
    spin.setFromAxisAngle(Z, rand() * Math.PI * 2)
    q.multiply(spin)
    ray.origin.set(pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]).addScaledVector(n, eps)
    let occl = 0
    for (const dir of dirs) {
      d.copy(dir).applyQuaternion(q)
      ray.direction.copy(d)
      const hit = bvh.raycastFirst(ray, THREE.DoubleSide, 0, maxDist)
      if (hit) occl += 1 - hit.distance / maxDist * 0.5 // nearer walls shade more
    }
    ao[v] = 1 - occl / rays
    if (v % 50000 === 0 && v) log(`  AO ${v}/${count} (${((Date.now() - t0) / 1000).toFixed(1)}s)`)
  }

  // One pass of neighbour averaging takes the speckle out without losing the cracks.
  const sum = new Float32Array(count)
  const cnt = new Uint16Array(count)
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t], b = idx[t + 1], c = idx[t + 2]
    sum[a] += ao[b] + ao[c]; cnt[a] += 2
    sum[b] += ao[a] + ao[c]; cnt[b] += 2
    sum[c] += ao[a] + ao[b]; cnt[c] += 2
  }
  const colors = new Float32Array(count * 3)
  const dark = [0.30, 0.17, 0.10]
  for (let v = 0; v < count; v++) {
    const s = cnt[v] ? (ao[v] * 2 + sum[v] / cnt[v]) / 3 : ao[v]
    const k = Math.pow(clamp01(s), 1.7)
    for (let c = 0; c < 3; c++) colors[v * 3 + c] = dark[c] + (1 - dark[c]) * k
  }
  log(`  AO baked over ${count} vertices × ${rays} rays in ${((Date.now() - t0) / 1000).toFixed(1)}s`)
  return colors
}

// ---------------------------------------------------------------------------
// Orientation
// ---------------------------------------------------------------------------

/**
 * Stand the piece up: its long axis along +Y, bone end on top.
 *
 * The site tilts and turns every object about its own long axis, so it has to know
 * which way that is. The long axis is the principal component of the vertices; the
 * bone end is whichever end is thinner.
 */
function uprightMatrix(prim) {
  const pos = prim.getAttribute('POSITION').getArray()
  const count = pos.length / 3
  const c = [0, 0, 0]
  for (let v = 0; v < count; v++) for (let k = 0; k < 3; k++) c[k] += pos[v * 3 + k] / count
  const cov = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  for (let v = 0; v < count; v++) {
    const d = [pos[v * 3] - c[0], pos[v * 3 + 1] - c[1], pos[v * 3 + 2] - c[2]]
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) cov[i][j] += d[i] * d[j] / count
  }
  // Power iteration for the largest eigenvector.
  let a = new THREE.Vector3(0.3, 1, 0.2).normalize()
  for (let it = 0; it < 64; it++) {
    a = new THREE.Vector3(
      cov[0][0] * a.x + cov[0][1] * a.y + cov[0][2] * a.z,
      cov[1][0] * a.x + cov[1][1] * a.y + cov[1][2] * a.z,
      cov[2][0] * a.x + cov[2][1] * a.y + cov[2][2] * a.z,
    ).normalize()
  }
  // Which end is thinner: mean distance from the axis over the last 15% at each end.
  const centre = new THREE.Vector3(...c)
  const p = new THREE.Vector3()
  const ts = new Float32Array(count)
  let tMin = Infinity, tMax = -Infinity
  for (let v = 0; v < count; v++) {
    p.set(pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]).sub(centre)
    ts[v] = p.dot(a)
    tMin = Math.min(tMin, ts[v]); tMax = Math.max(tMax, ts[v])
  }
  const span = tMax - tMin
  const radius = { lo: [0, 0], hi: [0, 0] }
  for (let v = 0; v < count; v++) {
    p.set(pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]).sub(centre)
    const r = p.clone().addScaledVector(a, -ts[v]).length()
    if (ts[v] < tMin + span * 0.15) { radius.lo[0] += r; radius.lo[1]++ }
    if (ts[v] > tMax - span * 0.15) { radius.hi[0] += r; radius.hi[1]++ }
  }
  const lo = radius.lo[0] / radius.lo[1]
  const hi = radius.hi[0] / radius.hi[1]
  if (lo < hi) a.negate() // the thin (bone) end goes up
  log(`  long axis (${a.x.toFixed(2)}, ${a.y.toFixed(2)}, ${a.z.toFixed(2)}), ends ${Math.min(lo, hi).toFixed(3)} / ${Math.max(lo, hi).toFixed(3)}`)
  const q = new THREE.Quaternion().setFromUnitVectors(a, new THREE.Vector3(0, 1, 0))
  const m = new THREE.Matrix4().makeTranslation(-c[0], -c[1], -c[2]).premultiply(new THREE.Matrix4().makeRotationFromQuaternion(q))
  return m.toArray()
}

// ---------------------------------------------------------------------------

await MeshoptSimplifier.ready
await MeshoptEncoder.ready
fs.mkdirSync(outDir, { recursive: true })

for (const variant of VARIANTS) {
  log(`${variant.file}`)
  const doc = await io.read(input)
  const root = doc.getRoot()

  await doc.transform(dedup(), flatten(), join({ keepNamed: false }), weld(), prune())
  const before = root.listMeshes().flatMap(m => m.listPrimitives()).reduce((s, p) => s + p.getIndices().getCount() / 3, 0)
  const ratio = Math.min(1, variant.tris / before)
  await doc.transform(
    simplify({ simplifier: MeshoptSimplifier, ratio, error: 0.01, lockBorder: false }),
    prune(),
  )
  const prims = root.listMeshes().flatMap(m => m.listPrimitives())
  const after = prims.reduce((s, p) => s + p.getIndices().getCount() / 3, 0)
  log(`  ${before.toLocaleString()} → ${after.toLocaleString()} triangles, ${prims.length} primitive(s)`)

  // Bake the exporter's node transforms into the vertices, then stand it upright.
  for (const node of root.listNodes()) clearNodeTransform(node)
  const upright = uprightMatrix(prims[0])
  for (const mesh of root.listMeshes()) transformMesh(mesh, upright)

  for (const prim of prims) {
    const colors = bakeAO(prim, variant.rays)
    const attr = doc.createAccessor().setType('VEC3').setArray(colors).setBuffer(root.listBuffers()[0])
    prim.setAttribute('COLOR_0', attr)
  }

  // ---- material ----
  const material = root.listMaterials()[0]
  const baseTex = material.getBaseColorTexture()
  const maps = await processTextures(Buffer.from(baseTex.getImage()), variant.albedo, variant.maps)
  baseTex.setImage(maps.albedo).setMimeType('image/webp').setURI(`${name}-albedo.webp`)
  const normalTex = doc.createTexture('normal').setImage(maps.normal).setMimeType('image/webp')
  const ormTex = doc.createTexture('roughness').setImage(maps.orm).setMimeType('image/webp')
  material
    .setNormalTexture(normalTex)
    .setNormalScale(0.9)
    .setMetallicRoughnessTexture(ormTex)
    .setRoughnessFactor(1)
    .setMetallicFactor(0)
    .setBaseColorFactor([1, 1, 1, 1])
  // The oil film, masked to the peaks by the red channel of the roughness map.
  const clearcoat = doc.createExtension(KHRMaterialsClearcoat).createClearcoat()
    .setClearcoatFactor(0.45)
    .setClearcoatTexture(ormTex)
    .setClearcoatRoughnessFactor(0.3)
  material.setExtension('KHR_materials_clearcoat', clearcoat)
  doc.createExtension(EXTTextureWebP).setRequired(true)

  // Keep the attribution with the file (CC BY 4.0 asks for it, and for the changes).
  const extras = root.getAsset().extras ?? {}
  root.getAsset().extras = {
    ...extras,
    modified: 'Retextured, ambient occlusion baked, normal/roughness maps derived, simplified and compressed for crispo web',
  }

  await doc.transform(meshopt({ encoder: MeshoptEncoder, level: 'medium' }))
  const out = path.join(outDir, variant.file)
  await io.write(out, doc)
  log(`  wrote ${out} — ${(fs.statSync(out).size / 1024 / 1024).toFixed(2)} MB`)
}
