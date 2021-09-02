import React, { useMemo } from 'react'
import ClassName from 'classnames'
import { ITouchEvent } from '@tarojs/components'
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

  const _class = useMemo(() => {
    return ClassName('xrk-link', `xrk-link-${type}`, target === 'View' && 'xrk-link-view', className)
  }, [ className, type, target ])

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
      />
    )
  }

  return (
    // eslint-disable-next-line react/forbid-elements, @typescript-eslint/no-explicit-any
    <a {...props as any} href={to} onClick={onNavigate} className={_class} />
  )

}

Link.appId = ''

export default Link
