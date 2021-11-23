/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import { fireEvent, render, waitFor, createEvent } from '@testing-library/react'
import { View, Text } from '@tarojs/components'
import Drawer, { onTouchMove } from '../index'

describe('Drawer', () => {

  test('hide', async () => {
    const screen = render(
      <Drawer visible={false}>
        <View>
          <Text>Drawer</Text>
        </View>
      </Drawer>
    )

    await waitFor(() => expect(screen.queryByText('Drawer')).toBe(null))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('show', async () => {
    const screen = render(
      <Drawer visible >
        <View>
          <Text>Drawer</Text>
        </View>
      </Drawer>
    )

    screen.getByText('Drawer')
    await waitFor(() =>  expect(screen.container).toMatchSnapshot())
  })

  test('show of Left', async () => {
    const screen = render(
      <Drawer visible position="left" >
        <View>
          <Text>Drawer</Text>
        </View>
      </Drawer>
    )

    screen.getByText('Drawer')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('show of Right', async () => {
    const screen = render(
      <Drawer visible position="right" >
        <View>
          <Text>Drawer</Text>
        </View>
      </Drawer>
    )

    screen.getByText('Drawer')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('show of Bottom', () => {
    const screen = render(
      <Drawer visible position="bottom" >
        <View>
          <Text>Drawer</Text>
        </View>
      </Drawer>
    )

    screen.getByText('Drawer')
    expect(screen.container).toMatchSnapshot()
  })

  test('show of Top', () => {
    const screen = render(
      <Drawer visible position="top" >
        <View>
          <Text>Drawer</Text>
        </View>
      </Drawer>
    )

    screen.getByText('Drawer')
    expect(screen.container).toMatchSnapshot()
  })

  test('show of Center', () => {
    const screen = render(
      <Drawer visible position="center" >
        <View>
          <Text>Drawer</Text>
        </View>
      </Drawer>
    )

    screen.getByText('Drawer')
    expect(screen.container).toMatchSnapshot()
  })

  test('mask: false', async () => {
    const screen = render(
      <>
        <Drawer visible position="bottom" mask={false} >
          <View>
            <Text>Drawer</Text>
          </View>
        </Drawer>
      </>
    )

    screen.getByText('Drawer')
    expect(screen.queryByTestId('mask')).toBe(null)
  })

  test('click mask', async () => {
    const onClose = jest.fn()
    const screen = render(
      <>
        <Drawer visible position="bottom" onClose={onClose} >
          <View>
            <Text>Drawer</Text>
          </View>
        </Drawer>
      </>
    )

    screen.getByText('Drawer')
    const mask = screen.getByTestId('mask')
    fireEvent.click(mask)
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1))
  })

  test('click mask of maskClosable = false', async () => {
    const onClose = jest.fn()
    const screen = render(
      <>
        <Drawer visible position="bottom" maskClosable={false} onClose={onClose} >
          <View>
            <Text>Drawer</Text>
          </View>
        </Drawer>
      </>
    )

    screen.getByText('Drawer')
    const mask = screen.getByTestId('mask')
    fireEvent.click(mask)
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(0))
  })

  test('click children', async () => {
    const onClose = jest.fn()
    const screen = render(
      <>
        <Drawer visible position="bottom" onClose={onClose} >
          <View>
            <Text>Drawer</Text>
          </View>
        </Drawer>
      </>
    )

    fireEvent.click(screen.getByText('Drawer'))
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(0))
  })

  test('change', async () => {
    const onHide = jest.fn()

    const App: React.FC = () => {
      const [ show, setShow ] = useState(false)

      return (
        <>
          <View onClick={(): void => setShow(true)}>显示</View>
          <Drawer visible={show} onClose={(): void => setShow(false)} onHide={onHide} >
            <View>抽屉</View>
          </Drawer>
        </>
      )
    }

    const screen = render(<App />)
    fireEvent.click(screen.getByText('显示'))

    await new Promise((res) => setTimeout(res, 1000))
    fireEvent.animationEnd(screen.getByTestId('body'), { animationName: 'Show' })
    screen.getByText('抽屉')

    fireEvent.click(screen.getByTestId('mask'))
    fireEvent.animationEnd(screen.getByTestId('body'), { animationName: 'Hide' })
    await new Promise((res) => setTimeout(res, 1000))

    await waitFor(() => expect(screen.container).toMatchSnapshot())

    await waitFor(() => expect(onHide).toHaveBeenCalledTimes(1))
  })

  test('onAnimatedDnd', () => {
    const screen = render(<Drawer visible />)
    const evetn = createEvent('animationEnd', screen.getByTestId('body'),
      { animationName: 'Hide' },
      {
        EventType: 'AnimationEvent',
        defaultInit: { bubbles: true, cancelable: false }
      }
    )
    fireEvent.animationEnd(screen.getByTestId('body'), evetn)
  })

  test('touchmove', () => {
    const preventDefault = jest.fn()
    onTouchMove({ preventDefault } as any)

    expect(preventDefault).toHaveBeenCalledTimes(1)
  })

  test('click Children', () => {
    const onClose = jest.fn()
    const screen = render(
      <Drawer visible onClose={onClose} position="center" >
        <div>123</div>
      </Drawer>
    )

    fireEvent.click(screen.getByTestId('body'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('click Children  bottom', () => {
    const onClose = jest.fn()
    const screen = render(
      <Drawer visible onClose={onClose} >
        <div>123</div>
      </Drawer>
    )

    fireEvent.click(screen.getByTestId('body'))
    expect(onClose).toHaveBeenCalledTimes(0)
  })
})
