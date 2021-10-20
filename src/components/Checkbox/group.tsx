import React from 'react'
import {
  View,
  // #if _APP === 'weapp'
  Input
  // #endif
} from '@tarojs/components'

// #if _APP === 'weapp'
import Taro from '@tarojs/taro'
// #endif

import { CheckBoxContext, CheckBoxContextValue } from './context'
import { FromContext } from '../Form/context'
import { ViewProps } from '../../types/View'

export interface CheckBoxGroupProps extends ViewProps {
  name?: string
  defaultValue?: string[]
  onChange?(value: string[]): void
  radio?: boolean
}

class CheckBoxGroup extends React.Component<CheckBoxGroupProps, CheckBoxContextValue> {
  state: CheckBoxContextValue = {
    values: []
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any

  /** 重置所有值 */
  reset = (): void => {
    this.setState({ values: [] })
  }

  /**
   * 设置表单值
   * @param string
   */
  setValue = (val: string[] = []): void => {
    this.setState({ values: [ ...val ] })
  }

  /** 全选 */
  selectAll = (): void => {
    if (this.props.radio) return // 单选，终止

    // #if _APP === 'weapp'
    this.selectAllOfWeapp()
    // #else
    this.selectAllOfH5()
    // #endif
  }

  /** 获取表单值 */
  getValue(): string[] {
    return [ ...this.state.values as string[] ]
  }

  componentDidMount(): void {
    this.context.add(this.props.name, this.setValue)

    if (this.props.defaultValue) this.setState({ values: [ ...this.props.defaultValue ] })
  }

  componentWillUnmount(): void {
    this.context.remove(this.props.name)
  }

  private onChange = (check: boolean, value: string): void => {
    if (!this.props.radio) {
      this.onCheckBoxSelect(check, value)
    } else {
      this.onRadioSelect(check, value)
    }
  }

  /** 多选状态选中 */
  private onCheckBoxSelect = (check: boolean, value: string): void => {
    let newValues

    if (check) {
      newValues = [ ...this.state.values as string[], value ]
    } else {
      newValues = this.state.values?.filter((item) => item !== value)
    }

    this.setState({ values: newValues }, this.emitChange)
  }

  /** 单选状态选中 */
  private onRadioSelect = (check: boolean, value: string): void => {
    if (!check) return // 不可取消选中

    this.setState({ values: [ value ] }, this.emitChange)
  }

  /** 通知外部更新 */
  private emitChange = (): void => {
    this.props.onChange?.(this.state.values as string[])
  }

  // #if _APP === 'h5'
  private selectAllOfH5(): void {
    const ref: HTMLDivElement = this.ref
    const values: string[] = []
    ref.querySelectorAll('.xrk-checkbox-hide').forEach((item: HTMLInputElement) => {
      if (values.includes(item.value) === false)
        values.push(item.value)
    })
    this.setState({ values }, this.emitChange)
  }
  // #endif

  // #if _APP === 'weapp'
  private selectAllOfWeapp(): void {
    Taro.createSelectorQuery()
      .selectAll(`#${this.ref.uid} .xrk-checkbox-hide`)
      .fields({ properties: [ 'value' ] }, (list): void => {
        const values: string[] = list?.map((item) => item.value)
        this.setState({ values }, this.emitChange)
      }).exec()
  }
  // #endif

  render(): JSX.Element {
    const ProviderValue: CheckBoxContextValue = {
      values: this.state.values,
      onCheck: this.onChange
    }

    const { children, radio, ...props } = this.props

    let input: JSX.Element
    // #if _APP === 'weapp'
    input = (
      <Input
        className="xrk-checkbox-group-hide"
        value={String(this.state.values)}
        name={props.name}
        data-testid="check"
        data-type={radio ? 'radio' : 'checkbox'}
      />
    )
    // #else
    input = (
    // eslint-disable-next-line react/forbid-elements
      <input
        className="xrk-checkbox-group-hide"
        value={String(this.state.values)}
        name={props.name}
        data-testid="check"
        data-type={radio ? 'radio' : 'checkbox'}
        readOnly
      />
    )
    // #endif

    return (
      <View ref={(ref): void => this.ref = ref} {...props} >
        {input}
        <CheckBoxContext.Provider value={ProviderValue}>
          {children}
        </CheckBoxContext.Provider>
      </View>
    )
  }
}

CheckBoxGroup.contextType = FromContext

export default CheckBoxGroup
