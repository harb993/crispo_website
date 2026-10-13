import { Notification } from 'electron'
import log from 'electron-log/main'
import { handle } from '../net/router'
import * as web from '../services/webOrderService'
import { requireAnyAuth, requireRole } from '../services/authService'
import { requireOpenWorkShift } from '../services/workShiftService'
import { getSettings } from '../services/settingsService'
import { requireSettingsUnlocked } from './settings.ipc'
import { broadcast, broadcastOrdersChanged, broadcastStockChanged } from './broadcast'
import { printOrderInBackground } from './printer.ipc'
import type { IpcResponse, WebOrder } from '../../shared/types'

/**
 * Online orders at the till: the inbox, the accept / reject buttons, the pause switch,
 * and the owner's connection settings.
 *
 * On a node till every one of these is forwarded to the master like any other channel,
 * so a web order can be accepted at whichever till is nearest — the master is the one
 * talking to the relay, and the one whose books it lands in.
 */

function changed(newOrders: WebOrder[] = []): void {
  broadcast('app:webOrdersChanged', {
    status: web.getSyncStatus(),
    newOrders: newOrders.map(o => ({ code: o.code, name: o.customer_name, total: o.quoted_total, type: o.order_type })),
  })
}

export function registerWebOrderIpc(): void {
  // The sync loop runs on its own; this is how what it finds reaches the screens.
  web.onWebOrdersChanged(({ newOrders }) => {
    changed(newOrders)
    if (newOrders.length && Notification.isSupported()) {
      const first = newOrders[0]
      new Notification({
        title: newOrders.length > 1 ? `🌐 ${newOrders.length} طلبات جديدة من الموقع` : '🌐 طلب جديد من الموقع',
        body: `${first.code} · ${first.customer_name} · ${first.quoted_total} ${getSettings().currency_symbol}`,
      }).show()
    }
  })

  handle('web:list', async (_e, { scope } = {}): Promise<IpcResponse> => {
    try {
      requireAnyAuth()
      return { success: true, data: web.listWebOrders(scope === 'recent' ? 'recent' : 'active') }
    } catch (err: any) { return { success: false, error: err.message } }
  })

  handle('web:status', async (): Promise<IpcResponse> => {
    try {
      requireAnyAuth()
      return { success: true, data: web.getSyncStatus() }
    } catch (err: any) { return { success: false, error: err.message } }
  })

  handle('web:accept', async (_e, { webOrderId }): Promise<IpcResponse> => {
    try {
      const session = requireAnyAuth()
      // Same rule as the counter: no shift, no sale.
      requireOpenWorkShift()
      const { result, order } = web.acceptWebOrder(Number(webOrderId), session)
      broadcastStockChanged('sale')
      broadcastOrdersChanged('sale')
      // The stock push above is what refreshes the low-stock count on every screen.
      if (getSettings().print_auto) printOrderInBackground(result.orderId)
      changed()
      web.kickWebSync()
      return { success: true, data: { result, order } }
    } catch (err: any) {
      log.error('[IPC] web:accept error:', err)
      return { success: false, error: err.message }
    }
  })

  handle('web:reject', async (_e, { webOrderId, reason }): Promise<IpcResponse> => {
    try {
      const session = requireAnyAuth()
      const order = web.rejectWebOrder(Number(webOrderId), reason, session)
      changed()
      web.kickWebSync()
      return { success: true, data: order }
    } catch (err: any) { return { success: false, error: err.message } }
  })

  handle('web:stage', async (_e, { webOrderId, stage }): Promise<IpcResponse> => {
    try {
      const session = requireAnyAuth()
      if (stage !== 'ready' && stage !== 'collected') throw new Error('مرحلة غير معروفة')
      const order = web.setTakeawayStage(Number(webOrderId), stage, session)
      changed()
      web.kickWebSync()
      return { success: true, data: order }
    } catch (err: any) { return { success: false, error: err.message } }
  })

  // The "we're slammed" switch. Whoever is at the till may press it.
  handle('web:setAccepting', async (_e, { accepting }): Promise<IpcResponse> => {
    try {
      const session = requireAnyAuth()
      if (session.role === 'accountant') throw new Error('للكاشير والمدير فقط')
      web.setAccepting(!!accepting)
      log.info(`[Web] Online orders ${accepting ? 'resumed' : 'paused'} by ${session.username}`)
      web.kickWebSync()
      changed()
      return { success: true, data: web.getSyncStatus() }
    } catch (err: any) { return { success: false, error: err.message } }
  })

  handle('web:config:get', async (): Promise<IpcResponse> => {
    try {
      requireRole('owner')
      return { success: true, data: web.getWebConfig() }
    } catch (err: any) { return { success: false, error: err.message } }
  })

  handle('web:config:set', async (_e, data = {}): Promise<IpcResponse> => {
    try {
      const session = requireRole('owner')
      requireSettingsUnlocked(session.userId)
      const cfg = web.setWebConfig({
        enabled: data.enabled,
        relayUrl: data.relayUrl,
        key: data.key,
        etaDelivery: data.etaDelivery,
        etaTakeaway: data.etaTakeaway,
        takeaway: data.takeaway,
      })
      web.kickWebSync()
      changed()
      return { success: true, data: cfg }
    } catch (err: any) { return { success: false, error: err.message } }
  })

  // "Is it working?" — one sync, now, with the real answer.
  handle('web:test', async (): Promise<IpcResponse> => {
    try {
      requireRole('owner')
      const outcome = await web.syncOnce()
      const status = web.getSyncStatus()
      changed()
      if (outcome === 'disabled') return { success: false, error: 'الطلب أونلاين مش مفعّل' }
      if (outcome === 'demo') return { success: false, error: 'حساب العرض لا يتصل بالموقع' }
      if (outcome === 'node') return { success: false, error: 'الجهاز الرئيسي هو اللي بيتصل بالموقع' }
      if (outcome === 'unlicensed') return { success: false, error: 'البرنامج غير مُفعّل' }
      return { success: true, data: status }
    } catch (err: any) { return { success: false, error: err.message } }
  })
}
