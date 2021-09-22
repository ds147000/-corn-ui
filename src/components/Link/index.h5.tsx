import React, { useMemo } from 'react'
import ClassName from 'classnames'
import { ITouchEvent } from '@tarojs/components'
import { OpenMpLink } from './openmp'
import type { LINK } from './index'
import { checkOpenMp, OpenHostSuffix } from './utils'

const Link: LINK = ({
  to = '',
  type = 'normal',
  target = 'Text',
  replace,
  onBefor,
  onClick,
  appId,
  disabled,
  className,
  ...props
}) => {

  const _class = useMemo(() => {
    return ClassName('xrk-link', `xrk-link-${type}`, target === 'View' && 'xrk-link-view', className)
  }, [ className, type, target ])

  const _onBefor = onBefor || Link.onBefor

  const onNavigate = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | ITouchEvent): void => {
    event.preventDefault()

    if (_onBefor?.(to) === true || disabled) {
      return // 终止
    }

    onClick?.(event as ITouchEvent)

    if (replace && checkOpenMp(to) === false) { // 替换跳转
      Link.history.replace(to)
      return
    }

    Link.history.push(to)
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
Link.onBefor = (): boolean => false
Link.history = {
  push(url): void {
    window.location.href = url
  },
  replace(url): void {
    window.location.replace(url)
  }
}

export default Link
