# Making the chicken look real

The drumstick the site ships with is drawn by code — noise in a shader. It is good
for a drawing, and it will never pass for food, because the things that make fried
chicken read as real (the exact shape of every crumb, the oil sitting in the cracks,
the way light glints and moves as it turns) are not things anybody can invent
convincingly. They have to be **captured from a real piece**.

The site is built to take a capture: put the file in `site/public/models/`, list it in
`manifest.json`, deploy, and it replaces the drawn object everywhere — hero, story,
menu. Nothing else changes.

## Which kind of capture

| | Gaussian splat — **recommended** | Photogrammetry mesh |
|---|---|---|
| Looks | Photographic. Captures the oil sheen and the fuzz of the crust exactly as it was. | Very good with good photos; oil reads flatter. |
| Files | `.spz` `.ply` `.splat` `.ksplat` `.sog` | `.glb` / `.gltf` |
| Lighting | Baked in — it looks how it was lit when you shot it. | Re-lit on the page (studio HDRI + Crispo's red rim). |
| Size | 3–15 MB after clean-up | 2–8 MB after optimising |

Splats are what makes food look real on the web right now. Go with a splat unless you
already have a mesh.

## Shooting it (20 minutes, a phone)

Any app that exports **3D Gaussian Splatting** works — for example Scaniverse, Polycam,
KIRI Engine or Luma on a phone, or Postshot on a PC from a video. Check the app's
current export options; what matters is that it gives you one of the file types above.

**The piece**
- Fry it fresh and shoot within a few minutes, while the oil still glistens. Pick the
  best-looking piece in the batch — this is the hero of the brand.
- Lift it off the surface (on a skewer or a small upturned cup hidden under it) so the
  underside is captured too. The site shows it floating and turning.

**The light**
- Soft and even: a big window on a cloudy day, or two lamps through baking paper.
- No flash, no direct sun, no moving shadows. Whatever light you use is baked into a
  splat — warm and soft is what you want on the dark site.

**The capture**
- Lock focus and exposure in the app if it lets you.
- Walk slowly around it three times: once low, once level, once from above. Keep the
  chicken filling about half the frame. Do not move the chicken while shooting.
- 60–90 seconds of slow video, or 150–300 photos, is plenty.

**For the ritual section** a single fried mesh is enough: the site cooks that same
piece backwards and forwards (spice rub → flour → golden) by regrading its own texture.
For a ritual that is captured at every step, shoot three pieces — raw marinated,
floured and fried — and list all three; with all three present they are used instead.

The burger, fries and can can be captured the same way and slot in the same way.

## Cleaning it up

Captures include the table and the room. Open the file in **SuperSplat**
(https://playcanvas.com/supersplat/editor — free, runs in the browser):

1. Select and delete everything that is not chicken.
2. Rotate it so the bone points up (or note the rotation for the manifest).
3. Export compressed (`.sog` or compressed `.ply`). Aim for under ~10 MB.

For a mesh — a scan, a marketplace download, an AI-generated model — run it through
the site's own tool rather than using it as it comes:

```bash
npm run model -- path/to/scene.gltf site/public/models --name drumstick
```

It welds and simplifies the mesh (a desktop and a phone version), stands it upright,
**bakes ambient occlusion from the geometry** so the cracks between crumbs go dark,
regrades the colour towards fried golden-brown, derives the normal and roughness maps
most models lack, adds a clearcoat for the oil (masked to the peaks), and compresses
everything. That is the difference between "a 3D model of chicken" and something that
reads as food. The drumstick the site ships was made this way from a CC BY model —
see `site/public/models/CREDITS.txt`.

## Putting it on the site

```
web/site/public/models/
  manifest.json
  drumstick.sog              ← fried — the hero
  drumstick-raw.sog          ← optional, ritual step 1
  drumstick-dredged.sog      ← optional, ritual step 2
  burger.glb                 ← optional
```

`manifest.json` (it ships empty — `{}` — which means "no captures, use the drawings"):

```json
{
  "drumstick":         { "file": "drumstick.sog", "rotate": [180, 0, 0] },
  "drumstick-raw":     { "file": "drumstick-raw.sog", "rotate": [180, 0, 0] },
  "drumstick-dredged": { "file": "drumstick-dredged.sog", "rotate": [180, 0, 0] },
  "burger":            { "file": "burger.glb", "oil": 0.4 }
}
```

| Field | |
|---|---|
| `file` | Relative to `/models/`, or a full URL (then add that origin to `ASSET_ORIGINS` on the relay). |
| `rotate` | Degrees `[x, y, z]`. Many apps export splats upside down — `[180, 0, 0]` fixes that. |
| `scale` | Multiplies the automatic fit (it is already sized to the layout). |
| `offset` | `[x, y, z]` nudge after fitting, in fitted units. |
| `tilt` / `spin` | Resting tilt (radians) and turntable speed (radians/second). |
| `fileLite` | A lighter file for phones (the tool above writes `<name>-lite.glb`). |
| `oil` | Meshes only: 0–1 clearcoat for a glossier crust (the tool already adds one). |
| `cook` | Drumstick meshes only: `false` stops the ritual cooking it by shader. |

Rebuild and deploy (`npm run build`, or rebuild the Docker image). Try it locally first
with `npm run build && npm run demo` and open http://localhost:8080.

The splat renderer (Spark, ~0.9 MB gzipped) is only downloaded when a manifest lists a
splat; without captures the site stays as light as it is now. The loading screen waits
up to 9 seconds for the hero capture so the page opens on the real chicken, not on the
drawing swapping out.
