/* eslint-disable no-empty-function, @typescript-eslint/no-empty-function */
import { createContext } from 'react'

export type SetValue = (value?: unknown) => void

const formContextValue = {
  add(_name: string, _resCb: SetValue): void {
  },
  remove(_name): void {
  }
}

export const FromContext = createContext(formContextValue)
