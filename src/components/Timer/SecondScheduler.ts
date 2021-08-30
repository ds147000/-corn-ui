const DEFAULT_INTERVAL = 1000
const MIN_SCE = 60000
const QUEUE_EMPTY_LEN = 0

export type SecondSchedulerDestotry = () => void
export type SecondSchedulerCb = (number: number) => void

export class SecondScheduler {
  private queue = new Set<SecondSchedulerCb>()
  private timeId: NodeJS.Timeout | null = null
  private interval = DEFAULT_INTERVAL

  constructor(interval?: number) {
    if (interval) this.interval = interval
  }

  /** 添加定时任务 */
  add(cb: SecondSchedulerCb): SecondSchedulerDestotry {
    this.queue.add(cb)
    this.create()

    return (): void => {
      this.queue.delete(cb)
      this.remove()
    }
  }

  /** 启动定时器 */
  private create(): void {
    if (this.timeId !== null) return
    this.start()
  }

  /** 定时器回调 */
  private start(): void {
    if (this.timeId) clearTimeout(this.timeId)
    if (this.queue.size === QUEUE_EMPTY_LEN) return

    this.timeId = setTimeout(() => {
      this.emit()
      this.start()
    }, this.interval)
  }

  /** 执行 */
  private emit(): void {
    this.queue.forEach((item) => item(this.interval))
  }

  /** 销毁 */
  private remove(): void {
    if (this.queue.size === QUEUE_EMPTY_LEN) {
      if (this.timeId) clearTimeout(this.timeId)
      this.timeId = null
    }
  }

  destory(): void {
    this.queue.clear()
    this.remove()
  }

}

/** 一秒调度器 */
export const SecondSchedulerApp = new SecondScheduler()

/** 一分钟调度器 */

export const MinuteSchedulerApp = new SecondScheduler(MIN_SCE)

