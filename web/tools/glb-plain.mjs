#!/usr/bin/env node
/**
 * Re-encode a GLB without EXT_meshopt_compression.
 *
 *   node tools/glb-plain.mjs <in.glb> <out.glb>
 *
 * Meshopt decoding runs WebAssembly, which some hosts' content security policy
 * forbids (the demo build's host is one). The geometry stays quantized
 * (KHR_mesh_quantization, decoded by three.js without any WebAssembly), so the file
 * grows by less than the compression saved.
 */
import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { MeshoptDecoder } from 'meshoptimizer'

const [input, output] = process.argv.slice(2)
if (!input || !output) {
  console.error('usage: node tools/glb-plain.mjs <in.glb> <out.glb>')
  process.exit(1)
}
await MeshoptDecoder.ready
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder })
const doc = await io.read(input)
for (const ext of doc.getRoot().listExtensionsUsed()) {
  if (ext.extensionName === 'EXT_meshopt_compression') ext.dispose()
}
await io.write(output, doc)
console.log(`[glb-plain] ${output}`)
