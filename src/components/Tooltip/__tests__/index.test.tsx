import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import Tootips, { TOOTIPS } from '../index'

describe('Tootips', () => {
  test('快照', async () => {
    const list: TOOTIPS.Item[] = [
      { text: '金币', type: 'defualt' },
      { text: '人鱼', type: 'active' }
    ]
    const screen = render(<Tootips align="bottom" list={list}>更多</Tootips>)

    await waitFor(() => expect(screen).toMatchSnapshot())
  })

  test('open', async () => {
    const list: TOOTIPS.Item[] = [
      { text: '金币', type: 'defualt' },
      { text: '人鱼', type: 'active' }
    ]
    const screen = render(<Tootips align="bottom" list={list}>更多</Tootips>)
    fireEvent.click(screen.getByText('更多'))
    await waitFor(() => expect(screen.queryByText('金币')).not.toBeNull())
    await waitFor(() => expect(screen.queryByText('人鱼')).not.toBeNull())
    await waitFor(() => expect(screen).toMatchSnapshot())
  })

  test('open move', async () => {
    const list: TOOTIPS.Item[] = [
      { text: '金币', type: 'defualt' },
      { text: '人鱼', type: 'active' }
    ]
    const screen = render(<Tootips align="bottom" moveX={10} moveY={50} list={list}>更多</Tootips>)
    fireEvent.click(screen.getByText('更多'))
    await waitFor(() => expect(screen.queryByText('金币')).not.toBeNull())
    await waitFor(() => expect(screen.queryByText('人鱼')).not.toBeNull())
    await waitFor(() => expect(screen).toMatchSnapshot())
  })

  test('click', async () => {
    const list: TOOTIPS.Item[] = [
      { text: '金币', type: 'defualt' },
      { text: '人鱼', type: 'active' }
    ]
    const onClick = jest.fn()
    const screen = render(<Tootips list={list} onClick={onClick} >更多</Tootips>)
    fireEvent.click(screen.getByText('更多'))
    await waitFor(() => expect(screen.queryByText('金币')).not.toBeNull())
    await waitFor(() => expect(screen.queryByText('人鱼')).not.toBeNull())
    fireEvent.click(screen.getByText('金币'))
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onClick.mock.calls[0][1]).toBe(0))
  })
})
