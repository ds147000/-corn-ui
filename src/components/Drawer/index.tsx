import React, { useMemo, useState } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ITouchEvent } from '../../types'

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
  className?: string
}

const Drawer: React.FC<DrawerProps> = ({
  visible,
  position = 'bottom',
  mask = true,
  maskClosable = true,
  onClose,
  onHide,
  className,
  children
}) => {
  const [ isEXC, setIsEXC ] = useState<boolean>(true)

  const _class = useMemo(() => {
    return classNames(
      'xrk-drawer-body',
      `xrk-drawer-${position}-${visible ? 'show' : 'hide'}`,
      `xrk-drawer-${position}`,
      className
    )
  }, [ position, visible, className ])

  const _maskClass = useMemo(() => {
    return classNames('xrk-drawer-mask', `xrk-drawer-mask-${visible ? 'show' : 'hide'}`)
  }, [ visible ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onAnimationEnd = (event: any): void => {
    const animationName: string = event.animationName ||
      event.detail?.animationName ||
      event.nativeEvent?.animationName ||
      event.target.className

    // eslint-disable-next-line no-magic-numbers
    if (animationName.toLocaleUpperCase().indexOf('HIDE') !== -1) {
      setIsEXC(true)
      onHide?.()
    } else {
      setIsEXC(false)
    }
  }

  const onClickMask = (): void => {
    if (maskClosable) onClose?.()
  }

  // useEffect(() => {
  //   if (visible === true && status !== 'show')
  //     setStatus('show')

  //   else if (visible === false && status === 'show')
  //     setStatus('hide')

  // }, [ visible ])

  if (visible === false && isEXC) {
    return null
  }

  return (
    <>
      {mask && (
        <View
          className={_maskClass}
          data-testid="mask"
          onClick={onClickMask}
          onTouchMove={onTouchMove}
          catchMove
        />
      )}
      <View className={_class} onAnimationEnd={onAnimationEnd} data-testid="body" >
        {children}
      </View>
    </>
  )
}

export const onTouchMove = (event: ITouchEvent): void => {
  event.preventDefault()
}

export default Drawer
