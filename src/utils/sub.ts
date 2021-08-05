/* eslint-disable @typescript-eslint/no-explicit-any */
type CallBack = (...args: any[]) => void

type Destroy = () => void

class ProtalSub {
  private listens = new Map<string, CallBack>()

  add(type: string, cb: CallBack): Destroy {
    this.listens.set(type, cb)

    return (): void => {
      this.listens.delete(type)
    }
  }

  emit(type: string, ...args: any[]): void {
    const callBack = this.listens.get(type)

    if (!callBack) return

    window.requestAnimationFrame(() => {
      callBack(...args)
    })
  }
}

export default new ProtalSub()
