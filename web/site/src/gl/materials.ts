import * as THREE from 'three'
import { SIMPLEX, WORLEY, PERTURB } from './glsl'

/**
 * Every material on the stage is a stock `MeshPhysicalMaterial` — so it gets three's
 * real lighting, environment reflections and clearcoat — with a few lines of GLSL
 * spliced in at the points three leaves for it. The splice points are the
 * `#include <…>` lines of three's own shader, which have been stable for years.
 */

interface Patch {
  key: string
  uniforms: Record<string, THREE.IUniform>
  /** GLSL compiled into BOTH stages: uniforms, varyings, functions. */
  common?: string
  /**
   * Vertex body that must declare `vec3 dPos` (the displaced position) and
   * `vec3 dNormal` (its normal). Runs before three computes anything from either.
   */
  displace?: string
  /** After three's colour stage; set `diffuseColor.rgb`. */
  color?: string
  roughness?: string
  metalness?: string
  /** After three's normal maps; may reassign `normal`. */
  normal?: string
  /** After the physical lighting setup; may adjust `material.*`. */
  lighting?: string
}

function patch(material: THREE.MeshPhysicalMaterial, p: Patch): THREE.MeshPhysicalMaterial {
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, p.uniforms)
    const head = `${SIMPLEX}\n${WORLEY}\n${p.common ?? ''}`

    shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>\n${head}`)
    if (p.displace) {
      shader.vertexShader = shader.vertexShader
        .replace('#include <beginnormal_vertex>', `
          ${p.displace}
          vec3 objectNormal = dNormal;
          #ifdef USE_TANGENT
            vec3 objectTangent = vec3(tangent.xyz);
          #endif
        `)
        .replace('#include <begin_vertex>', 'vec3 transformed = dPos;')
    }

    // Screen-space derivatives exist only in the fragment stage.
    let fs = shader.fragmentShader.replace('#include <common>', `#include <common>\n${head}\n${PERTURB}`)
    if (p.color) fs = fs.replace('#include <color_fragment>', `#include <color_fragment>\n${p.color}`)
    if (p.roughness) fs = fs.replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>\n${p.roughness}`)
    if (p.metalness) fs = fs.replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>\n${p.metalness}`)
    if (p.normal) fs = fs.replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>\n${p.normal}`)
    if (p.lighting) fs = fs.replace('#include <lights_physical_fragment>', `#include <lights_physical_fragment>\n${p.lighting}`)
    shader.fragmentShader = fs
  }
  // Two patches with the same key share one compiled program; values stay per material.
  material.customProgramCacheKey = () => p.key
  return material
}

const color = (hex: string) => ({ value: new THREE.Color(hex) })

// ---------------------------------------------------------------------------
// The crust
// ---------------------------------------------------------------------------

export interface CrustOptions {
  /** How far the batter lumps stand off the surface, in model units. */
  amp?: number
  /** Scale of the lumps. Higher is finer. */
  freq?: number
  /** Scale of the per-pixel crumb detail. */
  detail?: number
  /** Strength of that detail in the lighting. */
  bump?: number
  /** Object-space height above which the surface is bare bone. Omit for none. */
  boneY?: number
  coat?: number
  fry?: number
  marinade?: number
  palette?: Partial<Record<'raw' | 'spice' | 'batter' | 'deep' | 'golden' | 'peak' | 'bone', string>>
  seed?: number
  lowQuality?: boolean
}

export interface CrustUniforms {
  uCoat: THREE.IUniform<number>
  uFry: THREE.IUniform<number>
  uMarinade: THREE.IUniform<number>
  uTime: THREE.IUniform<number>
}

/**
 * Fried chicken, from raw to golden, as three numbers.
 *
 *   uMarinade  0 → 1   pale skin picks up paprika specks and a wet sheen
 *   uCoat      0 → 1   flour batter grows out of the surface, matte and pale
 *   uFry       0 → 1   the batter browns: dark in the crevices, gold on the peaks
 *
 * The ritual section of the page scrubs these with the scroll position.
 */
export function crustMaterial(o: CrustOptions = {}): THREE.MeshPhysicalMaterial & { userData: { crust: CrustUniforms } } {
  const pal = {
    raw: '#e6bba2',
    spice: '#c2502a',
    batter: '#eee2cc',
    deep: '#3a1204',
    golden: '#ad5f17',
    peak: '#ec9f36',
    bone: '#dcc59c',
    ...o.palette,
  }
  const uniforms = {
    uTime: { value: 0 },
    uCoat: { value: o.coat ?? 1 },
    uFry: { value: o.fry ?? 1 },
    uMarinade: { value: o.marinade ?? 1 },
    uAmp: { value: o.amp ?? 0.07 },
    uFreq: { value: o.freq ?? 2.2 },
    uDetail: { value: o.detail ?? 9 },
    uBump: { value: o.bump ?? 1.4 },
    uBoneY: { value: o.boneY ?? 99 },
    uSeed: { value: new THREE.Vector3(o.seed ?? 0, (o.seed ?? 0) * 1.7, (o.seed ?? 0) * 0.3) },
    uRaw: color(pal.raw),
    uSpice: color(pal.spice),
    uBatter: color(pal.batter),
    uDeep: color(pal.deep),
    uGolden: color(pal.golden),
    uPeak: color(pal.peak),
    uBone: color(pal.bone),
  }

  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.6,
    metalness: 0,
    clearcoat: 0.12,
    clearcoatRoughness: 0.5,
  })
  if (o.lowQuality) material.defines = { CRUST_LQ: '' }

  patch(material, {
    key: 'crust',
    uniforms,
    common: /* glsl */ `
      uniform float uTime, uCoat, uFry, uMarinade, uAmp, uFreq, uDetail, uBump, uBoneY;
      uniform vec3 uSeed, uRaw, uSpice, uBatter, uDeep, uGolden, uPeak, uBone;
      varying vec3 vObj;
      varying float vMacro;
      varying float vMask;

      // The big shapes: clusters of batter split by deep cracks, on lumpy meat.
      float crustMacro(vec3 p) {
        p += uSeed;
        float lumps = snoise(p * 0.8) * 0.5 + 0.5;
        vec2 f = worley2(p * 1.5);
        float cluster = smoothstep(0.0, 0.32, f.y - f.x) * (1.0 - f.x * 0.6);
        float flakes = 1.0 - abs(snoise(p * 3.4));
        flakes = flakes * flakes * flakes;
        return lumps * 0.25 + cluster * 0.6 + flakes * 0.22;
      }

      // 1 on the meat, 0 on the bone — with a ragged edge, because batter never
      // stops in a straight line.
      float crustMask(vec3 p) {
        if (uBoneY > 50.0) return 1.0;
        float edge = uBoneY + snoise(p * 5.0 + uSeed) * 0.06;
        return 1.0 - smoothstep(edge - 0.05, edge + 0.04, p.y);
      }

      // The fine crumbs, per pixel: flakes of two sizes with shadowed pits between,
      // and a speckle on top. Two scales, because one reads as a pattern.
      float crumbLayer(vec3 p) {
        vec2 f = worley2(p);
        float crack = smoothstep(0.02, 0.28, f.y - f.x);
        return crack * (1.0 - f.x * 0.7);
      }
      float crustDetail(vec3 p) {
        p += uSeed * 1.7;
        #ifdef CRUST_LQ
          float r = 1.0 - abs(snoise(p * 1.1));
          return r * r * 0.75 + (snoise(p * 3.0) * 0.5 + 0.5) * 0.25;
        #else
          float big = crumbLayer(p);
          float small = crumbLayer(p * 2.7 + 11.0);
          float fine = snoise(p * 6.5) * 0.5 + 0.5;
          return big * 0.5 + small * 0.35 + fine * 0.15;
        #endif
      }
    `,
    displace: /* glsl */ `
      vec3 n0 = normalize(normal);
      // Even raw meat is not a smooth solid of revolution, so a little of the shape
      // is always there; the batter makes it stand proud.
      float amp = uAmp * (0.22 + 0.78 * uCoat);
      float m0 = crustMask(position);
      vec3 dPos = position;
      vec3 dNormal = n0;
      vMacro = crustMacro(position * uFreq);
      if (amp * m0 > 0.00001) {
        vec3 tt = normalize(cross(n0, abs(n0.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
        vec3 bb = normalize(cross(n0, tt));
        float e = 0.01;
        vec3 q1 = position + tt * e;
        vec3 q2 = position + bb * e;
        vec3 P0 = position + n0 * vMacro * amp * m0;
        vec3 P1 = q1 + n0 * crustMacro(q1 * uFreq) * amp * crustMask(q1);
        vec3 P2 = q2 + n0 * crustMacro(q2 * uFreq) * amp * crustMask(q2);
        dPos = P0;
        dNormal = normalize(cross(P1 - P0, P2 - P0));
        if (dot(dNormal, n0) < 0.0) dNormal = -dNormal;
      }
      vObj = position;
      vMask = m0;
    `,
    color: /* glsl */ `
      float cH = crustDetail(vObj * uDetail);
      float cav = clamp(vMacro * 0.75 + cH * 0.38 - 0.08, 0.0, 1.0);

      float speck = smoothstep(0.2, 0.7, snoise(vObj * 30.0 + uSeed)) * 0.7
                  + smoothstep(0.5, 0.9, snoise(vObj * 70.0 - uSeed)) * 0.5;
      vec3 marinated = mix(uRaw, uSpice, clamp(0.5 + speck * 0.5, 0.0, 1.0));
      vec3 meat = mix(uRaw, marinated, uMarinade);

      vec3 coated = mix(uBatter * 0.8, uBatter, smoothstep(0.2, 0.9, cav));
      vec3 cooked = mix(uDeep, uGolden, smoothstep(0.08, 0.55, cav));
      cooked = mix(cooked, uPeak, smoothstep(0.62, 0.98, cav));

      // The peaks brown first and the cracks last, and most of the colour arrives in
      // the first half of the fry — which is how it looks through the oil.
      float browned = clamp(pow(uFry, 0.6) * 1.35 - (1.0 - cav) * 0.35, 0.0, 1.0);
      vec3 crust = mix(meat, coated, uCoat);
      crust = mix(crust, cooked, browned);

      vec3 boneC = uBone * (0.86 + 0.14 * snoise(vObj * 16.0));
      diffuseColor.rgb = mix(boneC, crust, vMask);
    `,
    roughness: /* glsl */ `
      float oil = smoothstep(0.5, 0.95, cH);
      float rCrust = mix(0.62, 0.34, uMarinade);   // marinade is wet
      rCrust = mix(rCrust, 0.88, uCoat);           // flour is chalk-matte
      rCrust = mix(rCrust, 0.74 - oil * 0.3, uFry); // dry crust; the oil glints on the peaks
      roughnessFactor = mix(0.72, rCrust, vMask);
    `,
    normal: /* glsl */ `
      vec2 dH = vec2(dFdx(cH), dFdy(cH)) * uBump * vMask * (0.3 + 0.7 * uCoat);
      normal = crustPerturb(-vViewPosition, normal, dH, faceDirection);
    `,
    lighting: /* glsl */ `
      #ifdef USE_CLEARCOAT
        material.clearcoat *= mix(mix(0.15, 0.7, uMarinade), 1.0, uFry) * mix(0.05, 1.0, vMask) * (1.0 - uCoat * (1.0 - uFry) * 0.9);
      #endif
    `,
  })

  ;(material.userData as { crust: CrustUniforms }).crust = uniforms
  return material as THREE.MeshPhysicalMaterial & { userData: { crust: CrustUniforms } }
}

// ---------------------------------------------------------------------------
// The bun
// ---------------------------------------------------------------------------

/** Egg-washed brioche: dark and glossy on the crown, pale where it splits. */
export function bunMaterial(opts: { cutY?: number; crownY?: number } = {}): THREE.MeshPhysicalMaterial {
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.42, clearcoat: 0.7, clearcoatRoughness: 0.32,
  })
  return patch(material, {
    key: 'bun',
    uniforms: {
      uCrown: color('#9c4a14'),
      uRim: color('#e1a457'),
      uCrumb: color('#f2dcb0'),
      uCutY: { value: opts.cutY ?? 99 },
      uCrownY: { value: opts.crownY ?? 0.8 },
    },
    common: /* glsl */ `
      uniform vec3 uCrown, uRim, uCrumb;
      uniform float uCutY, uCrownY;
      varying vec3 vObj;
    `,
    displace: /* glsl */ `
      vec3 dPos = position;
      vec3 dNormal = normal;
      vObj = position;
    `,
    color: /* glsl */ `
      float t = smoothstep(0.0, uCrownY, vObj.y);
      float n = snoise(vObj * 6.0) * 0.5 + 0.5;
      vec3 c = mix(uRim, uCrown, t * (0.8 + 0.2 * n));
      float cut = smoothstep(uCutY - 0.015, uCutY + 0.015, vObj.y);
      diffuseColor.rgb = mix(c, uCrumb * (0.9 + 0.1 * n), cut);
      float bH = snoise(vObj * 26.0) * 0.5 + snoise(vObj * 60.0) * 0.2;
    `,
    normal: /* glsl */ `
      normal = crustPerturb(-vViewPosition, normal, vec2(dFdx(bH), dFdy(bH)) * 0.25, faceDirection);
    `,
  })
}

/** A sesame seed: pale, slightly waxy. */
export function seedMaterial(): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({ color: '#f6e7c2', roughness: 0.45, clearcoat: 0.3 })
}

// ---------------------------------------------------------------------------
// Lettuce and cheese — flat sheets bent in the vertex shader
// ---------------------------------------------------------------------------

/**
 * A disc that ruffles at the edge. The geometry is a flat ring in the XY plane; the
 * frill is a height field on it, and the normal is taken from that field's slope.
 */
export function lettuceMaterial(): THREE.MeshPhysicalMaterial {
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.45, side: THREE.DoubleSide, clearcoat: 0.4, clearcoatRoughness: 0.3,
  })
  return patch(material, {
    key: 'lettuce',
    uniforms: { uDark: color('#3f8f2a'), uLight: color('#a8d968') },
    common: /* glsl */ `
      uniform vec3 uDark, uLight;
      varying vec3 vObj;
      float ruffle(vec2 p) {
        float r = length(p);
        float a = atan(p.y, p.x);
        float edge = smoothstep(0.62, 1.15, r);
        return (sin(a * 13.0 + snoise(vec3(p * 2.0, 0.0)) * 2.5) * 0.075
              + snoise(vec3(p * 3.0, 1.0)) * 0.04) * edge;
      }
    `,
    displace: /* glsl */ `
      float e = 0.01;
      vec3 P0 = vec3(position.xy, ruffle(position.xy));
      vec3 P1 = vec3(position.xy + vec2(e, 0.0), ruffle(position.xy + vec2(e, 0.0)));
      vec3 P2 = vec3(position.xy + vec2(0.0, e), ruffle(position.xy + vec2(0.0, e)));
      vec3 dPos = P0;
      vec3 dNormal = normalize(cross(P1 - P0, P2 - P0));
      vObj = position;
    `,
    color: /* glsl */ `
      float r = length(vObj.xy);
      float vein = smoothstep(0.92, 1.0, abs(sin(atan(vObj.y, vObj.x) * 13.0)));
      vec3 c = mix(uLight, uDark, smoothstep(0.55, 1.1, r) * 0.7 + vein * 0.2);
      diffuseColor.rgb = c;
    `,
  })
}

/** A slice of cheddar, its corners slumping over the fillet. */
export function cheeseMaterial(): THREE.MeshPhysicalMaterial {
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.32, side: THREE.DoubleSide, clearcoat: 0.5, clearcoatRoughness: 0.2,
  })
  return patch(material, {
    key: 'cheese',
    uniforms: { uCheese: color('#f6a81c') },
    common: /* glsl */ `
      uniform vec3 uCheese;
      varying vec3 vObj;
      float droop(vec2 p) {
        float r = length(p);
        return -pow(max(0.0, r - 0.62), 2.0) * 1.6;
      }
    `,
    displace: /* glsl */ `
      float e = 0.01;
      vec3 P0 = vec3(position.xy, droop(position.xy));
      vec3 P1 = vec3(position.xy + vec2(e, 0.0), droop(position.xy + vec2(e, 0.0)));
      vec3 P2 = vec3(position.xy + vec2(0.0, e), droop(position.xy + vec2(0.0, e)));
      vec3 dPos = P0;
      vec3 dNormal = normalize(cross(P1 - P0, P2 - P0));
      vObj = position;
    `,
    color: /* glsl */ `
      diffuseColor.rgb = uCheese * (0.92 + 0.08 * snoise(vObj * 5.0));
    `,
  })
}

// ---------------------------------------------------------------------------
// Packaging
// ---------------------------------------------------------------------------

/** The fries carton: Crispo red outside, darker inside, a cream band under the lip. */
export function cartonMaterial(): THREE.MeshPhysicalMaterial {
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.5, side: THREE.DoubleSide, clearcoat: 0.25,
  })
  return patch(material, {
    key: 'carton',
    uniforms: { uRed: color('#c8202f'), uCream: color('#f7e6c8'), uBandY: { value: 0.33 } },
    common: /* glsl */ `
      uniform vec3 uRed, uCream;
      uniform float uBandY;
      varying vec3 vObj;
    `,
    displace: /* glsl */ `
      vec3 dPos = position;
      vec3 dNormal = normal;
      vObj = position;
    `,
    color: /* glsl */ `
      float band = smoothstep(0.012, 0.0, abs(vObj.y - uBandY) - 0.055);
      vec3 c = mix(uRed, uCream, band);
      if (!gl_FrontFacing) c = uRed * 0.35;
      diffuseColor.rgb = c;
    `,
  })
}

/** An aluminium can: bare metal at the ends, red lacquer between, a cream wave. */
export function canMaterial(): THREE.MeshPhysicalMaterial {
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.3, metalness: 1, clearcoat: 1, clearcoatRoughness: 0.12,
  })
  return patch(material, {
    key: 'can',
    uniforms: {
      uRed: color('#c8202f'), uCream: color('#f7e6c8'), uSilver: color('#d9d6d0'),
      uBodyMin: { value: -0.8 }, uBodyMax: { value: 0.76 },
    },
    common: /* glsl */ `
      uniform vec3 uRed, uCream, uSilver;
      uniform float uBodyMin, uBodyMax;
      varying vec3 vObj;
      float canBody() { return step(uBodyMin, vObj.y) * step(vObj.y, uBodyMax); }
      float canBand() {
        float a = atan(vObj.z, vObj.x);
        float wave = sin(a * 2.0 + 1.2) * 0.2;
        return smoothstep(0.012, 0.0, abs(vObj.y - (-0.05 + wave)) - 0.085) * canBody();
      }
    `,
    displace: /* glsl */ `
      vec3 dPos = position;
      vec3 dNormal = normal;
      vObj = position;
    `,
    color: /* glsl */ `
      float body = canBody();
      float band = canBand();
      vec3 c = mix(uSilver, uRed, body);
      diffuseColor.rgb = mix(c, uCream, band);
    `,
    roughness: /* glsl */ `
      roughnessFactor = mix(0.22, 0.3, canBody()) + canBand() * 0.2;
    `,
    metalness: /* glsl */ `
      metalnessFactor = mix(1.0, 0.75, canBody()) * (1.0 - canBand() * 0.9);
    `,
  })
}
