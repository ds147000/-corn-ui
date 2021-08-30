/* eslint-disable no-magic-numbers */
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { View } from '@tarojs/components'
import { act } from 'react-dom/test-utils'
import Timer, { TimeRenderItem } from '../index'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useFakeTimers()
})

describe('comps/Timer', () => {

  test('基本使用', async () => {
    const startTime = 1500000000
    const endTime = startTime + 60000

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    await waitFor(() => expect(screen.queryByTestId('day')).toBeNull())
    await waitFor(() => expect(screen.queryByTestId('hous')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('min')?.innerHTML).toBe('01'))
    await waitFor(() => expect(screen.queryByTestId('sec')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('基本使用 => fill', async () => {
    const startTime = 1500000000
    const endTime = startTime + 60000

    const screen = render(<Timer startTime={startTime} endTime={endTime} fill />)

    await waitFor(() => expect(screen.queryByTestId('day')).toBeNull())
    await waitFor(() => expect(screen.queryByTestId('hous')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('min')?.innerHTML).toBe('01'))
    await waitFor(() => expect(screen.queryByTestId('sec')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('基本使用 小时', async () => {
    const startTime = 1500000000
    const endTime = startTime + 3600000

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    await waitFor(() => expect(screen.queryByTestId('day')).toBeNull())
    await waitFor(() => expect(screen.queryByTestId('hous')?.innerHTML).toBe('01'))
    await waitFor(() => expect(screen.queryByTestId('min')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('sec')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('基本使用 天', async () => {
    const startTime = 1500000000
    const endTime = startTime + (3600000 * 24)

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    await waitFor(() => expect(screen.queryByTestId('day')?.innerHTML).toBe('1天'))
    await waitFor(() => expect(screen.queryByTestId('hous')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('min')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('sec')).toBeNull())
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('基本使用 秒', async () => {
    const startTime = 1500000000
    const endTime = startTime + 3000

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    await waitFor(() => expect(screen.queryByTestId('day')).toBeNull())
    await waitFor(() => expect(screen.queryByTestId('hous')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('min')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('sec')?.innerHTML).toBe('03'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('日期字符串', async () => {
    const startTime = '2021-10-01 12:00:00'
    const endTime = '2021-10-01 12:01:00'

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    await waitFor(() => expect(screen.queryByTestId('day')).toBeNull())
    await waitFor(() => expect(screen.queryByTestId('hous')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('min')?.innerHTML).toBe('01'))
    await waitFor(() => expect(screen.queryByTestId('sec')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('Date对象', async () => {
    const startTime = new Date('2021-10-01 12:00:00')
    const endTime = new Date('2021-10-01 12:01:00')

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    await waitFor(() => expect(screen.queryByTestId('day')).toBeNull())
    await waitFor(() => expect(screen.queryByTestId('hous')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('min')?.innerHTML).toBe('01'))
    await waitFor(() => expect(screen.queryByTestId('sec')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('分', async () => {
    const startTime = 1500000000
    const endTime = startTime + 120000

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    await waitFor(() => expect(screen.queryByTestId('day')).toBeNull())
    await waitFor(() => expect(screen.queryByTestId('hous')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('min')?.innerHTML).toBe('02'))
    await waitFor(() => expect(screen.queryByTestId('sec')?.innerHTML).toBe('00'))
  })

  test('时', async () => {
    const startTime = 1500000000
    const endTime = startTime + (1000 * 60 * 60 * 23)

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    await waitFor(() => expect(screen.queryByTestId('day')).toBeNull())
    await waitFor(() => expect(screen.queryByTestId('hous')?.innerHTML).toBe('23'))
    await waitFor(() => expect(screen.queryByTestId('min')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('sec')?.innerHTML).toBe('00'))
  })

  test('天', async () => {
    const startTime = 1500000000
    const endTime = startTime + (1000 * 60 * 60 * 47)

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    await waitFor(() => expect(screen.queryByTestId('day')?.innerHTML).toBe('1天'))
    await waitFor(() => expect(screen.queryByTestId('hous')?.innerHTML).toBe('23'))
    await waitFor(() => expect(screen.queryByTestId('min')?.innerHTML).toBe('00'))
    await waitFor(() => expect(screen.queryByTestId('sec')).toBeNull())
  })

  test('回调onChange', async () => {
    const startTime = 1500000000
    const endTime = startTime + 60000
    const onChange = jest.fn()

    render(<Timer startTime={startTime} endTime={endTime} onChange={onChange} />)

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(2))
    await waitFor(() => expect(onChange.mock.calls[0][0]).toBe(59000))
    await waitFor(() => expect(onChange.mock.calls[1][0]).toBe(58000))
  })

  test('过期', async () => {
    const startTime = 1500000000
    const endTime = startTime

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('1秒后过期', async () => {
    const startTime = 1500000000
    const endTime = startTime + 1000

    const screen = render(<Timer startTime={startTime} endTime={endTime} />)

    act(() => {
      jest.advanceTimersByTime(1000)
      jest.advanceTimersByTime(1000)
      jest.advanceTimersByTime(1000)
    })

    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('自定义渲染像', async () => {
    const startTime = 1500000000
    const endTime = startTime + 1000

    const renderItem: TimeRenderItem = (type, value) => {
      return (
        <View>
          {type}={value}
        </View>
      )
    }
    const screen = render(<Timer startTime={startTime} endTime={endTime} renderItem={renderItem} />)

    await waitFor(() => expect(screen.getByText('hous=00')))
    await waitFor(() => expect(screen.getByText('min=00')))
    await waitFor(() => expect(screen.getByText('sec=01')))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })
})
