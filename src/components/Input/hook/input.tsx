import { useContext, useEffect, useState } from 'react'
import { FromContext } from '../../../components/Form/context'

type OnInput = (e: React.ChangeEvent<HTMLInputElement>) => void

type UseInputResult = [ string, OnInput ]

export const useInput = (value?: string, name?:string, onInput?: OnInput): UseInputResult => {
  const [ internalValue, setInternalValue ] = useState<string>('')
  const formContext = useContext(FromContext)
  const _value = value ?? internalValue

  const _onInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInternalValue(e.target.value)
    onInput?.(e)
  }
  useEffect(() => {
    if (!name) return undefined

    formContext.add(name, (val: string ): void => setInternalValue(val || ''))

    return (): void => formContext.remove(name)
  }, [ name, formContext ])

  return [ _value, _onInput ]
}
