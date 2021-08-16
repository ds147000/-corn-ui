/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { render } from '@testing-library/react'
import Money from '../index'


const TestFun = (
  value: any,
  type: any,
  typeExpected: string,
  valueExpected: string
): void => {
  test(`期望结果 => 类型： ${typeExpected} 金额：${valueExpected} ;`, async () => {
    const screen = render(<Money type={type}>{value}</Money>)


    if (typeExpected) {
      const Icon = screen.queryByTestId('money-mark')?.innerHTML
      expect(Icon?.trim()).toBe(typeExpected)
    }
    const valueResult = screen.getByTestId('money').innerHTML

    expect(valueResult?.trim()).toBe(valueExpected)
    expect(screen.container).toMatchSnapshot()
  })

}

describe.each([
  [ 1, '', '￥', '0.01' ],
  [ 50, '', '￥', '0.5' ],
  [ 100, '', '￥', '1' ],
  [ 4000, '', '￥', '40' ],
  [ 212321213121, '', '￥', '2123212131.21' ],
  [ 1, 'coin', 'K', '1' ],
  [ 100, 'coin', 'K', '100' ],
  [ 29104321012, 'gold', null, '291043210.12葵币' ],
  [ 1234, 'gold', null, '12.34葵币' ],
])('正常测试 <Money value={%s} type={%s} />', TestFun)


describe.each([
  [ null, '', '￥', '0' ],
  [ undefined, '', '￥', '0' ],
  [ '100', '', '￥', '1' ],
  [ '-99.2', '', '￥', '-0.99' ],
  [ -9999, '', '￥', '-99.99' ],
  [ null, 'coin', 'K', '' ],
  [ undefined, 'coin', 'K', '' ],
  [ null, 'gold', null, '0葵币' ],
  [ undefined, 'gold', null, '0葵币' ],
])('边界测试 <Money value={%s} type={%s} />', TestFun)

test('传入金额字符串 <Money value={10} amountString={100} >', () => {
  const screen = render(<Money amountString="100">10</Money>)

  const Icon =  screen.queryByTestId('money-mark')?.innerHTML
  expect(Icon?.trim()).toBe('￥')
  const valueResult = screen.getByTestId('money').innerHTML

  expect(valueResult?.trim()).toBe('100')
})

describe.each([
  [ 212321213121, '', '￥', '2123212131.21' ],
  [ 1, 'coin', 'K', '1' ],
  [ 1234, 'gold', null, '12.34葵币' ],
])('金额 <Money value={%s} type={%s} />', (
  value: any,
  type: any,
  typeExpected: string,
  valueExpected: string
) => {
  test(`金额 <Money value=${value} type=${type} lineThrough />`, () => {
    const screen = render(<Money type={type} lineThrough >{value}</Money>)

    if (typeExpected) {
      const Icon = screen.queryByTestId('money-mark')?.innerHTML
      expect(Icon?.trim()).toBe(typeExpected)
    }
    const valueResult = screen.getByTestId('money').innerHTML

    expect(valueResult?.trim()).toBe(valueExpected)
    expect(screen.container).toMatchSnapshot()
    expect(screen.container.querySelector('.line-through')).not.toBeUndefined()
  })

})
