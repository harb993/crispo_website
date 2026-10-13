const el = () => document.querySelector<HTMLElement>('.toast')!
let timer = 0

export function toast(message: string, ms = 2600): void {
  const t = el()
  t.textContent = message
  t.classList.add('is-on')
  clearTimeout(timer)
  timer = window.setTimeout(() => t.classList.remove('is-on'), ms)
}
