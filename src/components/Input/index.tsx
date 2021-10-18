import React from 'react'
import { Input as TaroInput } from '@tarojs/components'
import classNames from 'classnames'
import { InputProps } from '../../types/Input'

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <TaroInput {...props} className={classNames(className, 'xrk-input')} />
}

export default Input
