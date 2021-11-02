import { View } from '@tarojs/components'
import React from 'react'

export interface SearchProps {
  /** 风格类型*/
  type?: 'default' | 'light'
  /** 启用返回按钮 */
  back?: boolean
  /** 尾部内容 */
  suffix?: React.ReactNode
  /** 可输入 */
  openInput?: boolean
  /** 点击输入框事件 */
  onClick?(): void
  /** 输入发生改变事件 */
  onInput?(value: string): void
}

const Search: React.FC = () => {
  return (
    <View />
  )
}

export default Search
