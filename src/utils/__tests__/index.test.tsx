/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-magic-numbers */

import { transformRem, formatMoney, getRanDomId, DateToTimestamp, fixNumber, isWatch } from '../index'

describe.each([
  [ 100, '2.1333rem' ],
  [ 0, '' ],
  [ null, '' ],
  [ '100', '2.1333rem' ],
  [ true, '0.0213rem' ],
  [ false, '' ],
  [ 750, '16.0000rem' ]
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

test('getRanDomId', () => {
  const ids: string[] = []
  for(let i = 1000; i > 0; i--) {
    const id = getRanDomId()
    expect(ids.includes(id)).toBe(false)
    ids.push(id)
  }
})


describe.each([
  [ 0, 0 ],
  [ 1000, 1000 ],
  [ new Date('2021'), new Date('2021').getTime() ],
  [ '2121', new Date('2121').getTime() ],
  [ null, 0 ],
  [ false, 0 ]
])('DateToTimestamp', (value: any, expected) => {
  test(`${value} => ${expected}`, () => {
    expect(DateToTimestamp(value)).toBe(expected)
  })
})

describe.each([
  [ 0, 2, '00' ],
  [ 1, 2, '01' ],
  [ 101, 2, '101' ],
  [ 101, 5, '00101' ],
  [ '101', 5, '00101' ],
  [ '999', 4, '0999' ],
  [ '3', 2, '03' ],
  [ 1, undefined, '01' ]

])('fixNumber', (value, len, expected) => {
  test(`${value} => ${expected}`, () => {
    expect(fixNumber(value, len)).toBe(expected)
  })
})

test('weapp', () => {
  expect(isWatch()).toBe(false)
})
