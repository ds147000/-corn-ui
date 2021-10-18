import React, { useMemo } from 'react'
import ClassName from 'classnames'
import { ITouchEvent } from '@tarojs/components'
import { Link as RouterLink } from 'react-router-dom'
import { OpenMpLink } from './openmp'
import type { LINK } from './index'
import { checkExtendsDomain, checkOpenMp, OpenHostSuffix } from './utils'


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
    if (_onBefor?.(to) || disabled) {
      event.preventDefault()
      return // 终止
    }

    onClick?.(event as ITouchEvent)
    if (checkExtendsDomain(to)) {
      event.preventDefault()
      window.location.href = to
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <RouterLink {...props as any} to={to} onClick={onNavigate} className={_class} />
  )

}


Link.appId = ''
Link.onBefor = (): boolean => false

export default Link
