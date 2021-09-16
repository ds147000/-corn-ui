import React, { useMemo } from 'react'
import ClassNames from 'classnames'
import { View } from '@tarojs/components'
import Link, { LinkProps } from '../Link'

/** 按钮大小，max: 最大， big: 超大，large：大，middle：中，small：小，mini */
export type ButtonSize = 'max' | 'big' | 'large' | 'middle' | 'small' | 'mini'

export interface ButtonProps extends LinkProps {
  /** 按钮大小，max: 最大， big: 超大，large：大，middle：中，small：小，mini */
  size?: ButtonSize
  /** 按钮风格类型 */
  type?: 'primary' | 'warn' | 'error' | 'link' | 'pop' | 'default'
  /** 图标 */
  icon?: React.ReactNode
  /** 将按钮宽度调整为其父宽度的选项	 */
  block?: boolean
  /** 镂空风格 */
  ghost?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 跳转链接，填写启用A链接行为 */
  to?: string
  /** 点击事件 */
  onClick?(): void
}

const Button: React.FC<ButtonProps> = ({
  size = 'middle',
  type = 'primary',
  block,
  ghost,
  disabled,
  to,
  onClick,
  icon,
  children,
  className,
  ...props
}) => {
  const isIcon = icon !== undefined
  const isChildren = children !== undefined

  const _class = useMemo(() => {
    return ClassNames(
      'xrk-btn',
      'xrk-if xrk-ac xrk-jc',
      `xrk-btn-${size}`,
      `xrk-btn-${type}`,
      {
        'xrk-btn-block': block,
        'xrk-btn-ghost': ghost,
        'xrk-btn-icon': isIcon && !isChildren,
        'xrk-btn-child-icon': isIcon && isChildren,
        'xrk-btn-disabled': disabled
      },
      className
    )
  }, [ size, type, block, ghost, disabled, isIcon, isChildren, className ])

  const _onClick = (): void => {
    if (disabled) return

    onClick?.()
  }



  if (to) {
    return (
      <Link target="Text" {...props} to={to} className={_class} onClick={_onClick} disabled={disabled} type="default" >
        {children}
        {icon}
      </Link>
    )
  }

  return (
    <View className={_class} onClick={_onClick} >
      {children}
      {icon}
    </View>
  )
}

export default Button
