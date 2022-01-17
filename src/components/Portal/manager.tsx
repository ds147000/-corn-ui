/* eslint-disable no-magic-numbers */
import React from 'react'
import ReactDOM from 'react-dom'
import Host from './host'
import ProtalSub from '../../utils/sub'
import { PROTAL_ADD, PROTAL_REMOVE } from '../../config/event'

class HostManager {
  private id = 1
  status = false

  private async _init(): Promise<void> {
    if (this.status) return Promise.resolve()

    const root = window.document.createElement('div')
    window.document.body.appendChild(root)

    return new Promise((res) => {
      this.status = true
      ReactDOM.render(<Host onReady={res} />, root)
    })
  }

  async add(Comps: React.FC<{ onDestory?(): void }>, props: Record<string, unknown> = {}): Promise<void> {
    await this._init()
    const id = this.id += 1
    const onDestory = (): void => {
      this.remove(id)
    }
    ProtalSub.emit(PROTAL_ADD, id, <Comps {...props} onDestory={onDestory} key={id} />)
  }

  remove(id: number): void {
    ProtalSub.emit(PROTAL_REMOVE, id)
  }
}

export default new HostManager
