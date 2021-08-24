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

const ID_MAP = 'qwertyuiopasdfghjklzxcvbnm'

export function getRanDomId(): string {
  let str = ''

  for(let i = 0; i < 8; i++) {
    const index = Math.floor(Math.random() * ID_MAP.length)
    str += ID_MAP[index]
  }

  return str
}
