/* eslint-disable no-magic-numbers */
import React from 'react'
import ReactDOM from 'react-dom'
import Host from './host'
import ProtalSub from '../../utils/sub'
import { PROTAL_ADD, PROTAL_REMOVE } from '../../config/event'

class HostManager {
  private initTime = 60
  private id = 1
  status = false

  private async _init(): Promise<void> {
    if (this.status) return Promise.resolve()

    const root = document.createElement('div')
    document.body.append(root)

    return new Promise((res) => {
      this.status = true
      ReactDOM.render(<Host />, root)
      setInterval(res, this.initTime)
    })
  }

  async add(children: React.ReactNode): Promise<number> {
    await this._init()
    const id = this.id + 1
    ProtalSub.emit(PROTAL_ADD, id, children)

    return id
  }

  remove(id: number): void {
    ProtalSub.emit(PROTAL_REMOVE, id)
  }
}

export default new HostManager
