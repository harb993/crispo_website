# Crispo — the website, and how its orders reach the till

```
 customer's phone ──► website ──► RELAY (this folder, on the internet) ◄── till PC dials out every 5 s
                         ▲                 │                                    │
                         └── live tracking ┘          accept ► createOrder ► invoice + kitchen ticket
```

Two things live here:

| | What | Where |
|---|---|---|
| **site** | The WebGL ordering website (Vite + three.js + GSAP). Arabic, RTL. | `site/` |
| **relay** | A tiny zero-dependency Node server: serves the site, takes orders, and is where the till collects them. | `relay/` |

The till side — collecting, the **🌐 طلبات الموقع** screen, the settings tab — is in the POS app
(`src/main/services/webOrderService.ts`, `src/renderer/screens/cashier/WebOrdersScreen.tsx`).
The design is written up in [`../req/10-online-ordering.md`](../req/10-online-ordering.md).

## Making the chicken look real

The hero drumstick is a real 3D model (`site/public/models/`, based on a CC BY 4.0
model by grodan — see `CREDITS.txt`), processed by `npm run model` (AO bake, regrade,
derived maps, compression). The burger, fries and can are still drawn by code until
they get models of their own. To add or replace one — a model, or a Gaussian-splat
capture of your own food — see [`SCANNING.md`](SCANNING.md).

## Run it locally (no restaurant needed)

```bash
cd web
npm install
npm run build        # builds the site into web/dist
npm run demo         # relay on http://localhost:8080 with a pretend till
```

Open http://localhost:8080 — order something and watch the tracking page move through
*received → in the kitchen → ready → with the driver → delivered*. The pretend till
accepts everything on a timer; **never** run `--demo` on the real server.

For working on the site with hot reload, keep `npm run demo` running and in a second
terminal `npm run dev` (Vite on :5173, `/api` proxied to the relay).

To try it on a phone without running anything, build the **static demo** — the same
site with a pretend kitchen running in the browser (orders never leave it), clearly
labelled تجريبي, for any static host:

```bash
npm run build:demo   # → dist-demo/ (relative paths, #track-<id> links, no WebAssembly)
npm run build:pages  # → ../docs/, for GitHub Pages
```

The repo carries a built copy in `docs/` so GitHub Pages can serve it with no workflow:
**Settings → Pages → Deploy from a branch → this branch, `/docs`**. It then lives at
`https://<user>.github.io/<repo>/`. Run `npm run build:pages` and commit `docs/` after
changing the site, or the link keeps showing the old version.

```bash
npm test             # relay tests (pricing, tampering, idempotency, auth, expiry)
npm run typecheck    # the site's TypeScript
```

## Deploy

Anything that runs a Node 20+ process or a Docker container works. One container serves
the website **and** the API from the same origin.

```bash
docker build -t crispo-web .
docker run -d --restart=always -p 8080:8080 \
  -v crispo-data:/data \
  -e RELAY_TILL_KEY="$(openssl rand -hex 24)" \
  -e TRUST_PROXY=1 \
  crispo-web
```

Put HTTPS in front (a platform does this for you; on a VPS, Caddy is two lines:
`order.crispo.com { reverse_proxy localhost:8080 }`). The till refuses a plain-HTTP relay on
the internet, because its key travels in a request header.

Environment variables — see [`.env.example`](.env.example):

| Variable | |
|---|---|
| `RELAY_TILL_KEY` | **Required.** The secret the till uses. Same value goes in the POS settings. |
| `PORT` | Default 8080. |
| `RELAY_DATA_DIR` | Where `relay.json` lives. Mount a volume — it holds orders the till has not collected yet. |
| `TRUST_PROXY` | `1` behind a reverse proxy, so rate limits see the customer's IP. |
| `ALLOWED_ORIGINS` | Only if the site is hosted elsewhere (build it with `VITE_API_BASE=https://relay…`). |
| `ASSET_ORIGINS` | Only if the food captures are hosted elsewhere (a CDN). |

## Connect the till

On the till PC, as the owner: **الإعدادات ← 🌐 الطلب أونلاين**

1. **عنوان السيرفر** — `https://order.crispo.com`
2. **مفتاح الربط** — the same `RELAY_TILL_KEY` (or press 🎲 to make one, then put it on the server)
3. **▶️ تفعيل** then **🔌 اختبار الاتصال**

Within a few seconds the website shows the till's real menu, prices, variant choices and
delivery areas. From then on:

- a web order rings a bell at the till and appears in **🌐 طلبات الموقع**;
- **✅ قبول وطباعة** rings it up as a normal invoice (same prices, VAT rules, stock and
  numbering as the counter) and prints the kitchen ticket;
- the delivery board, voids and the takeaway buttons drive what the customer sees;
- **⏸️ إيقاف طلبات الموقع** pauses the website when the kitchen is slammed.

On a two-till setup only the **master** talks to the relay; any till can accept.

## What the relay guarantees

- **Prices come from the till.** The browser sends item and option ids only; the relay
  quotes from the published menu and rejects options borrowed from another dish. The
  till re-prices on accept and the customer is shown the till's figure.
- **No double orders.** Every checkout carries an idempotency key; the till files each
  order once even if an acknowledgement is lost.
- **Orders only while someone can answer.** The website takes orders only while the till
  is checking in, has an open shift, and has not paused. An order the till never collects
  expires after 10 minutes and the customer is told to call.
- **Tracking links leak nothing.** A 128-bit random id; the page shows a first name, the
  area and the food — never the phone number or address.
- **Short memory.** Orders are purged after 14 days. The books live on the till.
