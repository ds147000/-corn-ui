import React from 'react'
import { render } from '@testing-library/react'
import Icon from '../index.h5'

describe('Icon', () => {
  test('basis', () => {
    const screen = render(<Icon name="banji" />)

    expect(screen).toMatchSnapshot()
  })
})
