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
