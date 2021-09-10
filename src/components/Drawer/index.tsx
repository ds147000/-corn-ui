import React, { useCallback, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'

type AnimateStatus = 'show' | 'hide' | 'over'

export interface DrawerProps {
  /** 是否显示 */
  visible: boolean
  /** 弹出的方向，可以设置左右上下中间, 默认 bottom */
  position?: 'left' | 'right' | 'bottom' | 'top' | 'center'
  /** 是否显示遮罩层 */
  mask?: boolean
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean
  /** 关闭回调 */
  onClose?(): void
  /** 完全隐藏回调 */
  onHide?(): void
}

const Drawer: React.FC<DrawerProps> = ({
  visible,
  position = 'bottom',
  mask = true,
  maskClosable = true,
  onClose,
  onHide,
  children
}) => {
  const [ status, setStatus ] = useState<AnimateStatus>('over')
  const _class = useMemo(() => {
    return classNames(
      'xrk-drawer-body',
      status !== 'over' && `xrk-drawer-${position}-${status}`,
      `xrk-drawer-${position}`
    )
  }, [ position, status ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onAnimationEnd = useCallback((event: any) => {
    const animationName: string = event.animationName ||
      event.detail?.animationName ||
      event.nativeEvent?.animationName ||
      event.target.className

    // eslint-disable-next-line no-magic-numbers
    if (animationName.toLocaleUpperCase().indexOf('HIDE') !== -1) setStatus('over')
  }, [])

  const onClickMask = (): void => {
    if (maskClosable) onClose?.()
  }

  useEffect(() => {
    if (visible === true && status !== 'show')
      setStatus('show')

    else if (visible === false && status === 'show')
      setStatus('hide')

  }, [ visible, status ])

  if (visible === false && status === 'over') {
    onHide?.()
    return null
  }

  return (
    <>
      {mask && (
        <View
          className={`xrk-drawer-mask xrk-drawer-mask-${status}`}
          data-testid="mask"
          onClick={onClickMask}
        />
      )}
      <View className={_class} onAnimationEnd={onAnimationEnd} data-testid="body" >
        {children}
      </View>
    </>
  )
}

export default Drawer
