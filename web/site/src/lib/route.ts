/**
 * Where a tracking link lives. On the real site it is a path, `/track/<id>`, which the
 * relay serves as the page. A static host (the demo build) has no server to do that,
 * so there it is a fragment, `#track-<id>`.
 */
const HASH = import.meta.env.VITE_HASH_ROUTES === '1'
const ID = '([A-Za-z0-9_-]{10,40})'

export function trackIdFromLocation(): string | null {
  const m = HASH ? new RegExp(`^#track-${ID}$`).exec(location.hash) : new RegExp(`^/track/${ID}`).exec(location.pathname)
  return m ? m[1] : null
}

export function pushTrack(id: string): void {
  if (trackIdFromLocation() === id) return
  if (HASH) history.pushState({ track: id }, '', `#track-${id}`)
  else history.pushState({ track: id }, '', `/track/${id}`)
}

export function pushHome(): void {
  if (!trackIdFromLocation()) return
  if (HASH) history.pushState({}, '', location.pathname + location.search)
  else history.pushState({}, '', '/')
}

/** Assets the page fetches itself, relative to wherever the site is served from. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`
}

export const DEMO = import.meta.env.VITE_DEMO === '1'
