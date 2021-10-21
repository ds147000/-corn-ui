import React from 'react'
import { BaseEventOrig, Form as TaroForm } from '@tarojs/components'
import { FormProps as TaroFormProps } from '@tarojs/components/types/Form'
import { FromProps } from './typing'
import { FromContext, SetValue } from './context'
import { transfromInputValue } from './utils'

class Form extends React.Component<FromProps> {
  private el = React.createRef<{ uid: string }>()
  private setMap = new Map<string, SetValue>()

  setValue = (data: Record<string, unknown> = {}): void => {
    Object.keys(data).map((key) => {
      if (this.setMap.has(key)) {
        this.setMap.get(key)?.(data[key])
        return
      }

      // const input = this.el.querySelector(`input[name='${key}']`) as HTMLInputElement
      // input?.setAttribute('value', String(data[key]))

    })
  }

  componentDidMount(): void {
    if (this.props.defaultValue) this.setValue(this.props.defaultValue)
  }

  private _onSubmit = (event: BaseEventOrig<TaroFormProps.onSubmitEventDetail>): void => {
    const data: Record<string, unknown> = {}
    Object.keys(event.detail.value || {})
      .map((key) => data[key] = transfromInputValue((event.detail.value as Record<string, string>)[key]))

    this.props.onSubmit?.(data)
  }

  private _onReset = (): void => {
    this.setValue()
    this.props.onReset?.()
  }

  private _putResetCbList = (name: string, set: SetValue): void => {
    this.setMap.set(name, set)
  }

  private _removeResetCbList = (name: string): void => {
    this.setMap.delete(name)
  }

  render(): JSX.Element {
    return (
      <FromContext.Provider value={{ add: this._putResetCbList, remove: this._removeResetCbList }}>
        <TaroForm
          onSubmit={this._onSubmit}
          onReset={this._onReset}
          ref={this.el}
        >
          {this.props.children}
        </TaroForm>
      </FromContext.Provider>
    )
  }
}

export default Form
