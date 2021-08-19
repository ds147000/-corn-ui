import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Item } from '../item'

describe('comps/Tab/item', () => {

  test('title', () => {
    const screen = render(<Item title="item" />)
    screen.getByText('item')
    expect(screen.container).toMatchSnapshot()
  })

  test('icon', () => {
    const screen = render(<Item icon="https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF" />)
    expect(screen.container.querySelector('img')?.src)
      .toBe('https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF')

    expect(screen.container).toMatchSnapshot()
  })

  test('active', () => {
    const screen = render(<Item title="item" active />)
    expect(screen.getByText('item').className.indexOf('active'))
    expect(screen.container).toMatchSnapshot()
  })

  test('message', () => {
    const screen = render(<Item title="item" message />)
    // eslint-disable-next-line no-magic-numbers
    expect(screen.getByText('item').className.indexOf('xrk-tab-item-message')).not.toBe(-1)
    expect(screen.container).toMatchSnapshot()
  })

  test('click', () => {
    const click = jest.fn()
    const screen = render(<Item title="item" onClick={click} />)
    fireEvent.click(screen.getByText('item'))

    // eslint-disable-next-line no-magic-numbers
    expect(click).toHaveBeenCalledTimes(1)
  })
})
