import { defineConfig } from 'vite'

/**
 * The site lives in ./site and builds into ./dist, which is exactly where the relay
 * looks for it — so one `node relay/server.mjs` serves the page and the API from the
 * same origin, and the browser never needs CORS.
 *
 * In development the page runs on Vite and /api is proxied to a relay on :8080
 * (`npm run demo` starts one with a pretend till).
 */
export default defineConfig({
  root: 'site',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    // Safari 15 is the oldest with WebGL 2, which three.js needs — plenty of customers'
    // iPhones are a few iOS versions behind.
    target: ['safari15', 'chrome100', 'edge100', 'firefox100'],
    // The splat renderer is one large lazy chunk, loaded only when a capture exists.
    chunkSizeWarningLimit: 3200,
  },
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:8080' },
  },
})
