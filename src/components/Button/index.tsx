import React, { useMemo } from 'react'
import ClassNames from 'classnames'
import { Button as TaroButton } from '@tarojs/components'
import Link, { LinkProps } from '../Link'
import { ITouchEvent } from '../../types'

/** 按钮大小，max: 最大， big: 超大，large：大，middle：中，small：小，mini */
export type ButtonSize = 'max' | 'big' | 'large' | 'middle' | 'small' | 'mini'
export type ButtonType = 'primary' | 'warn' | 'error' | 'link' | 'pop' | 'default' | 'light' | 'stop'

export interface ButtonProps extends LinkProps {
  /** 按钮大小，max: 最大， big: 超大，large：大，middle：中，small：小，mini */
  size?: ButtonSize
  /** 按钮风格类型 */
  type?: ButtonType
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
  /** 表单点击行为 */
  formType?: 'submit' | 'reset'
  /** 开启固定宽度 */
  auto?: boolean
  /** 点击事件 */
  onClick?(e: ITouchEvent): void
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
  formType,
  auto,
  ...props
}) => {
  const isIcon = icon !== undefined
  const isChildren = children !== undefined

  const _class = useMemo(() => {
    return ClassNames(
      'corn-btn',
      'corn-if corn-ac corn-jc',
      `corn-btn-${size}`,
      `corn-btn-${type}`,
      {
        'corn-btn-block': block,
        'corn-btn-ghost': ghost,
        'corn-btn-icon': isIcon && !isChildren,
        'corn-btn-child-icon': isIcon && isChildren,
        'corn-btn-disabled': disabled,
        'corn-btn-auto': auto
      },
      className
    )
  }, [ size, type, block, ghost, disabled, className, auto, isIcon, isChildren ])

  const _onClick = (e: ITouchEvent): void => {
    if (disabled) return

    onClick?.(e)
  }



  if (to) {
    return (
      <Link {...props} target="Text" to={to} className={_class} onClick={_onClick} disabled={disabled} type="default" >
        {children}
        {icon}
      </Link>
    )
  }

  return (
    <TaroButton {...props} formType={formType} className={_class} onClick={_onClick} >
      {children}
      {icon}
    </TaroButton>
  )
}

export default Button
