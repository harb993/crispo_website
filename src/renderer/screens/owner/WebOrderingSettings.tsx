import React, { useEffect, useState } from 'react'
import type { WebOrderConfig, WebSyncStatus } from '../../../shared/types'
import { ConnectionPill } from '../cashier/WebOrdersScreen'

/**
 * Connecting the till to the restaurant's website.
 *
 * Two values make the link: where the relay is, and the key it was started with
 * (RELAY_TILL_KEY on the server). The till then publishes its menu, collects orders
 * and reports their progress by itself — nothing is opened on the shop's router.
 *
 * Saves on its own button, like the network settings, rather than riding along with
 * the page's حفظ: switching it on starts talking to a server, which is a step worth
 * taking deliberately.
 */
export default function WebOrderingSettings({ showToast }: { showToast: (msg: string, type?: string) => void }) {
  const [cfg, setCfg] = useState<WebOrderConfig | null>(null)
  const [status, setStatus] = useState<WebSyncStatus | null>(null)
  const [url, setUrl] = useState('')
  const [key, setKey] = useState('')
  const [etaDelivery, setEtaDelivery] = useState(45)
  const [etaTakeaway, setEtaTakeaway] = useState(20)
  const [takeaway, setTakeaway] = useState(true)
  const [busy, setBusy] = useState(false)

  const load = async () => {
    const [c, s] = await Promise.all([window.api.getWebConfig(), window.api.getWebStatus()])
    if (c.success) {
      setCfg(c.data)
      setUrl(c.data.relayUrl)
      setEtaDelivery(c.data.etaDelivery)
      setEtaTakeaway(c.data.etaTakeaway)
      setTakeaway(c.data.takeaway)
    }
    if (s.success) setStatus(s.data)
  }

  useEffect(() => {
    void load()
    return window.api.onWebOrdersChanged?.(d => setStatus(d.status))
  }, [])

  const save = async (enabled?: boolean) => {
    setBusy(true)
    const res = await window.api.setWebConfig({
      relayUrl: url, key: key || undefined, etaDelivery, etaTakeaway, takeaway,
      ...(enabled !== undefined ? { enabled } : {}),
    })
    setBusy(false)
    if (!res.success) return showToast(res.error || 'تعذر الحفظ', 'error')
    setCfg(res.data)
    setKey('')
    showToast(enabled === true ? 'تم تفعيل الطلب أونلاين' : enabled === false ? 'تم إيقاف الطلب أونلاين' : 'تم الحفظ')
    setTimeout(load, 1500)
  }

  const test = async () => {
    setBusy(true)
    const res = await window.api.testWebConnection()
    setBusy(false)
    if (res.success) {
      setStatus(res.data)
      showToast('✅ الاتصال شغال — المنيو اتنشر على الموقع')
    } else {
      showToast(res.error || 'تعذر الاتصال', 'error')
    }
  }

  /** A fresh random key, to paste into the server's RELAY_TILL_KEY. */
  const generate = () => {
    const bytes = crypto.getRandomValues(new Uint8Array(24))
    setKey(Array.from(bytes, b => b.toString(16).padStart(2, '0')).join(''))
  }

  if (!cfg) return null

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">🌐 الطلب أونلاين من الموقع</span>
        <ConnectionPill status={status} />
      </div>

      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 2, marginBottom: 16 }}>
        الجهاز ده بيتصل بسيرفر الموقع كل كام ثانية: بينشر المنيو بأسعار الكاشير، بيستلم الطلبات الجديدة
        (بتظهر في <b>🌐 طلبات الموقع</b> مع جرس)، وبيبلّغ العميل بحالة طلبه لحظة بلحظة. الجهاز هو اللي بيتصل —
        مفيش أي حاجة بتتفتح في راوتر المحل، ولو النت قطع الكاشير شغال عادي والموقع بيقفل الطلبات لوحده.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
        <div className="form-group">
          <label className="form-label">عنوان السيرفر</label>
          <input className="input" dir="ltr" placeholder="https://order.crispo.com" value={url}
            onChange={e => setUrl(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">مفتاح الربط {cfg.keySet && <span style={{ color: 'var(--success)' }}>(محفوظ ✓)</span>}</label>
          <div style={{ display: 'flex', gap: 6 }}>
            <input className="input" dir="ltr" type="password" autoComplete="off" style={{ flex: 1 }}
              placeholder={cfg.keySet ? '•••••••• — اتركه فاضي للإبقاء عليه' : 'نفس RELAY_TILL_KEY على السيرفر'}
              value={key} onChange={e => setKey(e.target.value)} />
            <button className="btn btn-secondary btn-sm" type="button" onClick={generate} title="مفتاح عشوائي جديد">🎲</button>
          </div>
          {key && (
            <div dir="ltr" style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 6, wordBreak: 'break-all', fontFamily: 'monospace' }}>
              {key}
            </div>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">وقت التوصيل المتوقع (دقيقة)</label>
          <input className="input" type="number" min={5} max={240} value={etaDelivery}
            onChange={e => setEtaDelivery(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label className="form-label">وقت تجهيز الاستلام (دقيقة)</label>
          <input className="input" type="number" min={5} max={240} value={etaTakeaway}
            onChange={e => setEtaTakeaway(Number(e.target.value))} />
        </div>
      </div>

      <label style={{ display: 'flex', gap: 8, alignItems: 'center', margin: '6px 0 18px', fontSize: 14, cursor: 'pointer' }}>
        <input type="checkbox" checked={takeaway} onChange={e => setTakeaway(e.target.checked)} />
        السماح بطلبات «استلام من الفرع» من الموقع
      </label>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button className="btn btn-primary" disabled={busy} onClick={() => save()}>💾 حفظ</button>
        {cfg.enabled
          ? <button className="btn btn-danger" disabled={busy} onClick={() => save(false)}>⏹️ إيقاف الطلب أونلاين</button>
          : <button className="btn btn-success" disabled={busy || !url} onClick={() => save(true)}>▶️ تفعيل الطلب أونلاين</button>}
        <button className="btn btn-secondary" disabled={busy || !cfg.enabled} onClick={test}>🔌 اختبار الاتصال</button>
      </div>

      {status?.lastError && (
        <div style={{ marginTop: 14, fontSize: 13, color: 'var(--danger)', fontWeight: 700 }}>⚠️ {status.lastError}</div>
      )}
    </div>
  )
}
