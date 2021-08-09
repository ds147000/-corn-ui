/* eslint-disable no-magic-numbers */
import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { View } from '@tarojs/components'
import Modal from '../modal'

describe('Modal', () => {

  test('basis', async () => {
    const screen = render(
      <Modal
        visible
        title="弹窗"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '确定' }
        ]}
      />
    )
    await waitFor(() => screen.getByText('弹窗'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('content', async () => {
    const screen = render(
      <Modal
        visible
        title="弹窗"
        content="我是弹窗"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '确定' }
        ]}
      />
    )
    await waitFor(() => screen.getByText('弹窗'))
    await waitFor(() => screen.getByText('我是弹窗'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })


  test('children', async () => {
    const screen = render(
      <Modal
        visible
        title="弹窗"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '确定' }
        ]}
      >
        <View>我是弹窗的爸爸</View>
      </Modal>
    )
    await waitFor(() => screen.getByText('弹窗'))
    await waitFor(() => screen.getByText('我是弹窗的爸爸'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('button', async () => {
    const screen = render(
      <Modal
        visible
        title="弹窗"
        content="我是弹窗"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '确定' }
        ]}
      />
    )
    await waitFor(() => screen.getByText('取消'))
    await waitFor(() => screen.getByText('确定'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('button multi', async () => {
    const screen = render(
      <Modal
        visible
        title="弹窗"
        content="我是弹窗"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '自定义样式' },
          { text: '确定' }
        ]}
      />
    )
    await waitFor(() => expect(screen.container.querySelector('.xrk-modal-floor-multi')).not.toBe(null))
    await waitFor(() => screen.getByText('取消'))
    await waitFor(() => screen.getByText('确定'))
    await waitFor(() => screen.getByText('自定义样式'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('onButtonClick', async () => {
    const onButtonClick = jest.fn()
    const screen = render(
      <Modal
        visible
        title="弹窗"
        content="我是弹窗"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '确定' }
        ]}
        onButtonClick={onButtonClick}
      />
    )
    const cancelButton = screen.getByText('取消')
    const okButton = screen.getByText('确定')
    fireEvent.click(cancelButton)
    fireEvent.click(okButton)
    await waitFor(() => expect(onButtonClick.mock.calls[0][0]).toBe(0))
    await waitFor(() => expect(onButtonClick.mock.calls[1][0]).toBe(1))
    await waitFor(() => expect(onButtonClick).toHaveBeenCalledTimes(2))
  })

  test('onButtonClick not', async () => {
    const onButtonClick = jest.fn()
    const onButtonClick2 = jest.fn()
    const screen = render(
      <Modal
        visible
        title="弹窗"
        content="我是弹窗"
        button={[
          { text: '取消', style: 'cancel', onClick: onButtonClick },
          { text: '确定', onClick: onButtonClick2 }
        ]}
      />
    )
    const cancelButton = screen.getByText('取消')
    const okButton = screen.getByText('确定')
    fireEvent.click(cancelButton)
    fireEvent.click(okButton)
    await waitFor(() => expect(onButtonClick).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onButtonClick2).toHaveBeenCalledTimes(1))
  })
})
