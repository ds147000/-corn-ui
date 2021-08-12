/**
 * px单位转rem
 * @param {*} val
 * @returns
 */
const designWidth = 75
const remLen = 2

// eslint-disable-next-line no-magic-numbers
export function transformRem(val = 0): string {
  if (!val) return ''
  if (typeof val !== 'number') val = Number(val)

  return parseFloat((val / designWidth).toFixed(remLen)) + 'rem'
}
