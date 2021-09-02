/* eslint-disable no-magic-numbers */
import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import ActionSheet from '../actionsheet'

describe('ActionSheet', () => {
  test('显示', async () => {
    const screen = render(<ActionSheet visible />)

    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('隐藏', async () => {
    const screen = render(<ActionSheet visible={false} />)

    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('title', async () => {
    const screen = render(<ActionSheet visible title="大标题居中" />)
    screen.getByText('大标题居中')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('title of hide', async () => {
    const screen = render(<ActionSheet visible={false} title="大标题居中" />)

    await waitFor(() => expect(screen.queryByText('大标题居中')).toBe(null))
  })

  test('subTitle', async () => {
    const screen = render(<ActionSheet visible title="大标题居中" subTitle="辅助文字居中" />)
    screen.getByText('大标题居中')
    screen.getByText('辅助文字居中')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('subTitle of hide', async () => {
    const screen = render(<ActionSheet visible={false} title="大标题居中" subTitle="辅助文字居中" />)
    await waitFor(() => expect(screen.queryByText('大标题居中')).toBe(null))
    await waitFor(() => expect(screen.queryByText('辅助文字居中')).toBe(null))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('titleAlign: left', async () => {
    const screen = render(<ActionSheet visible title="大标题居左" titleAlign="left" />)
    screen.getByText('大标题居左')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('showHead: false', async () => {
    const screen = render(<ActionSheet visible title="大标题居中" subTitle="辅助文字居中" showHead={false} />)
    await waitFor(() => expect(screen.queryByText('大标题居中')).toBe(null))
    await waitFor(() => expect(screen.queryByText('辅助文字居中')).toBe(null))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('titleAlign: center', async () => {
    const screen = render(<ActionSheet visible title="大标题居中" titleAlign="center" />)
    screen.getByText('大标题居中')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('titleAlign: right', async () => {
    const screen = render(<ActionSheet visible title="大标题居右" titleAlign="right" />)
    screen.getByText('大标题居右')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('closable', async () => {
    const onClose = jest.fn()
    const screen = render(<ActionSheet visible closable title="大标题居右" onClose={onClose} />)
    screen.getByText('大标题居右')
    fireEvent.click(screen.getByTestId('close'))
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1))
  })

  test('closable: false', async () => {
    const onClose = jest.fn()
    const screen = render(<ActionSheet visible title="大标题居右" onClose={onClose} />)
    const closeButton = screen.container.querySelector('xrk-actionsheet-close')
    expect(closeButton).toBe(null)
  })

  test('showButton', async () => {
    const screen = render(
      <ActionSheet
        visible
        title="我是大标题"
        subTitle="我是副标题"
        showCancel
        showOk
      />
    )
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('自定义文字', async () => {
    const screen = render(
      <ActionSheet
        visible
        title="我是大标题"
        subTitle="我是副标题"
        showCancel
        showOk
        cancelText="cancel"
        okText="ok"
      />
    )

    screen.getByText('cancel')
    screen.getByText('ok')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })
})
