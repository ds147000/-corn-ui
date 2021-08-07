/* eslint-disable no-magic-numbers */
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ActionSheetItem } from '../item'

describe('ActionSheetItem', () => {

  test('text', () => {
    const screen = render(<ActionSheetItem text="123" />)
    screen.getByText('123')
    expect(screen.container).toMatchSnapshot()
  })

  test('suffix', () => {
    const screen = render(<ActionSheetItem text="123" suffix="455" />)
    screen.getByText('455')
    expect(screen.container).toMatchSnapshot()
  })

  test('click', () => {
    const onClick = jest.fn()
    const screen = render(<ActionSheetItem text="123" suffix="455" onClick={onClick} />)
    fireEvent.click(screen.getByText('455'))
    expect(screen.container).toMatchSnapshot()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('basis', () => {
    const screen = render(<ActionSheetItem />)
    expect(screen.container).toMatchSnapshot()
  })
})
