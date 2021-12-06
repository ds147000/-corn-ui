/* eslint-disable no-magic-numbers */

const rootValue = 40 * 750 / 640

export default function transformRem(val = 0): string {
  if (!val) return ''

  return (val / rootValue).toFixed(4) + 'rem'
}
