/* eslint-disable no-magic-numbers */
import React, { useEffect, useMemo, useState } from 'react'
import { Text, View, Image } from '@tarojs/components'
import { ToastProps } from './typing'


export const ToastView: React.FC<ToastProps> = ({ title, onClose, success, icon, image, duration }) => {
  const [ isHideAnimated, setIsHideAnimated ] = useState<0 | 1 | 2>(0)

  const iconEl = useMemo((): JSX.Element | null => {
    if (image) return <Image src={image} className="corn-toast-icon" mode="aspectFill" />

    switch(icon) {
      case 'success':
        return (
          <Image
            className="corn-toast-icon"
            mode="aspectFill"
            src="https://assets.xrkmm.cn/u/4000002499670412/065dca5c-f5f5-4708-9acd-d1bd513dcb2b.png"
          />
        )

      default:
        return null
    }

  }, [ icon, image ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onAnimationEnd = (event: any): void => {
    if (event.animationName === 'toastHide') {
      setIsHideAnimated(2)
      onClose?.()
    }
  }

  useEffect(() => {
    success?.()

    setIsHideAnimated(0)
    const timer = setTimeout(() => {
      setIsHideAnimated(1)
    }, duration)

    return (): void => clearTimeout(timer)

  }, [ duration, success ])

  if (isHideAnimated === 2) return null

  return (
    <View className={`corn-toast-item ${isHideAnimated ? 'hide' : 'show'}`} onAnimationEnd={onAnimationEnd} >
      {iconEl}
      <Text>{title}</Text>
    </View>
  )
}
