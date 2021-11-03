import { getRanDomId } from '../../../utils'

type ObserverCallabck = () => void

type ObserverRemove = () => void

class Observer {
  private ins: IntersectionObserver
  private callbacks = new Map<string, ObserverCallabck>()

  constructor(threshold: number[]) {
    this.ins = new IntersectionObserver((this.call.bind(this)), {
      root: null,
      rootMargin: '0px',
      threshold
    })
  }

  add(el: HTMLImageElement, listen: ObserverCallabck): ObserverRemove {
    const id = getRanDomId()
    this.setId(el, id)
    this.callbacks.set(id, listen)
    this.ins.observe(el)

    // 返回卸载函数
    return (): void => {
      this.ins?.unobserve(el)
      this.callbacks.delete(id)
    }
  }



  /** 设置监听id */
  setId(el: HTMLImageElement, id: string): void {
    el.setAttribute('intersection-id', id)
  }

  /** 获取监听id */
  getId(el: HTMLImageElement): string {
    const id = el.getAttribute('intersection-id')
    return id || ''
  }

  private call(list: IntersectionObserverEntry[], ins: IntersectionObserver): void {

    list.forEach((item) => {
      if (item.isIntersecting === false) return

      const { target } = item
      // 初始化，阻止
      const id = this.getId(target as HTMLImageElement)
      const call = this.callbacks.get(id)
      if (call) call()

      ins.unobserve(target)
      this.callbacks.delete(id)
    })
  }
}

let ObserverService: Observer | null = null

const getObserverService = (): Observer => {
  if (ObserverService) return ObserverService

  // eslint-disable-next-line no-magic-numbers
  ObserverService = new Observer([ 0.02, 0.15, 0.25, 0.5 ])
  return ObserverService
}

export default getObserverService
