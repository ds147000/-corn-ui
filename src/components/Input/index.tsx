import React from 'react'
import { Input as TaroInput } from '@tarojs/components'
import classNames from 'classnames'
import { InputProps } from '../../types/Input'
import { FromContext } from '../Form/context'
import { BaseEventOrig } from '../../types'

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const [ internalValue, setInternalValue ] = React.useState<string>('')
  const formContext = React.useContext(FromContext)
  const _value = props.value ?? internalValue
  const _name = props.name

  const onInput = (e: BaseEventOrig): void => {
    if (props.value === undefined) setInternalValue(e.detail.value)
    props.onInput?.(e)
  }

  React.useEffect(() => {
    if (!_name) return undefined

    formContext.add(_name, (val: string): void => setInternalValue(val))

    return (): void => formContext.remove(_name)
  }, [ _name, formContext ])

  return (
    <TaroInput
      {...props}
      value={_value}
      onInput={onInput}
      className={classNames(className, 'xrk-input')}
      data-testid="input"
    />
  )
}

export default Input
