/* eslint-disable no-magic-numbers */
import { HideToast, ToastOption } from './interface'




class ToastManager {
  // 消息队列
  private queue = new Set<ToastOption>()
  // 隐藏当前taost的方法
  private hideToast: HideToast | null = null
  // 根节点
  private root: HTMLDivElement | null = null

  show(option: ToastOption): void {
    if (!option.icon) option.icon = 'none'
    if (!option.duration) option.duration = 1500

    this.addQueue(option)
    this.run()
  }

  /** 隐藏toast并且清除后续所有的taost消息队列 */
  hide(): void {
    this._hide()
    this.queue.clear()
  }

  /** 初始化配置 */
  private init(): void {
    if (this.root !== null) return
    this.root = document.createElement('div')
    document.body.appendChild(this.root)
  }

  /** 运行队列 */
  private run(): void {
    this.init()
    if (this.queue.size === 0) return
    this._show()
  }

  private _show(): void {
    const option = this.queue.values()
  }

  private _hide(): void {
    this.hideToast?.()
    this.hideToast = null
  }

  /**
   * 添加任务队列
   * @param option
   */
  private addQueue(option: ToastOption): void {
    this.queue.add(option)
  }

  /**
   * 删除任务队列的任务
   * @param option
   */
  private removeQueue(option: ToastOption): void {
    this.queue.delete(option)
  }
}

export default new ToastManager()
