/* eslint-disable no-magic-numbers */
/* eslint-disable no-unreachable */
// #if _APP === 'weapp'
import Taro from '@tarojs/taro'
// #endif

export interface ElementRect {
  width: number
  height: number
  top: number
  bottom: number
  left: number
  right: number
  offsetLeft: number
  offsetTop: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export async function getElementRect(el: any): Promise<ElementRect> {
  const result: ElementRect = {
    width: 0,
    height: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    offsetLeft: 0,
    offsetTop: 0
  }
  // #if _APP !== 'weapp'
  const _el = el as HTMLDivElement
  const clientRect = _el.getBoundingClientRect()
  result.bottom = clientRect.bottom
  result.top = clientRect.top
  result.left = clientRect.left
  result.right = clientRect.right
  result.height = clientRect.height
  result.width = clientRect.width
  result.offsetLeft = _el.offsetLeft
  result.offsetTop = _el.offsetTop
  return result

  // #else
  return new Promise((res) => {
    Taro.createSelectorQuery()
      .select(`#${el.uid}`)
      .fields({ size: true, properties: [ 'offsetLeft', 'offsetTop' ] }, (response) => {
        res(response as ElementRect)
      })
  })
  // #endif
}
