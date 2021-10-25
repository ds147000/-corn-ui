import React from 'react'
import { FromContext, SetValue } from './context'
import { FormClass, FormProps } from './typing'
import { transfromInputValue } from './utils'

const INIT_TIMER = 60

class Form extends React.Component<FormProps> implements FormClass {
  private el: HTMLFormElement
  private setMap = new Map<string, SetValue>()
  private timeId: NodeJS.Timeout

  getValue = async (): Promise<Record<string, unknown>> => {
    const result: Record<string, unknown> = {}

    this.el.querySelectorAll('input').forEach((item) => {
      if (item.name) result[item.name] = transfromInputValue(item.value)
    })

    this.el.querySelectorAll('textarea').forEach((item) => {
      if (item.name) result[item.name] = transfromInputValue(item.value)
    })

    return result
  }

  setValue = (data: Record<string, unknown>): void => {
    Object.keys(data).map((key) => {
      if (this.setMap.has(key)) {
        this.setMap.get(key)?.(data[key])
        return
      }
    })
  }

  submit = (): void => {
    this.getValue()
      .then((res) => this.props.onSubmit?.(res))
  }

  reset = (): void => {
    this._onReset()
  }


  private _onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const data = await this.getValue()
    this.props.onSubmit?.(data)
  }

  private _onReset = (): void => {
    this.setMap.forEach((item) => item())

    this.props.onReset?.()
  }

  private _putResetCbList = (name: string, set: SetValue): void => {
    this.setMap.set(name, set)
  }

  private _removeResetCbList = (name: string): void => {
    this.setMap.delete(name)
  }

  componentDidMount(): void {
    this.timeId = setTimeout(() => { // 延迟执行，防止子组件未完成渲染
      if (this.props.defaultValue) this.setValue(this.props.defaultValue)
    }, INIT_TIMER)
  }

  componentWillUnmount(): void {
    clearTimeout(this.timeId)
  }

  render(): JSX.Element {
    return (
      <FromContext.Provider value={{ add: this._putResetCbList, remove: this._removeResetCbList }}>
        {/* eslint-disable-next-line react/forbid-elements */}
        <form
          onSubmit={this._onSubmit}
          onReset={this._onReset}
          ref={(ref): HTMLFormElement => this.el = ref as HTMLFormElement}
        >
          {this.props.children}
        </form>
      </FromContext.Provider>
    )
  }
}

export default Form
