import React from 'react'
import classNames from 'classnames'
import { useInput } from './hook/input'

interface InputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'value'> {
  value?: string
}

const Input: React.FC<InputProps> = ({ className, value, onChange, ...props }) => {
  const [ _value, _onInput ] = useInput(value, props.name, onChange)
  return (
    <input
      {...props}
      value={_value}
      onChange={_onInput}
      className={classNames(className, 'corn-input')}
      data-testid="input"
    />
  )
}

export default Input
