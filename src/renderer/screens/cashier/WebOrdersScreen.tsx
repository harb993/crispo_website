import React, { useCallback, useEffect, useState } from 'react'
import type { WebOrder, WebPublicStatus, WebSyncStatus } from '../../../shared/types'
import { useAuthStore, useSettingsStore } from '../../state/stores'

/**
 * طلبات الموقع — the website's orders, waiting at the till.
 *
 * Built for the moment the bell goes: the new orders are at the top, as large as the
 * screen allows, with the two things a cashier does next — accept, or say no and why.
 * Accepting rings the order up exactly as if it had been taken at the counter, so from
 * that point a delivery order lives on the delivery board like any other; this screen
 * only keeps it in view so nobody has to go looking.
 *
 * The customer is watching their tracking page while this happens. Every button here
 * changes what they see within a few seconds.
 */

const STATUS: Record<WebPublicStatus, { label: string; cls: string }> = {
  pending: { label: 'في الطريق للكاشير', cls: 'badge-info' },
  received: { label: 'بانتظار القبول', cls: 'badge-warning' },
  preparing: { label: 'في المطبخ', cls: 'badge-warning' },
  ready: { label: 'جاهز', cls: 'badge-info' },
  on_the_way: { label: 'مع السائق', cls: 'badge-info' },
  delivered: { label: 'تم التسليم', cls: 'badge-success' },
  collected: { label: 'تم الاستلام', cls: 'badge-success' },
  rejected: { label: 'مرفوض', cls: 'badge-danger' },
  cancelled: { label: 'ملغي', cls: 'badge-danger' },
  expired: { label: 'منتهي', cls: 'badge-danger' },
}

const REASONS = [
  'المطعم زحمة جداً دلوقتي',
  'صنف من الطلب خلص',
  'العنوان خارج منطقة التوصيل',
  'مقدرناش نوصل للعميل على التليفون',
]

/** A touch target, not a mouse target. */
const TOUCH: React.CSSProperties = { padding: '12px 18px', fontSize: 15, fontWeight: 800, minHeight: 48 }

function ago(stamp: string): string {
  const t = new Date(stamp.replace(' ', 'T')).getTime()
  const min = Math.max(0, Math.round((Date.now() - t) / 60000))
  if (min < 1) return 'الآن'
  if (min < 60) return `من ${min} دقيقة`
  return `من ${Math.floor(min / 60)} ساعة`
}

export default function WebOrdersScreen() {
  const user = useAuthStore(s => s.user)
  const currency = useSettingsStore(s => s.settings.currency_symbol) || 'ج.م'
  const money = (n: number | null | undefined) => `${(Number(n) || 0).toFixed(2)} ${currency}`
  const canAct = user?.role === 'cashier' || user?.role === 'owner'

  const [orders, setOrders] = useState<WebOrder[]>([])
  const [status, setStatus] = useState<WebSyncStatus | null>(null)
  const [showDone, setShowDone] = useState(false)
  const [busy, setBusy] = useState<number | null>(null)
  const [rejecting, setRejecting] = useState<WebOrder | null>(null)
  const [reason, setReason] = useState('')
  const [toast, setToast] = useState<{ msg: string; type: string } | null>(null)
  const [, setNow] = useState(0)

  const showToast = (msg: string, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
  }

  const load = useCallback(async () => {
    const [list, st] = await Promise.all([
      window.api.listWebOrders(showDone ? 'recent' : 'active'),
      window.api.getWebStatus(),
    ])
    if (list.success) setOrders(list.data)
    if (st.success) setStatus(st.data)
  }, [showDone])

  useEffect(() => {
    void load()
    const offWeb = window.api.onWebOrdersChanged?.(() => { void load() })
    // The delivery board moves accepted orders on; follow it.
    const offOrders = window.api.onOrdersChanged?.(() => { void load() })
    const poll = setInterval(() => { void load() }, 10_000)
    const clock = setInterval(() => setNow(n => n + 1), 30_000)
    return () => { offWeb?.(); offOrders?.(); clearInterval(poll); clearInterval(clock) }
  }, [load])

  const accept = async (o: WebOrder) => {
    setBusy(o.web_order_id)
    const res = await window.api.acceptWebOrder(o.web_order_id)
    setBusy(null)
    if (res.success) {
      const r = res.data.result
      showToast(`تم قبول ${o.code} — فاتورة ${r.invoiceNumber} · ${money(r.totalAmount)}`)
      if (Math.abs(r.totalAmount - o.quoted_total) > 0.009) {
        setTimeout(() => showToast(
          `تنبيه: إجمالي الفاتورة ${money(r.totalAmount)} مختلف عن سعر الموقع ${money(o.quoted_total)} — العميل هيشوف السعر الجديد`,
          'warning',
        ), 4100)
      }
      void load()
    } else {
      showToast(res.error || 'تعذر قبول الطلب', 'error')
    }
  }

  const reject = async () => {
    if (!rejecting) return
    const why = reason.trim()
    if (!why) return
    setBusy(rejecting.web_order_id)
    const res = await window.api.rejectWebOrder(rejecting.web_order_id, why)
    setBusy(null)
    if (res.success) {
      showToast(`تم رفض ${rejecting.code} — العميل هيشوف السبب`)
      setRejecting(null)
      setReason('')
      void load()
    } else {
      showToast(res.error || 'تعذر رفض الطلب', 'error')
    }
  }

  const stage = async (o: WebOrder, s: 'ready' | 'collected') => {
    setBusy(o.web_order_id)
    const res = await window.api.setWebOrderStage(o.web_order_id, s)
    setBusy(null)
    if (res.success) void load()
    else showToast(res.error || 'تعذر تحديث الطلب', 'error')
  }

  const toggleAccepting = async () => {
    if (!status) return
    const res = await window.api.setWebAccepting(!status.accepting)
    if (res.success) {
      setStatus(res.data)
      showToast(res.data.accepting ? 'الموقع رجع يستقبل طلبات' : 'وقفنا استقبال طلبات الموقع — الطلبات الحالية زي ما هي', res.data.accepting ? 'success' : 'warning')
    } else {
      showToast(res.error || 'تعذر التغيير', 'error')
    }
  }

  const fresh = orders.filter(o => o.status === 'new')
  const rest = orders.filter(o => o.status !== 'new')

  return (
    <div className="animate-fade" dir="rtl" style={{ paddingBottom: 40 }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">🌐 طلبات الموقع</h1>
          <p className="page-subtitle">الطلبات اللي جاية من موقع المطعم — اقبلها تتسجل فاتورة وتتطبع للمطبخ على طول</p>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <ConnectionPill status={status} />
          {status?.enabled && canAct && (
            <button
              className={`btn ${status.accepting ? 'btn-secondary' : 'btn-success'}`}
              style={TOUCH}
              onClick={toggleAccepting}
              title={status.accepting ? 'العملاء مش هيقدروا يطلبوا لحد ما ترجّعه' : 'الموقع يرجع ياخد طلبات'}
            >
              {status.accepting ? '⏸️ إيقاف طلبات الموقع' : '▶️ استئناف طلبات الموقع'}
            </button>
          )}
        </div>
      </div>

      {status && !status.enabled && (
        <div className="card" style={{ marginBottom: 20, borderRight: '4px solid var(--warning)' }}>
          <b>الطلب أونلاين مش مفعّل على الجهاز ده.</b>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 6, lineHeight: 1.9 }}>
            المدير يفعّله من <b>الإعدادات ← 🌐 الطلب أونلاين</b>: عنوان السيرفر ومفتاح الربط. بعدها
            المنيو بيتنشر على الموقع لوحده، والطلبات بتظهر هنا مع جرس.
          </p>
        </div>
      )}
      {status?.skipped === 'node' && (
        <div className="card" style={{ marginBottom: 20 }}>
          الجهاز الرئيسي هو اللي بيستلم طلبات الموقع — الطلبات بتظهر هنا برضه، وتقدر تقبلها من الجهاز ده.
        </div>
      )}
      {status?.enabled && !status.accepting && (
        <div style={{
          background: 'var(--warning-bg)', borderRight: '4px solid var(--warning)', borderRadius: 'var(--radius-sm)',
          padding: '12px 16px', marginBottom: 18, fontWeight: 700,
        }}>
          ⏸️ استقبال طلبات الموقع متوقف — العملاء شايفين «الطلبات متوقفة مؤقتاً».
        </div>
      )}

      {/* ---- New: the reason this screen exists ---- */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>طلبات جديدة</h2>
        {fresh.length > 0 && <span className="badge badge-danger" style={{ fontSize: 13 }}>{fresh.length}</span>}
      </div>
      {fresh.length === 0 && (
        <div className="card" style={{ textAlign: 'center', padding: 34, color: 'var(--text-muted)', marginBottom: 26 }}>
          مفيش طلبات مستنية — أول ما طلب يوصل هتسمع الجرس.
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 16, marginBottom: 30 }}>
        {fresh.map(o => (
          <div key={o.web_order_id} className="card" style={{
            border: '2px solid var(--accent)', boxShadow: 'var(--shadow-glow)', display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
              <div>
                <div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1, direction: 'ltr', textAlign: 'right' }}>{o.code}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6 }}>{ago(o.placed_at)}</div>
              </div>
              <div style={{ display: 'grid', gap: 6, justifyItems: 'end' }}>
                <span className={`badge ${o.order_type === 'delivery' ? 'badge-info' : 'badge-warning'}`} style={{ fontSize: 13 }}>
                  {o.order_type === 'delivery' ? '🛵 توصيل' : '🏃 استلام من الفرع'}
                </span>
                <span className="badge" style={{ fontSize: 12 }}>{o.payment_type === 'card' ? '💳 فيزا عند الاستلام' : '💵 كاش'}</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card-hover)', borderRadius: 'var(--radius-sm)', padding: '10px 12px', lineHeight: 1.9 }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>{o.customer_name}</div>
              <div dir="ltr" style={{ textAlign: 'right', fontWeight: 700 }}>{o.customer_phone}</div>
              {o.order_type === 'delivery' && (
                <div style={{ fontSize: 13 }}>
                  <b>{o.area_name ?? 'منطقة غير معروفة'}</b> — {o.customer_address}
                </div>
              )}
            </div>

            <table style={{ width: '100%', fontSize: 14 }}>
              <tbody>
                {o.lines.map((l, i) => (
                  <tr key={i}>
                    <td style={{ padding: '4px 0', fontWeight: 800, width: 34 }}>{l.qty}×</td>
                    <td style={{ padding: '4px 0' }}>
                      {l.name}
                      {l.label && <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 700 }}>{l.label}</div>}
                    </td>
                    <td style={{ padding: '4px 0', textAlign: 'left', whiteSpace: 'nowrap' }}>{money(l.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {o.notes && (
              <div style={{ background: 'var(--warning-bg)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', fontWeight: 700, fontSize: 14 }}>
                📝 {o.notes}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed var(--border-light)', paddingTop: 10, fontSize: 13 }}>
              <span style={{ color: 'var(--text-muted)' }}>
                {o.order_type === 'delivery' ? `توصيل ${money(o.quoted_fee)} · ` : ''}سعر الموقع
              </span>
              <b style={{ fontSize: 20 }}>{money(o.quoted_total)}</b>
            </div>

            {canAct && (
              <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
                <button className="btn btn-success" style={{ ...TOUCH, flex: 1, fontSize: 17 }}
                  disabled={busy === o.web_order_id} onClick={() => accept(o)}>
                  {busy === o.web_order_id ? '⏳' : '✅ قبول وطباعة'}
                </button>
                <button className="btn btn-danger" style={TOUCH} disabled={busy === o.web_order_id}
                  onClick={() => { setRejecting(o); setReason('') }}>
                  ✕ رفض
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ---- Accepted and still on the go (or, with the box ticked, everything recent) ---- */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, gap: 12, flexWrap: 'wrap' }}>
        <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>{showDone ? 'آخر ٢٤ ساعة' : 'قيد التنفيذ'}</h2>
        <label style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, cursor: 'pointer' }}>
          <input type="checkbox" checked={showDone} onChange={e => setShowDone(e.target.checked)} />
          عرض المنتهية والمرفوضة
        </label>
      </div>
      <div className="card" style={{ padding: 0 }}>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>الطلب</th>
                <th>الفاتورة</th>
                <th>العميل</th>
                <th>النوع</th>
                <th>الإجمالي</th>
                <th>الحالة عند العميل</th>
                <th>إجراء</th>
              </tr>
            </thead>
            <tbody>
              {rest.map(o => {
                const st = STATUS[o.public_status]
                const behind = o.synced_status !== o.public_status
                return (
                  <tr key={o.web_order_id}>
                    <td style={{ fontWeight: 900, direction: 'ltr', textAlign: 'right' }}>
                      {o.code}
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 500, direction: 'rtl' }}>{ago(o.placed_at)}</div>
                    </td>
                    <td>{o.invoice_number ?? '—'}</td>
                    <td>
                      {o.customer_name}
                      <div dir="ltr" style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'right' }}>{o.customer_phone}</div>
                    </td>
                    <td>{o.order_type === 'delivery' ? `🛵 ${o.area_name ?? ''}` : '🏃 استلام'}</td>
                    <td style={{ fontWeight: 800 }}>{money(o.total_amount ?? o.quoted_total)}</td>
                    <td>
                      <span className={`badge ${st.cls}`}>{st.label}</span>
                      {o.reject_reason && <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{o.reject_reason}</div>}
                      {behind && <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>⏳ بيتبعت للموقع…</div>}
                    </td>
                    <td>
                      {canAct && o.order_type === 'takeaway' && o.status === 'accepted' && o.public_status === 'preparing' && (
                        <button className="btn btn-primary btn-sm" disabled={busy === o.web_order_id} onClick={() => stage(o, 'ready')}>
                          ✅ جاهز للاستلام
                        </button>
                      )}
                      {canAct && o.order_type === 'takeaway' && o.status === 'ready' && (
                        <button className="btn btn-success btn-sm" disabled={busy === o.web_order_id} onClick={() => stage(o, 'collected')}>
                          🤝 العميل استلم
                        </button>
                      )}
                      {o.order_type === 'delivery' && o.order_id && !['delivered', 'cancelled'].includes(o.public_status) && (
                        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>تابع من شاشة الدليفري</span>
                      )}
                    </td>
                  </tr>
                )
              })}
              {rest.length === 0 && (
                <tr><td colSpan={7} style={{ textAlign: 'center', padding: 26, color: 'var(--text-muted)' }}>لا يوجد</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {rejecting && (
        <div className="modal-overlay" onClick={() => setRejecting(null)}>
          <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 480 }}>
            <h3 className="modal-title">رفض الطلب {rejecting.code}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 14 }}>
              العميل هيشوف السبب ده على صفحة التتبع. اختار سبب أو اكتب واحد.
            </p>
            <div style={{ display: 'grid', gap: 8, marginBottom: 12 }}>
              {REASONS.map(r => (
                <button key={r} className={`btn ${reason === r ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ justifyContent: 'flex-start', ...TOUCH, fontWeight: 700 }} onClick={() => setReason(r)}>
                  {r}
                </button>
              ))}
            </div>
            <input className="input" style={{ width: '100%', marginBottom: 16 }} placeholder="سبب تاني…" value={reason}
              maxLength={200} onChange={e => setReason(e.target.value)} />
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-danger" style={{ ...TOUCH, flex: 1 }} disabled={!reason.trim() || busy !== null} onClick={reject}>
                ✕ رفض الطلب
              </button>
              <button className="btn btn-ghost" style={TOUCH} onClick={() => setRejecting(null)}>رجوع</button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className={`toast toast-${toast.type}`}>{toast.msg}</div>}
    </div>
  )
}

/** Is the website actually reaching this till right now? */
export function ConnectionPill({ status }: { status: WebSyncStatus | null }) {
  if (!status || !status.enabled) return null
  const ok = status.online
  const text = status.skipped === 'demo' ? 'حساب العرض — غير متصل بالموقع'
    : status.skipped === 'node' ? 'الاتصال عن طريق الجهاز الرئيسي'
    : ok ? (status.open ? 'متصل — الموقع بياخد طلبات' : status.reason === 'closed' ? 'متصل — مفيش وردية مفتوحة' : 'متصل — الطلبات متوقفة')
    : status.lastError ? `غير متصل: ${status.lastError}` : 'بيتصل بالموقع…'
  return (
    <span
      className={`badge ${ok ? (status.open ? 'badge-success' : 'badge-warning') : status.skipped ? 'badge-info' : 'badge-danger'}`}
      style={{ padding: '8px 12px', fontSize: 12.5, maxWidth: 420, whiteSpace: 'normal', lineHeight: 1.6 }}
      title={status.lastOkAt ? `آخر اتصال ناجح ${new Date(status.lastOkAt).toLocaleTimeString('ar-EG')}` : undefined}
    >
      {ok ? '🟢' : status.skipped ? 'ℹ️' : '🔴'} {text}
    </span>
  )
}
