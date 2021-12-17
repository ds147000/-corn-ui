/* eslint-disable no-magic-numbers */
import React, { useMemo } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { ElementRect } from '../Popover/utils'
import { TOOTIPS } from './index'
import { getScale } from './utils'

type Position = {
  top: number
  left: number
}

export interface TooltipListProps extends TOOTIPS.Props {
  rect: ElementRect
}

const TooltipList: React.FC<TooltipListProps> = ({ list, onClick, align = 'bottom', rect, moveX = 0, moveY = 0 }) => {
  const _listClass = useMemo(() => {
    return classNames('xrk-tooltip', 'xrk-tooltip-' + align)
  }, [ align ])
  const _arrowClass = useMemo(() => classNames('xrk-tooltip-arrow', 'xrk-tooltip-arrow-' + align), [ align ])

  const arrowPosition = getArrowPosition(rect, align)
  const listPosition = getListPosition(rect, align)

  return (
    <>
      {/* 箭头 */}
      <View
        className={_arrowClass}
        style={{ top: arrowPosition.top, left: arrowPosition.left }}
      />
      {/* 列表 */}
      <View
        className={_listClass}
        style={{ top: listPosition.top + moveY, left: listPosition.left + moveX }}
      >
        {list.map((item, key) => (
          <View
            className={classNames(
              'xrk-tooltip-item',
              'xrk-f xrk-ac xrk-jc',
              item.type === 'active' && 'xrk-tooltip-active'
            )}
            key={item.text + String(key)}
            onClick={(): void => onClick?.(item, key)}
          >
            {item.text}
          </View>
        ))}
      </View>
    </>
  )
}

const LIST_WIDTH = 180 / 2
const BOTTOM_MOVE = 10



export function getArrowPosition(rect: ElementRect, align: TOOTIPS.Align): Position {
  if (align === 'bottom') {
    return {
      top: rect.top + rect.height,
      left: rect.left + (rect.width / 2)
    }
  }

  return {
    top: rect.top,
    left: rect.left + (rect.width / 2)
  }
}

export function getListPosition(rect: ElementRect, align: TOOTIPS.Align): Position {
  if (align === 'bottom') {
    return {
      top: rect.top + rect.height + getScale(BOTTOM_MOVE),
      left: rect.left + (rect.width / 2) - getScale(LIST_WIDTH)
    }
  }
  return {
    top: rect.top,
    left: rect.left + (rect.width / 2) - getScale(LIST_WIDTH)
  }
}



export default TooltipList
