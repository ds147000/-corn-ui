import React from 'react'
import { Textarea as TaroTextarea, View } from '@tarojs/components'
import { TextareaProps as TaroTextareaProps } from '../../types/Textarea'
import { useInput } from '../Input/hook/input'

const CLOSE_MAX_LEN = -1
const DEFAULT_MAX_LEN = 300

export interface TextareaProps extends TaroTextareaProps {
  floor?: React.ReactNode
}

const Textarea: React.FC<TextareaProps> = ({ floor, maxlength = DEFAULT_MAX_LEN, value, onInput, ...props }) => {
  const [ _value, _onInput ] = useInput(value, props.name, onInput)

  return (
    <View className="corn-textarea" >
      <TaroTextarea
        className="corn-textarea-conter"
        value={_value}
        onInput={_onInput}
        maxlength={maxlength}
        {...props}
        data-testid="textarea"
      />
      {maxlength !== CLOSE_MAX_LEN && (
        <View className="corn-textarea-number" >{(_value || '').length}/{maxlength}</View>
      )}
      <View className="corn-textarea-floor" >
        {floor}
      </View>
    </View>
  )
}

export default Textarea
