/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-magic-numbers */

import { transformRem, formatMoney } from '../index'

describe.each([
  [ 100, '1.33rem' ],
  [ 0, '' ],
  [ null, '' ],
  [ '100', '1.33rem' ],
  [ true, '0.01rem' ],
  [ false, '' ],
  [ 750, '10rem' ]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
])('transformRem', (value: any, expected) => {
  test(`${value} => ${expected}`, () => {
    expect(transformRem(value)).toBe(expected)
  })
})

describe.each([
  [ 100, false, 1 ],
  [ 1001, false, 10.01 ],
  [ null, false, 0 ],
  [ true, false, 0.01 ],
  [ undefined, false, 0 ],
  [ -1, false, -0.01 ],
  [ 3333333, false, 33333.33 ],
  [ 9999, false, 99.99 ],
  [ 22121, false,  221.21 ],
  [ 1001, true, 100100 ],
  [ null, true, 0 ],
  [ true, true, 100 ],
  [ undefined, true, 0 ],
  [ -1, true, -100 ],
  [ 3333333, true, 333333300 ],
  [ 9999, true, 999900 ],
  [ 22121, true,  2212100 ]
])('formatMoney', (value: any, isReverse: boolean, expected) => {
  test(`${value} => ${expected}`, () => {
    expect(formatMoney(value, isReverse)).toBe(expected)
  })
})
