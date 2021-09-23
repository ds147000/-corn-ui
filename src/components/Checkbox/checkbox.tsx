import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import {
  View,
  // #if _APP === 'weapp'
  Input
  // #endif
} from '@tarojs/components'
import Icon from '../Icon'
import Button, { ButtonSize, ButtonType } from '../Button'
import { CheckBoxContext } from './context'

export interface CheckBoxProps {
  name?: string
  /** 复选框类型 */
  type?: 'button' | 'default'
  /** 是否选中 */
  check?: boolean
  /** 默认是否选中 */
  defaultChecked?: boolean
  /** 值，仅在 checkGroup 嵌套下生效 */
  value?: string
  /** 禁用 */
  disabled?: boolean
  /** 大小，当类型为Button生效 */
  size?: ButtonSize
  /** 是否开启幽灵样式，仅在button有效 */
  ghost?: boolean
  /** 按钮风格样式 */
  buttonType?: ButtonType
  /** 选中发生改变回调 */
  onChange?(check: boolean): void
}

const CheckBox: React.FC<CheckBoxProps> = ({
  children,
  defaultChecked = false,
  check,
  type = 'default',
  size,
  onChange,
  value = '',
  disabled,
  name,
  ghost,
  buttonType = 'primary'
}) => {
  const [ internalCheck, setInternalCheck ] = useState(defaultChecked || false)
  const context = useContext(CheckBoxContext)

  /** 选中值 */
  const controllCheck = getControllValue(check, internalCheck, context.values, value)

  /** 是否默认样式 */
  const isDefualtStyle = type === 'default'

  const _class = classNames(
    'xrk-if xrk-ac',
    controllCheck && isDefualtStyle && 'xrk-checkbox-active',
    isDefualtStyle && 'xrk-checkbox',
    isDefualtStyle && disabled && 'xrk-checkbox-disable'
  )

  const _onChange = (): void => {
    if (disabled) return

    const newCheck = !controllCheck
    onChange?.(newCheck)
    context.onCheck?.(newCheck, value)

    if (check === undefined && context.values === undefined) setInternalCheck(newCheck)
  }

  const _value = value || String(controllCheck)

  let input: JSX.Element
  // #if _APP === 'weapp'
  input = <Input className="xrk-checkbox-hide" value={_value} name={name} data-testid="check" />
  // #else
  // eslint-disable-next-line react/forbid-elements
  input = <input className="xrk-checkbox-hide" value={_value} name={name} data-testid="check" readOnly  />
  // #endif

  return (
    <View className={_class} onClick={_onChange}>
      {input}
      {isDefualtStyle ? (
        <>
          <Icon name={controllCheck ? 'fill-select' : 'radio'} />
          {children}
        </>
      ) : (
        <Button
          size={size}
          type={controllCheck ? buttonType : 'default'}
          disabled={disabled}
          ghost={controllCheck ? ghost : false}
        >
          {children}
        </Button>
      )}
    </View>
  )
}

export function getControllValue(
  externalCheck: boolean | undefined,
  internalCheck: boolean,
  values?: string[],
  value = ''
): boolean {
  if (values !== undefined) return values.includes(value)

  return externalCheck ?? internalCheck
}

export default CheckBox
