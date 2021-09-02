import React from 'react'
import { View } from '@tarojs/components'
import { useTabScroll } from './hook'
import { Item } from './item'

export interface TabItemPorps {
  title?: string
  onClick?(): void
  icon?: string
  active?: boolean
  message?: boolean
  url?: string
}

export interface TabProps {
  options: TabItemPorps[]
  currenIndex: number
  onChange?(index: number): void
}


const Tabs: React.FC<TabProps> = ({ options, currenIndex, onChange }) => {
  useTabScroll(currenIndex)

  return (
    <View className="xrk-tab xrk-f" data-testid="tab" >
      {options?.map((item, key) => (
        <Item
          {...item}
          active={currenIndex === key}
          key={item.title || item.icon}
          onClick={(): void => onChange?.(key)}
        />
      ))}
    </View>
  )
}

export default Tabs
