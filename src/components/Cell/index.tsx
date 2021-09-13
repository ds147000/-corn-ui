import React, { useCallback } from 'react'
import ClassNames from 'classnames'
import { View, Text } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import Icon from '../Icon'
import Link, { LinkProps } from '../Link'
import CellList from './list'

export interface CellProps extends ViewProps, LinkProps {
  /** 标题 */
  label?: string | React.ReactNode
  /** 内容 */
  value?: string | React.ReactNode
  /** 内容为空占位提示 */
  placeholder?: string | React.ReactNode
  /** 是否显示箭头 */
  arrow?: boolean
  /** 尾缀内容 */
  suffix?: React.ReactNode | string
  /** 禁用 */
  disabled?: boolean
  /** 跳转链接，填写启用A链接行为。同时会显示箭头 */
  to?: string
}

type CellView =  { List: typeof CellList }



const Cell: React.FC<CellProps> & CellView = ({
  label, value, arrow, suffix,
  disabled, to, children, onClick,
  className, placeholder, ...props
}) => {

  const _onClick = useCallback((event): void => {
    if (disabled) return
    onClick?.(event)
  }, [ onClick, disabled ])

  const _props: ViewProps = {
    className: ClassNames('xrk-cell xrk-f xrk-ac', disabled && 'xrk-cell-disable', className),
    onClick: _onClick,
    ...props
  }

  const showArrow = (arrow || Boolean(to)) && arrow !== false
  const showPlaceholder = Boolean(value) === false && Boolean(children) === false

  const content = (
    <>
      <View className="xrk-cell-label">{label}</View>
      <View className="xrk-cell-value">
        {value}{children}
        {showPlaceholder && <Text className="xrk-cell-placeholder">{placeholder}</Text>}
      </View>
      <View className="xrk-cell-suffix xrk-f xrk-ac">
        {suffix}
        {showArrow && <Icon name="big-right" data-testid="arrow" />}
      </View>
    </>
  )

  if (to)
    return (<Link {..._props} to={to} disabled={disabled} target="View" >{content}</Link>)

  return (<View {..._props} >{content}</View>)
}

Cell.List = CellList

export default Cell
