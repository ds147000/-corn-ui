import React, { useCallback, useMemo } from 'react'
import { View } from '@tarojs/components'
import Button from '../Button'
import { useTabScroll } from './hook'
import { Item } from './item'
import { getRanDomId } from '../../utils'

export namespace TAB {
  export type Change = (index?: number) => void

  export interface Props {
    /** Tab选项数组 */
    options: Item[]
    /** 当前激活索引 */
    currenIndex: number
    /** 风格 */
    type?: 'button' | 'default'
    /** 索引发生改变回调 */
    onChange?(index: number): void
  }

  export interface Item {
    title?: string
    onClick?(): void
    icon?: string
    active?: boolean
    message?: boolean
    url?: string
  }
}


const Tabs: React.FC<TAB.Props> = ({ options, currenIndex, type = 'default', onChange }) => {
  const id = useMemo(() => getRanDomId(), [])
  useTabScroll(id, currenIndex)

  const renderItem = useCallback((item: TAB.Item, active: boolean, _onChange: TAB.Change): JSX.Element => {
    if (type === 'button') {
      return (
        <Button
          type={active ? 'primary' : 'light'}
          onClick={_onChange}
          key={item.title}
          className={active ? '__active' : ''}
        >
          {item.title}
        </Button>
      )
    }

    return (
      <Item
        {...item}
        active={active}
        key={item.title || item.icon}
        onClick={_onChange}
      />
    )
  }, [ type ])

  return (
    <View id={id} className="xrk-tab xrk-f" data-testid="tab" >
      {options?.map((item, key) => renderItem(item, currenIndex === key, (): void => onChange?.(key)))}
    </View>
  )
}

export default Tabs
