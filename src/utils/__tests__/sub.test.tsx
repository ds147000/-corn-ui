/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react'
import { render, waitFor, act } from '@testing-library/react'
import { View } from '@tarojs/components'
import ProtalSub from '../sub'

describe('ProtalSub', () => {

  test('add And Emit', async () => {
    const cb = jest.fn()
    ProtalSub.add('jest', cb)
    ProtalSub.emit('jest')

  })

  test('params', async () => {
    const cb = jest.fn()
    ProtalSub.add('jest', cb)
    ProtalSub.emit('jest', true)
    await waitFor(() => expect(cb).toHaveBeenCalledTimes(1))

    expect(cb.mock.calls[0][0]).toBe(true)
  })

  test('more params', async () => {
    const cb = jest.fn()
    const params = [ true, false, Math.random(), '123' ]
    ProtalSub.add('jest', cb)
    ProtalSub.emit('jest', ...params)
    await waitFor(() => expect(cb).toHaveBeenCalledTimes(1))

    expect(cb.mock.calls[0]).toEqual(params)
  })

  test('tsx', async () => {
    const App: React.FC = () => {
      const [ list, setList ] = useState<React.ReactNode>()

      useEffect(() => {
        const remove = ProtalSub.add('jest', (child: React.ReactNode) => setList(child))

        return remove
      }, [])

      return (
        <View>{list}</View>
      )
    }

    const screen = render(<App />)

    act(() => ProtalSub.emit('jest', <View>我是传送过去的节点</View>))

    await waitFor(() => screen.getByText('我是传送过去的节点'))

    screen.unmount()
  })

  test('emit undefind', () => {
    ProtalSub.emit(Math.random() + '')
  })
})
