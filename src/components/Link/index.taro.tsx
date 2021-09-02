import React from 'react'
import Taro from '@tarojs/taro'
import ClassName from 'classnames'
import { View, Text, ITouchEvent } from '@tarojs/components'
import type { ViewProps } from '@tarojs/components/types/View'
import type { LINK } from './index'
import { checkOpenMp, OpenHostSuffix } from './utils'

const Link: LINK = ({
  to,
  type = 'normal',
  target = 'Text',
  replace,
  onBefor,
  onClick,
  appId,
  disable,
  className,
  ...props
}) => {
  const _class = ClassName(className, 'xrk-link', `xrk-link-${type}`)

  const onNavigate = (event: ITouchEvent): void => {
    if (onBefor?.(to) === true || disable) return // 终止
    onClick?.(event)

    if (checkOpenMp(to)) {
      Taro.navigateToMiniProgram({ path: to.slice(OpenHostSuffix.length), appId: (appId || Link.appId) })
      return
    }

    if (replace) { // 替换跳转
      Taro.redirectTo({ url: to })
      return
    }

    Taro.navigateTo({ url: to }) // 普遍跳转
  }

  const _props: ViewProps = { ...props, className: _class, onClick: onNavigate }

  if (target === 'View') {
    return (<View {..._props} />)
  }

  return (<Text {..._props} />)
}

Link.appId = ''

export default Link
