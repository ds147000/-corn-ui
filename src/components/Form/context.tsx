/* eslint-disable no-empty-function, @typescript-eslint/no-empty-function */
import { createContext } from 'react'

export type SetValue = (value?: unknown) => void

export type FormContextValue = {
  add(name: string, cb: SetValue): void
  remove(name: string): void
}

const formContextValue: FormContextValue = {
  add(_name: string, _resCb: SetValue): void {
  },
  remove(_name): void {
  }
}

export const FromContext = createContext(formContextValue)
