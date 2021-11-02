import { View } from '@tarojs/components'
import React from 'react'

export interface SearchProps {
  type?: 'default' | 'light'
  back?: boolean
  suffix?: React.ReactNode
  onClick?(): void
  input?: boolean
  onInput?(value: string): void
}

const Search: React.FC = () => {
  return (
    <View />
  )
}

export default Search
