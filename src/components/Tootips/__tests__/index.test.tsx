import React from 'react'
import { render } from '@testing-library/react'
import Tootips, { TOOTIPS } from '../index'

describe('Tootips', () => {
  test('快照', () => {
    const list: TOOTIPS.Item[] = [
      { text: '金币', type: 'defualt' },
      { text: '人鱼', type: 'active' }
    ]
    const screen = render(<Tootips align="bottom" list={list} />)

    expect(screen).toMatchSnapshot()
  })
})
