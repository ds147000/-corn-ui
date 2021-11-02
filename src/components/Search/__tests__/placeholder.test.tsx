import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { SearchPlaceholder } from '../placeholder'

test('SearchPlaceholder', async () => {
  const screen = render(<SearchPlaceholder data="输入关键词" />)
  screen.getByText('输入关键词')
  await waitFor(() => expect(screen.container).toMatchSnapshot())
  screen.unmount()
})

test('SearchPlaceholder more', async () => {
  const screen = render(<SearchPlaceholder data={[
    '输入关键词',
    '小熊宝宝',
    '常青藤爸爸',
    '向日葵妈妈'
  ]} />)
  screen.getByText('输入关键词')
  screen.getByText('小熊宝宝')
  screen.getByText('常青藤爸爸')
  screen.getByText('向日葵妈妈')
  await waitFor(() => expect(screen.container).toMatchSnapshot())
})


test('SearchPlaceholder more unmount', async () => {
  const screen = render(<SearchPlaceholder data={[
    '输入关键词',
    '小熊宝宝',
    '常青藤爸爸',
    '向日葵妈妈'
  ]} />)
  screen.getByText('输入关键词')
  screen.getByText('小熊宝宝')
  screen.getByText('常青藤爸爸')
  screen.getByText('向日葵妈妈')
  screen.unmount()
  await waitFor(() => expect(screen.container).toMatchSnapshot())
})


test('SearchPlaceholder unmount', async () => {
  const screen = render(<SearchPlaceholder data="输入关键词" />)
  screen.getByText('输入关键词')
  screen.unmount()
  await waitFor(() => expect(screen.container).toMatchSnapshot())
})
