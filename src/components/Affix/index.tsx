/* eslint-disable no-unreachable */
/* eslint-disable no-magic-numbers */
// #if _APP === 'weapp'
import Taro from '@tarojs/taro'
// #endif
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import ClassNames from 'classnames'
import { judge } from './utils/judge'

export interface AffixProps {
  position?: 'top' | 'bottom' | 'right' | 'left'
  onChange?(fixed: boolean): void
}

const threshold = [ 0.01, 0.1, 0.9, 0.99 ]

const Affix: React.FC<AffixProps> = ({ children, position = 'top', onChange }) => {
  const [ fixed, setFixed ] = useState(false)
  const [ boxStyle, setBoxStyle ] = useState<React.CSSProperties>({})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>()
  const oldFixed = useRef<boolean>(false)

  const _class = useMemo(() => {
    return ClassNames('xrk-affix', fixed && `xrk-affix-${position}`)
  }, [ fixed, position ])

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
      Taro.createSelectorQuery()
        .select('#' + node.uid)
        .fields({ size: true, rect: true }, (res) => {
          if (!res) return
          setBoxStyle({ height: res?.height, width: res?.width })
        })
        .exec()

      const page = Taro.getCurrentInstance().page
      WeappIntersection = Taro.createIntersectionObserver(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        page as any, { thresholds: threshold, observeAll: true }
      )

      WeappIntersection.relativeToViewport({ bottom: 0, top: 0, left: 0, right: 0 })
        .observe('#' + node.uid, (res): void => {
          const result = judge(res.boundingClientRect as unknown as DOMRect, position, isInit ? 1 : 0)
          isInit = false
          changeFixed(result)
        })
    })

    return (): void => {
      WeappIntersection?.disconnect()
    }

    // #else
    // eslint-disable-next-line no-unreachable
    const el: HTMLDivElement = ref.current._reactInternals.child.stateNode
    setBoxStyle({ height: el.offsetHeight, width: el.offsetWidth })

    const Intersection = new IntersectionObserver(
      (res) => {
        const item = res[0]
        const result = judge(item.boundingClientRect, position, isInit ? 1 : 0)
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
      <View className={_class} >
        {children}
      </View>
    </View>
  )
}

export default Affix
