import { store } from './format'

/**
 * The crunch, synthesised: a few milliseconds of band-passed noise per crackle, a
 * dozen crackles scattered over a tenth of a second. Off until somebody asks for it —
 * a page that makes noise on its own is a page people close.
 */
let ctx: AudioContext | null = null
let noise: AudioBuffer | null = null
let enabled = store.get('crispo:sound', false)

function ensure(): AudioContext | null {
  if (!enabled) return null
  try {
    ctx ??= new AudioContext()
    if (ctx.state === 'suspended') void ctx.resume()
    if (!noise) {
      noise = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate)
      const d = noise.getChannelData(0)
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1
    }
    return ctx
  } catch {
    return null
  }
}

export function soundEnabled(): boolean {
  return enabled
}

export function setSound(on: boolean): void {
  enabled = on
  store.set('crispo:sound', on)
  if (on) crunch(0.6)
}

export function crunch(intensity = 1): void {
  const ac = ensure()
  if (!ac || !noise) return
  const now = ac.currentTime
  const grains = Math.round(9 + intensity * 8)
  for (let i = 0; i < grains; i++) {
    const t = now + Math.random() * 0.13 * intensity + (i === 0 ? 0 : 0.004)
    const src = ac.createBufferSource()
    src.buffer = noise
    const bp = ac.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.value = 1800 + Math.random() * 4200
    bp.Q.value = 1.2 + Math.random() * 2
    const g = ac.createGain()
    const peak = (0.12 + Math.random() * 0.3) * intensity
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(peak, t + 0.002)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.012 + Math.random() * 0.03)
    src.connect(bp).connect(g).connect(ac.destination)
    src.start(t, Math.random() * 0.4, 0.05)
  }
}

export function tick(): void {
  const ac = ensure()
  if (!ac) return
  const o = ac.createOscillator()
  const g = ac.createGain()
  o.type = 'triangle'
  o.frequency.value = 880
  g.gain.setValueAtTime(0.06, ac.currentTime)
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.08)
  o.connect(g).connect(ac.destination)
  o.start()
  o.stop(ac.currentTime + 0.09)
}
