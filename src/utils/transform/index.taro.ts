import Taro from '@tarojs/taro'

export default function transformRem(val = 0): string {
  if (!val) return ''

  return Taro.pxTransform(val)
}
