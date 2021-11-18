/* eslint-disable import/export */
// #if _APP === 'weapp'
import Taro from '@tarojs/taro'

let systemWidth = 0

export function getScale(value: number): number {
  const MAX_WINDOW_WEITDH = 640
  const UI_WIDTH = 750
  if (!systemWidth) systemWidth = Taro.getSystemInfoSync().screenWidth

  const maxWidth = (systemWidth > MAX_WINDOW_WEITDH ? MAX_WINDOW_WEITDH : systemWidth)
  return maxWidth / UI_WIDTH * value
}

// #else

export function getScale(value: number): number {
  const MAX_WINDOW_WEITDH = 640
  const UI_WIDTH = 750

  if (typeof window === 'undefined') return value
  const maxWidth = (window.innerWidth > MAX_WINDOW_WEITDH ? MAX_WINDOW_WEITDH : window.innerWidth)
  return maxWidth / UI_WIDTH * value
}

// #endif
