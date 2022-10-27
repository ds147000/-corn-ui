/* eslint-disable no-unreachable */
/* eslint-disable no-magic-numbers */
// #if _APP === 'weapp'
import Taro, { usePageScroll } from '@tarojs/taro'
// #endif
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import ClassNames from 'classnames'
import { ViewProps } from '../../types/View'
import { judge } from './utils/judge'

export interface AffixProps extends ViewProps {
  position?: 'top' | 'bottom' | 'right' | 'left'
  onChange?(fixed: boolean): void
}

const Affix: React.FC<AffixProps> = ({ children, position = 'top', onChange, className, ...props }) => {
  const [ fixed, setFixed ] = useState(false)
  const [ boxStyle, setBoxStyle ] = useState<React.CSSProperties>({})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>()

  const oldFixed = useRef<boolean>(false)

  const _class = useMemo(() => {
    return ClassNames('corn-affix', fixed && `corn-affix-${position}`, className)
  }, [ fixed, position, className ])

  const changeFixed = useCallback((value: boolean): void => {
    setFixed((state) => {
      oldFixed.current = state
      return value
    })
  }, [])

  // #if _APP === 'weapp'
  const system = useRef(Taro.getSystemInfoSync())
  const timer = useRef<NodeJS.Timeout>()

  const checkFlexd = (): void => {
    const node = ref.current

    const rootRect = {
      top: 0,
      left: 0,
      bottom: system.current.windowHeight,
      right: system.current.windowWidth
    } as DOMRectReadOnly

    Taro.createSelectorQuery()
      .select('#' + node.uid)
      .fields({ size: true, rect: true }, (res) => {
        if (!res) return

        setBoxStyle({ height: res?.height, width: res?.width })
        const result = judge(res as unknown as DOMRect, rootRect, position, 0)
        changeFixed(result)
      })
      .exec()
  }

  usePageScroll(() => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => checkFlexd(), 10)
  })

  useEffect(() => {
    return (): void => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  // #else
  useEffect(() => {
    // eslint-disable-next-line no-unreachable
    const el: HTMLDivElement = ref.current
    const rootBounds = {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      top: 0,
      left: 0,
      bottom: window.innerHeight,
      right: window.innerWidth
    } as DOMRectReadOnly

    setBoxStyle({ height: el.offsetHeight, width: el.offsetWidth })

    function handleScroll(): void {
      const item = el.getBoundingClientRect()
      const result = judge(item, rootBounds, position, 0)
      changeFixed(result)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ position, changeFixed ])
  // #endif

  useEffect(() => {
    if (oldFixed.current !== fixed) {
      oldFixed.current = fixed
      onChange?.(fixed)
    }
  }, [ fixed, onChange ])

  return (
    <View style={boxStyle} ref={ref}>
      <View className={_class} {...props} >
        {children}
      </View>
    </View>
  )
}

export default Affix
