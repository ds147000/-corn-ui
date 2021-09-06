import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Card from '../index'


describe('Card', () => {
  test('basis', () => {
    const screen = render(<Card />)
    expect(screen).toMatchSnapshot()
  })

  test('methods', () => {
    const click = jest.fn()
    const screen = render(<Card onClick={click}>卡片</Card>)
    fireEvent.click(screen.getByText('卡片'))
    expect(screen).toMatchSnapshot()
    expect(click).toHaveBeenCalledTimes(1)
  })
})
