/**
 * Everything the relay knows about an order: what a valid one looks like, what it
 * costs, and how far along it is.
 *
 * WHO DECIDES THE PRICE
 *
 * The till does. These totals are a QUOTE, computed from the menu the till last
 * published, so the customer sees a real number before they press send. When the
 * cashier accepts the order the till rings it up through its own `createOrder`, which
 * prices every line from its database exactly as it does for a sale at the counter —
 * and sends the final figure back here. If the owner changed a price in the minutes
 * between, the tracking page shows the till's number, not this one.
 *
 * Nothing in this file trusts the browser for money. The browser says what it wants;
 * the prices come from the snapshot.
 */

/**
 * Plain JavaScript with no Node imports, on purpose: the website's demo build runs this
 * same file in the browser, so the demo prices and validates exactly like the relay.
 * Web Crypto's getRandomValues exists in both (Node 20+ and every browser).
 */
function randomBytes(n) {
  const b = new Uint8Array(n)
  globalThis.crypto.getRandomValues(b)
  return b
}

function base64url(bytes) {
  let s = ''
  for (const x of bytes) s += String.fromCharCode(x)
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

/** Every state an order can be in, in the order it normally moves through them. */
export const STATUSES = [
  'pending',     // with us, the till has not collected it yet
  'received',    // on the till's screen, waiting for a cashier
  'preparing',   // accepted — it has an invoice number and is in the kitchen
  'ready',       // cooked and bagged
  'on_the_way',  // with a driver
  'delivered',
  'collected',   // takeaway, picked up at the counter
  'rejected',    // the restaurant declined it, with a reason
  'cancelled',   // accepted, then voided at the till
  'expired',     // the till never collected it — see PENDING_TTL_MS
]

export const FINAL_STATUSES = new Set(['delivered', 'collected', 'rejected', 'cancelled', 'expired'])

const ORDER_TYPES = new Set(['delivery', 'takeaway'])
const PAYMENT_TYPES = new Set(['cash', 'card'])

export const LIMITS = {
  lines: 30,
  qty: 50,
  name: 60,
  address: 300,
  notes: 300,
  clientRef: 64,
}

export function round2(n) {
  return Math.round((Number(n) + Number.EPSILON) * 100) / 100
}

/** Arabic-Indic and Persian digits typed on an Arabic keyboard, as plain 0–9. */
export function normalizeDigits(raw) {
  return String(raw ?? '')
    .replace(/[٠-٩]/g, ch => String(ch.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, ch => String(ch.charCodeAt(0) - 0x06f0))
}

/**
 * A phone number in the form the till's customer book keys on, or null.
 *
 * The till groups a customer's history by the number exactly as typed at the
 * counter — 01012345678 — so a web order arriving as "+20 101 234 5678" would open a
 * second, empty record for somebody who has ordered fifty times. Everything is folded
 * to the local form first.
 */
export function normalizePhone(raw) {
  let s = normalizeDigits(raw).replace(/[\s\-().]/g, '')
  if (s.startsWith('+20')) s = '0' + s.slice(3)
  else if (s.startsWith('0020')) s = '0' + s.slice(4)
  else if (/^20\d{10}$/.test(s)) s = '0' + s.slice(2)
  if (/^01[0125]\d{8}$/.test(s)) return s
  // Landlines and numbers from abroad: digits only, a sane length.
  if (/^\+?\d{8,15}$/.test(s)) return s
  return null
}

/** Free text from a stranger: no control characters, no runs of whitespace, bounded. */
export function cleanText(raw, max) {
  return String(raw ?? '')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f\u007f​-‏‪-‮⁦-⁩]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max)
}

/** 128 random bits. The tracking link is the only key to an order, so it must not be guessable. */
export function newOrderId() {
  return base64url(randomBytes(16))
}

/**
 * The short code read out over the phone — "W-4821". Not a secret and not unique
 * forever, only among the orders still on the go, which is all anyone ever asks about.
 */
export function newOrderCode(isTaken) {
  for (let i = 0; i < 50; i++) {
    const code = `W-${String(1000 + Math.floor(Math.random() * 9000))}`
    if (!isTaken(code)) return code
  }
  return `W-${[...randomBytes(3)].map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase()}`
}

function fail(code, message, field) {
  return { ok: false, code, message, ...(field ? { field } : {}) }
}

/**
 * Check an order from the website against the menu the till published.
 *
 * Every id the browser sends is looked up, and every variant option must belong to a
 * question that item actually asks — otherwise a page edited in devtools could put a
 * "large" from a cheap item onto an expensive one. An item that asks a question must
 * have it answered, once: the till would stop and ask the cashier otherwise.
 */
export function validateOrder(body, snapshot) {
  if (!snapshot) return fail('closed', 'المطعم لم ينشر قائمة الطعام بعد')
  if (!body || typeof body !== 'object') return fail('bad_request', 'طلب غير صالح')

  const type = String(body.type ?? '')
  if (!ORDER_TYPES.has(type)) return fail('bad_request', 'نوع الطلب غير معروف', 'type')
  if (type === 'takeaway' && snapshot.takeaway === false) {
    return fail('bad_request', 'الاستلام من الفرع غير متاح حالياً', 'type')
  }

  const payment = String(body.payment ?? 'cash')
  if (!PAYMENT_TYPES.has(payment)) return fail('bad_request', 'طريقة الدفع غير معروفة', 'payment')

  const c = body.customer ?? {}
  const name = cleanText(c.name, LIMITS.name)
  if (name.length < 2) return fail('invalid', 'اكتب اسمك', 'name')

  const phone = normalizePhone(c.phone)
  if (!phone) return fail('invalid', 'رقم الموبايل غير صحيح', 'phone')

  let address = ''
  let area = null
  if (type === 'delivery') {
    address = cleanText(c.address, LIMITS.address)
    if (address.length < 5) return fail('invalid', 'اكتب العنوان بالتفصيل', 'address')
    area = (snapshot.areas ?? []).find(a => a.id === Number(c.areaId)) ?? null
    if (!area) return fail('invalid', 'اختر منطقة التوصيل', 'areaId')
  }

  const notes = cleanText(body.notes, LIMITS.notes)

  const rawLines = Array.isArray(body.lines) ? body.lines : []
  if (rawLines.length === 0) return fail('invalid', 'السلة فارغة', 'lines')
  if (rawLines.length > LIMITS.lines) return fail('invalid', 'عدد الأصناف أكبر من المسموح', 'lines')

  const itemsById = new Map((snapshot.items ?? []).map(i => [i.id, i]))
  const lines = []
  for (const raw of rawLines) {
    const item = itemsById.get(Number(raw?.itemId))
    if (!item) return fail('menu_changed', 'أحد الأصناف لم يعد متاحاً — حدّث الصفحة', 'lines')

    const qty = Number(raw?.qty)
    if (!Number.isInteger(qty) || qty < 1 || qty > LIMITS.qty) {
      return fail('invalid', 'الكمية غير صحيحة', 'lines')
    }

    const wanted = new Set((Array.isArray(raw?.optionIds) ? raw.optionIds : []).map(Number))
    const chosen = []
    for (const group of item.variants ?? []) {
      const picks = group.options.filter(o => wanted.has(o.id))
      if (picks.length !== 1) {
        return fail('menu_changed', `اختر «${group.name}» لـ ${item.name}`, 'lines')
      }
      chosen.push(picks[0])
      wanted.delete(picks[0].id)
    }
    // Anything left over belongs to some other item, or to nothing at all.
    if (wanted.size > 0) return fail('menu_changed', 'اختيارات أحد الأصناف تغيرت — حدّث الصفحة', 'lines')

    lines.push({ item, qty, options: chosen })
  }

  const clientRef = cleanText(body.clientRef, LIMITS.clientRef) || null

  return {
    ok: true,
    value: { type, payment, name, phone, address, area, notes, lines, clientRef },
  }
}

/**
 * The quote. Same arithmetic as the till's createOrder for these two order types:
 * line = max(0, base + deltas), no VAT (the till charges VAT on dine-in only), the
 * delivery fee from the area record.
 */
export function priceOrder(value) {
  const lines = value.lines.map(({ item, qty, options }) => {
    const unitPrice = round2(Math.max(0, item.price + options.reduce((s, o) => s + (Number(o.delta) || 0), 0)))
    return {
      itemId: item.id,
      name: item.name,
      optionIds: options.map(o => o.id),
      label: options.length ? options.map(o => o.name).join(' · ') : null,
      qty,
      unitPrice,
      total: round2(unitPrice * qty),
    }
  })
  const subtotal = round2(lines.reduce((s, l) => s + l.total, 0))
  const deliveryFee = value.type === 'delivery' ? round2(value.area?.fee ?? 0) : 0
  return { lines, subtotal, deliveryFee, total: round2(subtotal + deliveryFee) }
}

/** Build the stored record for a validated order. */
export function buildOrder(value, { id, code, now }) {
  const quote = priceOrder(value)
  const at = new Date(now).toISOString()
  return {
    id,
    code,
    clientRef: value.clientRef,
    createdAt: at,
    updatedAt: at,
    status: 'pending',
    timeline: [{ status: 'pending', at }],
    type: value.type,
    payment: value.payment,
    customer: {
      name: value.name,
      phone: value.phone,
      address: value.address || null,
      areaId: value.area?.id ?? null,
      areaName: value.area?.name ?? null,
    },
    notes: value.notes || null,
    lines: quote.lines,
    quote: { subtotal: quote.subtotal, deliveryFee: quote.deliveryFee, total: quote.total },
    final: null,
    reason: null,
    etaMinutes: null,
  }
}

/**
 * Move an order on, as the till reports it. The till is the authority on where an
 * order is — it is the one with the kitchen and the drivers — with one exception: a
 * finished order stays finished. A late, re-sent "preparing" arriving after
 * "delivered" must not reopen it on the customer's screen.
 *
 * 'expired' is the one final state that is only the relay's GUESS ("the till never
 * said it had this"). If the till did collect it — its acknowledgement was lost while
 * the connection was down — and then accepted it, the customer must be told it is
 * being cooked, not that nobody answered. So the till's word overrides an expiry.
 */
export function applyStatus(order, update, now) {
  const status = String(update?.status ?? '')
  if (!STATUSES.includes(status) || status === 'pending') return false
  if (FINAL_STATUSES.has(order.status) && order.status !== status && order.status !== 'expired') return false
  if (order.status === 'expired' && status === 'expired') return false

  let changed = false
  if (order.status !== status) {
    order.status = status
    order.timeline.push({ status, at: new Date(now).toISOString() })
    changed = true
  }

  const hasTotal = update.total !== null && update.total !== undefined && Number.isFinite(Number(update.total))
  if (update.invoiceNumber || hasTotal) {
    const final = {
      invoiceNumber: update.invoiceNumber ? cleanText(update.invoiceNumber, 20) : order.final?.invoiceNumber ?? null,
      total: hasTotal ? round2(update.total) : order.final?.total ?? null,
    }
    if (JSON.stringify(final) !== JSON.stringify(order.final)) {
      order.final = final
      changed = true
    }
  }
  if (update.reason !== undefined) {
    const reason = update.reason ? cleanText(update.reason, 200) : null
    if (reason !== order.reason) { order.reason = reason; changed = true }
  }
  if (update.etaMinutes !== undefined) {
    const eta = Number(update.etaMinutes)
    const next = Number.isFinite(eta) && eta > 0 ? Math.min(240, Math.round(eta)) : null
    if (next !== order.etaMinutes) { order.etaMinutes = next; changed = true }
  }
  if (changed) order.updatedAt = new Date(now).toISOString()
  return changed
}

/**
 * What the tracking page is allowed to see.
 *
 * The link is a capability — whoever holds it can watch the order — so it carries no
 * more than the customer needs to recognise their own order: a first name, the area,
 * the food. Never the phone number or the street address.
 */
export function publicView(order) {
  return {
    id: order.id,
    code: order.code,
    status: order.status,
    type: order.type,
    payment: order.payment,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
    timeline: order.timeline,
    firstName: order.customer.name.split(' ')[0],
    areaName: order.customer.areaName,
    lines: order.lines.map(l => ({ name: l.name, label: l.label, qty: l.qty, unitPrice: l.unitPrice, total: l.total })),
    quote: order.quote,
    final: order.final,
    reason: order.reason,
    etaMinutes: order.etaMinutes,
  }
}

/** What the till collects: everything it needs to ring the order up. */
export function tillView(order) {
  return {
    id: order.id,
    code: order.code,
    createdAt: order.createdAt,
    type: order.type,
    payment: order.payment,
    customer: order.customer,
    notes: order.notes,
    lines: order.lines,
    quote: order.quote,
  }
}

/**
 * The shape the till publishes, checked before it replaces the menu everyone sees.
 * A broken snapshot would empty the website mid-service, so a bad one is refused and
 * the last good one stays up.
 */
export function validateSnapshot(raw) {
  if (!raw || typeof raw !== 'object') return null
  const num = v => (Number.isFinite(Number(v)) ? Number(v) : null)
  const text = (v, max = 200) => cleanText(v, max)

  const categories = Array.isArray(raw.categories) ? raw.categories : null
  const items = Array.isArray(raw.items) ? raw.items : null
  const areas = Array.isArray(raw.areas) ? raw.areas : []
  if (!categories || !items) return null
  if (categories.length > 200 || items.length > 2000 || areas.length > 500) return null

  const out = {
    version: 1,
    business: {
      name: text(raw.business?.name, 80) || 'Crispo',
      phone: text(raw.business?.phone, 40),
      address: text(raw.business?.address, 200),
      currency: text(raw.business?.currency, 12) || 'EGP',
    },
    eta: {
      delivery: Math.max(5, Math.min(240, num(raw.eta?.delivery) ?? 45)),
      takeaway: Math.max(5, Math.min(240, num(raw.eta?.takeaway) ?? 20)),
    },
    takeaway: raw.takeaway !== false,
    categories: [],
    items: [],
    areas: [],
  }

  for (const c of categories) {
    const id = num(c?.id)
    if (id === null) return null
    out.categories.push({ id, name: text(c.name, 80), order: num(c.order) ?? 0 })
  }
  for (const i of items) {
    const id = num(i?.id)
    const price = num(i?.price)
    if (id === null || price === null || price < 0) return null
    const variants = []
    for (const g of Array.isArray(i.variants) ? i.variants : []) {
      const gid = num(g?.id)
      if (gid === null) return null
      const options = []
      for (const o of Array.isArray(g.options) ? g.options : []) {
        const oid = num(o?.id)
        if (oid === null) return null
        options.push({ id: oid, name: text(o.name, 60), delta: num(o.delta) ?? 0 })
      }
      if (options.length) variants.push({ id: gid, name: text(g.name, 60), options })
    }
    out.items.push({
      id,
      categoryId: num(i.categoryId),
      name: text(i.name, 120),
      description: text(i.description, 400) || null,
      price: round2(price),
      variants,
    })
  }
  for (const a of areas) {
    const id = num(a?.id)
    const fee = num(a?.fee)
    if (id === null || fee === null || fee < 0) return null
    out.areas.push({ id, name: text(a.name, 80), fee: round2(fee) })
  }
  return out
}
