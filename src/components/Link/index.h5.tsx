import React from 'react'
import ClassName from 'classnames'
import { View, Text, ITouchEvent } from '@tarojs/components'
import { OpenMpLink } from './openmp'
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
  const children = target === 'View' ? <View {...props} className={_class} /> : <Text {...props} className={_class} />

  const onNavigate = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | ITouchEvent): void => {
    if (onBefor?.(to) === true || disable) {
      event.stopPropagation()
      event.preventDefault()
      return // 终止
    }

    onClick?.(event as ITouchEvent)

    if (replace && checkOpenMp(to) === false) { // 替换跳转
      window.location.replace(to)
      event.stopPropagation()
      event.preventDefault()
      return
    }
  }

  if (checkOpenMp(to)) { // 打开小程序
    return (
      <OpenMpLink
        target={target}
        onClick={onNavigate}
        appId={appId || Link.appId}
        path={to.slice(OpenHostSuffix.length)}
      >
        {children}
      </OpenMpLink>
    )
  }

  return (
    // eslint-disable-next-line react/forbid-elements
    <a href={to} onClick={onNavigate}>
      {children}
    </a>
  )
}

Link.appId = ''

export default Link
