#!/usr/bin/env node
/**
 * A self-contained demo of the site, for any static host — no relay behind it.
 *
 *   npm run build:demo        → dist-demo/
 *
 * The pretend kitchen runs in the browser (site/src/lib/demo.ts), assets are relative,
 * tracking links are `#track-<id>`, and index.html is written as a body fragment for
 * hosts that supply their own document skeleton.
 *
 * It is also built for a host that serves only ordinary web file types and refuses
 * WebAssembly: the drumstick ships as its phone version with no meshopt, its textures
 * as plain .webp images, and its geometry — and the studio EXR — as base64 text that
 * the page decodes itself (site/src/lib/binary.ts).
 */
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { MeshoptDecoder } from 'meshoptimizer'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const out = path.join(root, 'dist-demo')

execFileSync(process.execPath, [path.join(root, 'node_modules/vite/bin/vite.js'), 'build', '--base', './', '--outDir', out], {
  cwd: root,
  stdio: 'inherit',
  env: { ...process.env, VITE_DEMO: '1', VITE_HASH_ROUTES: '1', VITE_NO_WASM: '1', VITE_TEXT_ASSETS: '1' },
})

// The splat renderer and mesh decoders are never needed by the demo's model.
for (const f of fs.readdirSync(path.join(out, 'assets'))) {
  if (/^spark\.module-/.test(f)) fs.rmSync(path.join(out, 'assets', f))
}
fs.rmSync(path.join(out, 'draco'), { recursive: true, force: true })

// ---- the drumstick, as plain web files ----
await MeshoptDecoder.ready
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder })
const models = path.join(out, 'models')
const manifest = JSON.parse(fs.readFileSync(path.join(models, 'manifest.json'), 'utf8'))
const spec = manifest.drumstick
if (spec) {
  const doc = await io.read(path.join(models, spec.fileLite || spec.file))
  for (const ext of doc.getRoot().listExtensionsUsed()) {
    if (ext.extensionName === 'EXT_meshopt_compression') ext.dispose()
  }
  const material = doc.getRoot().listMaterials()[0]
  const list = { normalScale: material.getNormalScale() }
  const save = (tex, role) => {
    if (!tex) return null
    const name = `drumstick-${role}.webp`
    fs.writeFileSync(path.join(models, name), Buffer.from(tex.getImage()))
    return name
  }
  list.map = save(material.getBaseColorTexture(), 'albedo')
  list.normalMap = save(material.getNormalTexture(), 'normal')
  const orm = material.getMetallicRoughnessTexture()
  list.roughnessMap = list.metalnessMap = save(orm, 'orm')
  const coat = material.getExtension('KHR_materials_clearcoat')
  const coatTex = coat?.getClearcoatTexture()
  list.clearcoatMap = coatTex === orm ? list.roughnessMap : save(coatTex, 'clearcoat')
  for (const t of doc.getRoot().listTextures()) t.dispose()
  const glb = await io.writeBinary(doc)
  fs.writeFileSync(path.join(models, 'drumstick.glb.txt'), Buffer.from(glb).toString('base64'))
  fs.writeFileSync(path.join(models, 'drumstick.textures.json'), JSON.stringify(list, null, 2))
  manifest.drumstick = { ...spec, file: 'drumstick.glb.txt', textures: 'drumstick.textures.json' }
  delete manifest.drumstick.fileLite
  fs.writeFileSync(path.join(models, 'manifest.json'), JSON.stringify(manifest, null, 2))
}
for (const f of fs.readdirSync(models)) if (f.endsWith('.glb')) fs.rmSync(path.join(models, f))

// ---- the studio lighting, as text ----
const exr = path.join(out, 'env', 'studio.exr')
if (fs.existsSync(exr)) {
  fs.writeFileSync(`${exr}.txt`, fs.readFileSync(exr).toString('base64'))
  fs.rmSync(exr)
}

// index.html → a fragment: the host wraps it in its own <html><head><body>.
const html = fs.readFileSync(path.join(out, 'index.html'), 'utf8')
const head = /<head>([\s\S]*?)<\/head>/i.exec(html)[1]
  .replace(/<meta charset[^>]*>\s*/i, '')
  .replace(/<meta name="viewport"[^>]*>\s*/i, '')
  .replace(/<title>[\s\S]*?<\/title>/i, '<title>Crispo</title>')
const body = /<body[^>]*>([\s\S]*)<\/body>/i.exec(html)[1]
fs.writeFileSync(path.join(out, 'index.html'), `${head.trim()}\n${body.trim()}\n`)

const files = []
const walk = d => {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name)
    if (f.isDirectory()) walk(p)
    else files.push([path.relative(out, p), fs.statSync(p).size])
  }
}
walk(out)
for (const [f, size] of files) console.log(`${(size / 1024 / 1024).toFixed(2).padStart(7)} MB  ${f}`)
