import React, { useEffect, useState } from 'react'
import { render, waitFor } from '@testing-library/react'
import { SearchPlaceholder } from '../placeholder'
import { act } from 'react-dom/test-utils'


test('SearchPlaceholder', async () => {
  const screen = render(<SearchPlaceholder data="输入关键词" />)
  screen.getByText('输入关键词')
  await waitFor(() => expect(screen.container).toMatchSnapshot())
  screen.unmount()
})

test('SearchPlaceholder empty', async () => {
  const screen = render(<SearchPlaceholder />)
  await waitFor(() => expect(screen.container).toMatchSnapshot())
})

test('SearchPlaceholder object', async () => {
  const screen = render(<SearchPlaceholder data={{} as any} />)
  await waitFor(() => expect(screen.container).toMatchSnapshot())
})

test('SearchPlaceholder more', async () => {
  const screen = render(<SearchPlaceholder data={[
    '输入关键词',
    '小熊宝宝',
    '常青藤爸爸',
    '@Corn'
  ]} />)
  screen.getByText('输入关键词')
  screen.getByText('小熊宝宝')
  screen.getByText('常青藤爸爸')
  screen.getByText('@Corn')
  await waitFor(() => expect(screen.container).toMatchSnapshot())
})

test('SearchPlaceholder more run time', async () => {
  jest.useFakeTimers()

  const screen = render(<SearchPlaceholder data={[
    '输入关键词',
    '小熊宝宝',
    '常青藤爸爸',
    '@Corn'
  ]} />)
  screen.getByText('输入关键词')
  screen.getByText('小熊宝宝')
  screen.getByText('常青藤爸爸')
  screen.getByText('@Corn')
  act(() => {
    jest.runOnlyPendingTimers()
  })
  act(() => {
    jest.runOnlyPendingTimers()
  })
  act(() => {
    jest.runOnlyPendingTimers()
  })
  act(() => {
    jest.runOnlyPendingTimers()
  })
  act(() => {
    jest.runOnlyPendingTimers()
  })
  await waitFor(() => expect(screen.container).toMatchSnapshot())
})

test('SearchPlaceholder one', async () => {
  jest.useFakeTimers()

  const screen = render(<SearchPlaceholder data={[
    '输入关键词',
  ]} />)
  screen.getByText('输入关键词')

  screen.unmount()
})

test('SearchPlaceholder change', async () => {
  const App: React.FC = () => {
    const [list, setList] = useState(['输入关键词', '123', '456'])

    useEffect(() => {
      setList([])
    }, [])

    return <SearchPlaceholder data={list} />
  }
  const screen = render(<App />)
  await waitFor(() => expect(screen.container.querySelector('.corn-search-placeholder-item')).toBeNull())
  screen.unmount()
})


test('SearchPlaceholder more unmount', async () => {
  const screen = render(<SearchPlaceholder data={[
    '输入关键词',
    '小熊宝宝',
    '常青藤爸爸',
    '@Corn'
  ]} />)
  screen.getByText('输入关键词')
  screen.getByText('小熊宝宝')
  screen.getByText('常青藤爸爸')
  screen.getByText('@Corn')
  screen.unmount()
  await waitFor(() => expect(screen.container).toMatchSnapshot())
})


test('SearchPlaceholder unmount', async () => {
  const screen = render(<SearchPlaceholder data="输入关键词" />)
  screen.getByText('输入关键词')
  screen.unmount()
  await waitFor(() => expect(screen.container).toMatchSnapshot())
})
