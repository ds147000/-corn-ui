import React, { useEffect, useRef } from 'react'
import { View, Text } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import { LinkTarget } from './index'
import { getRanDomId } from '../../utils'

interface OpenMpLinkProps extends ViewProps {
  target: LinkTarget
  appId: string
  path: string
}

export const OpenMpLink: React.FC<OpenMpLinkProps> = ({ target, appId, path, onClick, children, ...props }) => {
  const el = useRef<HTMLDivElement>()

  useEffect(() => {
    const _el = el.current as HTMLDivElement

    const width = _el.offsetWidth
    const height = _el.offsetHeight
    const id = getRanDomId()

    _el.innerHTML = getTemplate(appId, path, id, width, height)
    const btn = document.getElementById(id)

    if (!btn) return

    function onSuccess(e): void {
      onClick?.(e)
    }

    btn.addEventListener('launch', onSuccess)

    // eslint-disable-next-line consistent-return
    return (): void => {
      btn.removeEventListener('launch', onSuccess)
    }

  }, [ onClick, appId, path ])


  const content = (
    <>
      <View className="xrk-link-mask" ref={el} />
      {children}
    </>
  )

  if (target === 'View')
    return <View {...props} className="xrk-link-mp" data-testid="openmp" >{content}</View>

  return <Text {...props} className="xrk-link-mp" data-testid="openmp">{content}</Text>
}

/** 获取模板字符串 */
function getTemplate(appId: string, path: string, id: string, width: number, height: number): string {
  return `
    <wx-open-launch-weapp
      username="${appId}"
      path="${path}"
      style="width: ${width}px; height: ${height}px;opacity: 0;"
      id=${id}
    >
      <template type="text/wxtag-template">
        <button style="width: ${width}px; height: ${height}px;"></button>
      </template>
    </wx-open-launch-weapp>
  `
}
