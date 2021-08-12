/* eslint-disable no-magic-numbers */
import { transformRem } from '../index'

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
