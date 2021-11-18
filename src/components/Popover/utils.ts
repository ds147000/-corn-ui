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
  // #if _APP !== 'weapp'
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
    const query = Taro.createSelectorQuery()

    query.select(`#${el.uid}`).boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec((response) => {
      res({
        ...response[0],
        offsetTop: response[0].top + response[1].scrollTop,
        offsetLeft: response[0].left + response[1].scrollLeft
      })
    })
  })
  // #endif
}
