import React, { useCallback, useMemo, useRef } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import Button from '../Button'
import { useTabScroll } from './hook'
import { Item } from './item'

export namespace TAB {
  export type Change = (index?: number) => void

  export interface Props {
    /** Tab选项数组 */
    options: Item[]
    /** 当前激活索引 */
    currenIndex: number
    /** 风格 */
    type?: 'button' | 'default'
    /** 尺寸大小, 只在类型为 default 情况下生效 */
    size?: 'large' | 'middle'
    /** 索引发生改变回调 */
    onChange?(index: number): void
  }

  export interface Item {
    id?: string
    title?: string
    onClick?(): void
    icon?: string
    active?: boolean
    message?: boolean
    url?: string
  }
}


const Tabs: React.FC<TAB.Props> = ({ options, currenIndex, size = 'middle', type = 'default', onChange }) => {
  const El = useRef<HTMLDivElement>()
  const _class = useMemo(() => classNames(
    'corn-tab corn-f',
    `corn-tab-${type}`,
    `corn-tab-${size}`,
  ), [ type, size ])

  useTabScroll(El as React.MutableRefObject<HTMLDivElement>, currenIndex)

  const renderItem = useCallback((item: TAB.Item, active: boolean, _onChange: TAB.Change): JSX.Element => {
    const key = item.id || item.title || item.icon
    const onClick = (): void => _onChange()

    if (type === 'button') {
      return (
        <Button
          type={active ? 'primary' : 'light'}
          onClick={onClick}
          key={key}
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
        key={key}
        onClick={_onChange}
      />
    )
  }, [ type ])

  return (
    <View ref={El} className={_class} data-testid="tab" >
      {options?.map((item, key) => renderItem(item, currenIndex === key, (): void => onChange?.(key)))}
    </View>
  )
}

export default Tabs
