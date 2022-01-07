import React from 'react'
import { Input as TaroInput } from '@tarojs/components'
import classNames from 'classnames'
import { InputProps } from '../../../types/Input'
import { useInput } from '../hook/input'

const Input: React.FC<InputProps> = ({ className, value, onInput, onConfirm, confirmType, ...props }) => {
  const [ _value, _onInput ] = useInput(value, props.name, onInput)

  return (
    <TaroInput
      {...props}
      value={_value}
      onInput={_onInput}
      onClick={onConfirm}
      className={classNames(className, 'xrk-input')}
      data-testid="input"
    />
  )
}

export default Input
