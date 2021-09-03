import React from 'react'
import { render } from '@testing-library/react'
import CellList from '../list'
import Cell from '../index'

describe('Cell.List', () => {

  test('basis', () => {
    const screen = render(
      <CellList>
        <Cell label="限时奖励" />
        <Cell label="送葵花籽" />
      </CellList>
    )

    expect(screen.container).toMatchSnapshot()
  })

  test('line', () => {
    const screen = render(
      <CellList line >
        <Cell label="限时奖励" />
        <Cell label="送葵花籽" />
      </CellList>
    )

    expect(screen.container).toMatchSnapshot()
  })
})


