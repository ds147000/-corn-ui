import React from 'react'

export type CheckBoxContextValue = {
  values?: string[]
  onCheck?(check: boolean, value: string): void
}

const DDEFAULT_CHECKBOX_CONTEXT_VALUE: CheckBoxContextValue = {}

export const CheckBoxContext = React.createContext(DDEFAULT_CHECKBOX_CONTEXT_VALUE)
