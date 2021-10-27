import React from 'react'
import { render } from '@testing-library/react'
import Skeleton from '../index'

describe('Skeleton', () => {
  test('快照', () => {
    const screen = render(
      <Skeleton>
        <Skeleton.Item height={345} width={345} top={7.5} bottom={7.5} left={15} right={15} />
        <Skeleton.Item height={58} top={7.5} bottom={7.5} left={15} right={15} />
        <Skeleton.Item height={23} top={7.5} bottom={7.5} left={15} right={15} />
        <Skeleton.Item />
      </Skeleton>
    )

    expect(screen.container).toMatchSnapshot()
  })
})
