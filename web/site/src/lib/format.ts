let currency = 'ج.م'

export function setCurrency(c: string | undefined): void {
  // The till's default is the ISO code; on a menu the local abbreviation reads better.
  currency = !c || c.toUpperCase() === 'EGP' ? 'ج.م' : c
}

export function num(n: number): string {
  return (Math.round(n * 100) / 100).toLocaleString('en-US', { maximumFractionDigits: 2 })
}

export function money(n: number): string {
  return `${num(n)} ${currency}`
}

export function currencyLabel(): string {
  return currency
}

/** Arabic-Indic digits typed on an Arabic keyboard, folded to 0–9. */
export function westernDigits(s: string): string {
  return s
    .replace(/[٠-٩]/g, ch => String(ch.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, ch => String(ch.charCodeAt(0) - 0x06f0))
}

/** Same rule as the relay's normalizePhone, so a bad number is caught before sending. */
export function normalizePhone(raw: string): string | null {
  let s = westernDigits(raw).replace(/[\s\-().]/g, '')
  if (s.startsWith('+20')) s = '0' + s.slice(3)
  else if (s.startsWith('0020')) s = '0' + s.slice(4)
  else if (/^20\d{10}$/.test(s)) s = '0' + s.slice(2)
  if (/^01[0125]\d{8}$/.test(s)) return s
  if (/^\+?\d{8,15}$/.test(s)) return s
  return null
}

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!)
}

export const store = {
  get<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : fallback
    } catch {
      return fallback
    }
  },
  set(key: string, value: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch { /* private window — it still works for this visit */ }
  },
  remove(key: string): void {
    try { localStorage.removeItem(key) } catch { /* nothing to do */ }
  },
}
