import React from 'react'
import { FromContext, SetValue } from './context'
import { FromProps } from './typing'

class Form extends React.Component<FromProps> {
  private el: HTMLFormElement
  private setMap = new Map<string, SetValue>()

  getValue = (): Record<string, unknown> => {
    const result: Record<string, unknown> = {}
    const inputs = this.el.querySelectorAll('input') as unknown as HTMLInputElement[] || []

    inputs.forEach((item) => {
      if (item.name) result[item.name] = this._transfromInputValue(item)
    })

    return result
  }

  submit = (): void => {
    this.props.onSubmit?.(this.getValue())
  }

  reset = (): void => {
    this.el.querySelectorAll('.xrk-input').forEach((item: HTMLInputElement) => item.value = '')

    this._onReset()
  }

  setValue = (data: Record<string, unknown>): void => {
    Object.keys(data).map((key) => {
      if (this.setMap.has(key)) {
        this.setMap.get(key)?.(data[key])
        return
      }

      const input = this.el.querySelector(`input[name='${key}']`) as HTMLInputElement
      input?.setAttribute('value', String(data[key]))
    })
  }

  private _onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const data = this.getValue()
    this.props.onSubmit?.(data)
  }

  private _onReset = (): void => {
    this.setMap.forEach((item) => item())

    if (this.props.defaultValue) {
      const emptyData = {}
      Object.keys(this.props.defaultValue).map((item) => emptyData[item] = '')
      this.setValue(emptyData)
    }

    this.props.onReset?.()
  }

  private _transfromInputValue = (input: HTMLInputElement): unknown => {
    switch(input.dataset.type) {
      case 'boolean':
        return Boolean(Number(input.value))

      case 'radio':
        return input.value

      case 'checkbox':
        return input.value.split(',')

      default:
        return input.value
    }
  }

  private _putResetCbList = (name: string, set: SetValue): void => {
    this.setMap.set(name, set)
  }

  private _removeResetCbList = (name: string): void => {
    this.setMap.delete(name)
  }

  componentDidMount(): void {
    if (this.props.defaultValue) this.setValue(this.props.defaultValue)
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
