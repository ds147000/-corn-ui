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

/**
 * 时间字符串转时间戳
 * @param date
 */
export function DateToTimestamp(date: Date | string | number): number {

  if (typeof date === 'number')
    return date

  else if (typeof date === 'string')
    return new Date(date.replace(/-/, '/')).getTime()

  else if (date instanceof Date)
    return date.getTime()

  else
    return 0
}


/**
 * 补全数字长度
 * @param {*} val
 */
export function fixNumber(val: number | string, len = 2): string {
  let valString = String(val)
  if (valString.length >= len) return valString

  const diffLen = len - valString.length

  for(let i = 0; i < diffLen; i++) valString = '0' + valString
  return valString
}

const ID_MAP = { number: 0 }

export function getRanDomId(): string {
  return  '__xrk' + ID_MAP.number++
}

export function isWatch(): boolean {
  return /MicroMessenger/i.test(window.navigator.userAgent)
}
