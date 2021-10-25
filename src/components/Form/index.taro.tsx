import React from 'react'
import Taro from '@tarojs/taro'
import { BaseEventOrig, Form as TaroForm } from '@tarojs/components'
import { FormProps as TaroFormProps } from '@tarojs/components/types/Form'
import { FormClass, FormProps } from './typing'
import { FromContext, SetValue } from './context'
import { transfromInputValue } from './utils'

type SelectNodeItem = {
  value: string
  name: string
}

class Form extends React.Component<FormProps> implements FormClass {
  private el = React.createRef<{ uid: string }>()
  private setMap = new Map<string, SetValue>()

  submit = (): void => {
    this.getValue()
      .then((res) => this.props.onSubmit?.(res))
  }

  reset = (): void => {
    this._onReset()
  }

  setValue = (data: Record<string, unknown> = {}): void => {
    Object.keys(data).map((key) => {
      if (this.setMap.has(key)) {
        this.setMap.get(key)?.(data[key])
        return
      }
    })
  }

  getValue = async (): Promise<Record<string, unknown>> => {
    return new Promise((resolve) => {
      const data: Record<string, unknown> = {}
      const id = this.el.current?.uid
      Taro.createSelectorQuery()
        .selectAll(`#${id} .xrk-checkbox-group-hide, #${id} .xrk-input, #${id} .xrk-checkbox-hide`)
        .fields({ properties: [ 'value', 'name' ] }, (res: SelectNodeItem[]) => {
          res
            .filter((item) => Boolean(item.name))
            .map((item) => data[item.name] = transfromInputValue(item.value))

          resolve(data)
        })
        .exec()
    })
  }

  componentDidMount(): void {
    Taro.nextTick(() => {
      if (this.props.defaultValue) this.setValue(this.props.defaultValue)
    })
  }

  private _onSubmit = (event: BaseEventOrig<TaroFormProps.onSubmitEventDetail>): void => {
    const data: Record<string, unknown> = {}
    Object.keys(event.detail.value || {})
      .map((key) => data[key] = transfromInputValue((event.detail.value as Record<string, string>)[key]))

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

  render(): JSX.Element {
    return (
      <TaroForm
        onSubmit={this._onSubmit}
        onReset={this._onReset}
        ref={this.el}
      >
        <FromContext.Provider value={{ add: this._putResetCbList, remove: this._removeResetCbList }}>
          {this.props.children}
        </FromContext.Provider>
      </TaroForm>
    )
  }
}

export default Form
