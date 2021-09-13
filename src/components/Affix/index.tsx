/* eslint-disable no-unreachable */
/* eslint-disable no-magic-numbers */
// #if _APP === 'weapp'
import Taro from '@tarojs/taro'
// #endif
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import ClassNames from 'classnames'
import { judge } from './utils/judge'

export interface AffixProps extends ViewProps {
  position?: 'top' | 'bottom' | 'right' | 'left'
  onChange?(fixed: boolean): void
}

const threshold = [ 0.01, 0.1, 0.9, 0.99 ]

const Affix: React.FC<AffixProps> = ({ children, position = 'top', onChange, className, ...props }) => {
  const [ fixed, setFixed ] = useState(false)
  const [ boxStyle, setBoxStyle ] = useState<React.CSSProperties>({})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>()
  const oldFixed = useRef<boolean>(false)

  const _class = useMemo(() => {
    return ClassNames('xrk-affix', fixed && `xrk-affix-${position}`, className)
  }, [ fixed, position, className ])

  const changeFixed = useCallback((value: boolean): void => {
    setFixed((state) => {
      oldFixed.current = state
      return value
    })
  }, [])

  useEffect(() => {
    let isInit = true

    // #if _APP === 'weapp'
    const node = ref.current
    let WeappIntersection: Taro.IntersectionObserver | null = null


    Taro.nextTick(() => {
      const system = Taro.getSystemInfoSync()
      const rootRect = { top: 0, left: 0, bottom: system.windowHeight, right: system.windowWidth } as DOMRectReadOnly

      Taro.createSelectorQuery()
        .select('#' + node.uid)
        .fields({ size: true, rect: true }, (res) => {
          if (!res) return

          setBoxStyle({ height: res?.height, width: res?.width })
          const result = judge( res as unknown as DOMRect, rootRect, position, 0)
          changeFixed(result)
        })
        .exec()

      const page = Taro.getCurrentInstance().page
      WeappIntersection = Taro.createIntersectionObserver( page as Taro.General.IAnyObject, {
        thresholds: threshold, observeAll: true
      })

      WeappIntersection
        .relativeToViewport({ top: 0, left: 0, bottom: 0, right: 0 })
        .observe('#' + node.uid, (res): void => {
          const result = judge( res.boundingClientRect as DOMRect, rootRect, position, isInit ? 1 : 0)
          isInit = false
          changeFixed(result)
        })
    })

    return (): void => {
      WeappIntersection?.disconnect()
    }

    // #else
    // eslint-disable-next-line no-unreachable
    const el: HTMLDivElement = ref.current
    setBoxStyle({ height: el.offsetHeight, width: el.offsetWidth })

    const Intersection = new IntersectionObserver(
      (res) => {
        const item = res[0]
        const result = judge(
          item.boundingClientRect,
          item.rootBounds as DOMRectReadOnly,
          position,
          isInit ? 1 : 0
        )
        isInit = false
        // eslint-disable-next-line no-console
        changeFixed(result)
      },
      { threshold: threshold, root: null, rootMargin: '0px' }
    )

    Intersection.observe(el)

    return (): void => {
      Intersection.unobserve(el)
    }
    // #endif
  }, [ position, changeFixed ])

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
