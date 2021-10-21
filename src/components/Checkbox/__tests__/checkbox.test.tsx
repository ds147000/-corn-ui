import React, { useRef, useState } from 'react'
import Checkbox, { getControllValue } from '../checkbox'
import { fireEvent, render, waitFor } from '@testing-library/react'

describe('Checkbox', () => {
  test('基础', () => {
    const screen = render(<Checkbox>商品链接</Checkbox>)
    screen.getByText('商品链接')
    expect(screen.container).toMatchSnapshot()
  })

  test('基础 按钮类型', () => {
    const screen = render(<Checkbox type="button" >商品链接</Checkbox>)
    screen.getByText('商品链接')
    expect(screen.container).toMatchSnapshot()
  })

  test('基础 按钮类型', () => {
    const screen = render(<Checkbox type="button" check >商品链接</Checkbox>)
    screen.getByText('商品链接')
    expect(screen.container).toMatchSnapshot()
  })


  test('选中', () => {
    const screen = render(<Checkbox check >商品链接</Checkbox>)
    screen.getByText('商品链接')
    screen.getByTestId('check')
    expect(screen.container).toMatchSnapshot()
  })

  test('值', () => {
    const screen = render(<Checkbox value="100" >商品链接</Checkbox>)
    screen.getByText('商品链接')
  })

  test('操作', () => {
    const screen = render(<Checkbox>商品链接</Checkbox>)
    fireEvent.click(screen.getByText('商品链接'))
    expect(screen.getByTestId('check'))
  })

  test('操作2', () => {
    const onChange = jest.fn()
    const screen = render(<Checkbox onChange={onChange} >商品链接</Checkbox>)
    fireEvent.click(screen.getByText('商品链接'))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange.mock.calls[0][0]).toBe(true)
  })

  test('操作3', () => {
    const onChange = jest.fn()
    const screen = render(<Checkbox onChange={onChange} defaultChecked={true} >商品链接</Checkbox>)
    fireEvent.click(screen.getByText('商品链接'))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange.mock.calls[0][0]).toBe(false)
  })

  test('操作 反复', () => {
    const onChange = jest.fn()
    const screen = render(<Checkbox onChange={onChange} defaultChecked={true} >商品链接</Checkbox>)
    fireEvent.click(screen.getByText('商品链接'))
    fireEvent.click(screen.getByText('商品链接'))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange.mock.calls[0][0]).toBe(false)
    expect(onChange.mock.calls[1][0]).toBe(true)
  })

  test('禁用操作', () => {
    const onChange = jest.fn()
    const screen = render(<Checkbox onChange={onChange} disabled >商品链接</Checkbox>)
    fireEvent.click(screen.getByText('商品链接'))
    expect(onChange).toHaveBeenCalledTimes(0)
  })

  test('自控制', async () => {
    const App: React.FC = () => {
      const [check, setCheck] = useState(false)
      const num = useRef(0)

      const onChange = () => {
        num.current += 1
        if (num.current % 2 === 0) setCheck(!check)
      }
      return (<Checkbox check={check} onChange={onChange} >商品链接</Checkbox>)
    }

    const screen = render(<App />)
    fireEvent.click(screen.getByText('商品链接'))
    await waitFor(() => expect(screen.getByTestId('check').getAttribute('value')).toBe('false'))
    fireEvent.click(screen.getByText('商品链接'))
    await waitFor(() => expect(screen.getByTestId('check').getAttribute('value')).toBe('true'))
    fireEvent.click(screen.getByText('商品链接'))
    await waitFor(() => expect(screen.getByTestId('check').getAttribute('value')).toBe('true'))
  })
})

describe('Checkbox/getControllValue', () => {
  test('内部变量控制', () => {
    expect(getControllValue(undefined, false)).toBe(false)
    expect(getControllValue(undefined, true)).toBe(true)
  })

  test('外部变量控制', () => {
    expect(getControllValue(true, false)).toBe(true)
    expect(getControllValue(false, true)).toBe(false)
  })

  test('Context控制', () => {
    expect(getControllValue(true, false, [])).toBe(false)
    expect(getControllValue(false, true, ['1'])).toBe(false)
    expect(getControllValue(false, true, ['1'], '2')).toBe(false)
    expect(getControllValue(false, true, [], '2')).toBe(false)
    expect(getControllValue(false, true, ['1', '2'], '2')).toBe(true)
    expect(getControllValue(false, true, ['3'], '3')).toBe(true)
  })
})
