/* eslint-disable no-magic-numbers */
/**
 * px单位转rem
 * @param {*} val
 * @returns
 */
const designWidth = 75
const remLen = 2

export function transformRem(val = 0): string {
  if (!val) return ''
  if (typeof val !== 'number') val = Number(val)

  return parseFloat((val / designWidth).toFixed(remLen)) + 'rem'
}

/**
 * 格式化金额
 * @param value
 * @param isReverse 是否获取原数
 * @returns
 */
export function formatMoney(value: string | number, isReverse = false): number {
  value = Number(value) || 0

  if (isReverse) {
    return Math.round(value * 100)
  } else {
    return Number((value / 100).toFixed(2))
  }
}
