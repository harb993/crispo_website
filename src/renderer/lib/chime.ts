/**
 * The web-order bell. Synthesised rather than a sound file, so there is nothing to
 * ship or load, and loud enough to cut through a fryer: two rising tones, twice.
 *
 * A till's window is never "interacted with" in the browser sense before the first
 * order of the day arrives, so the audio context may start suspended — resume() is
 * asked for every time, and a chime that cannot play simply does not.
 */
let ctx: AudioContext | null = null

export function chime(): void {
  try {
    ctx ??= new AudioContext()
    if (ctx.state === 'suspended') void ctx.resume()
    const now = ctx.currentTime
    const notes = [[880, 0], [1320, 0.16], [880, 0.5], [1320, 0.66]] as const
    for (const [freq, at] of notes) {
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      o.type = 'sine'
      o.frequency.value = freq
      g.gain.setValueAtTime(0, now + at)
      g.gain.linearRampToValueAtTime(0.32, now + at + 0.015)
      g.gain.exponentialRampToValueAtTime(0.0001, now + at + 0.32)
      o.connect(g).connect(ctx.destination)
      o.start(now + at)
      o.stop(now + at + 0.34)
    }
  } catch {
    /* no audio device — the banner still shows */
  }
}
