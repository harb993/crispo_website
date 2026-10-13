/**
 * Fetch a binary asset — or its base64 text twin.
 *
 * Some static hosts serve only a fixed list of web file types, and a 3D model or an
 * EXR is on none of them. The demo build therefore ships those as base64 in a `.txt`
 * file; anything ending in `.txt` is decoded here. Same bytes either way, and no
 * blob: or data: fetch is involved, which a strict host may also refuse.
 */
export async function fetchBinary(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${url}: ${res.status}`)
  if (!/\.txt(\?.*)?$/i.test(url)) return res.arrayBuffer()
  const text = (await res.text()).replace(/\s+/g, '')
  const bin = atob(text)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return bytes.buffer
}
