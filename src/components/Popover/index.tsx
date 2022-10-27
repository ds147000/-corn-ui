import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { ElementRect, getElementRect } from './utils'

export type PopoverRender = (rect: ElementRect) => JSX.Element

export interface PopoverProps {
  content: PopoverRender
  className?: string
  style?: React.CSSProperties
}

const Popover: React.FC<PopoverProps> = ({ children, className, style, content }) => {
  const [ visibility, setVisibility ] = useState(false)
  const [ isHide, setIsHide ] = useState(false)
  const [ rect, setRect ] = useState<ElementRect>({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 0,
    width: 0,
    offsetLeft: 0,
    offsetTop: 0
  })
  const El = useRef()

  const onChange = async (): Promise<void> => {
    if (visibility === false) {
      const _rect = await getElementRect(El.current)
      setRect(_rect)
    }

    setVisibility(!visibility)
  }

  const onClose = useCallback(() => setVisibility(false), [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onAnimatedEnd = useCallback((event: any) => {
    const animationName: string = event.animationName ||
      event.detail?.animationName ||
      event.nativeEvent?.animationName ||
      event.target.className

    if (animationName.toLocaleUpperCase().indexOf('HIDE') !== -1) setIsHide(false)
  }, [])

  useEffect(() => {
    if (visibility) setIsHide(true)
  }, [ visibility ])

  return (
    <>
      {isHide && (
        <>
          <View
            className="corn-popover-plane"
            onClick={onClose}
            onTouchStart={onClose}
            data-testid="mask"
          />
          <View
            className={visibility ? 'corn-popover-show' : 'corn-popover-hide'}
            onAnimationEnd={onAnimatedEnd}
            onClick={onClose}
            data-testid="centent"
          >
            {content?.(rect)}
          </View>
        </>
      )}
      <View className={`corn-popover ${className || ''}`} style={style} onClick={onChange} ref={El} >
        {children}
      </View>
    </>
  )
}

export default Popover
