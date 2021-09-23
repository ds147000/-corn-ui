import React from 'react'
import { View } from '@tarojs/components'
// #if _APP === 'weapp'
import Taro from '@tarojs/taro'
// #endif
import { CheckBoxContext, CheckBoxContextValue } from './context'
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
    const elements = ref.getElementsByTagName('input')
    const values: string[] = []

    for(let i = 0; i < elements.length; i++) {

      if (values.includes(elements[i].value) === false)
        values.push(elements[i].value)
    }

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

  /** 重置所有值 */
  reset = (): void => {
    this.setState({ values: [] })
  }

  /**
   * 设置表单值
   * @param string
   */
  setValue = (val: string[]): void => {
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
    if (this.props.defaultValue) this.setState({ values: [ ...this.props.defaultValue ] })
  }

  render(): JSX.Element {
    const ProviderValue: CheckBoxContextValue = {
      values: this.state.values,
      onCheck: this.onChange
    }

    const { children, ...props } = this.props

    return (
      <View ref={(ref): void => this.ref = ref} {...props} >
        <CheckBoxContext.Provider value={ProviderValue}>
          {children}
        </CheckBoxContext.Provider>
      </View>
    )
  }
}

export default CheckBoxGroup
