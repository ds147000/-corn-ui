import React from '../container'
import { fireEvent, render, waitFor } from '@testing-library/react'
import XiaokuiModal from '../container'

describe('XiaokuiModal', () => {
  test('快照', async () => {
    const screen = render(<XiaokuiModal visible btn={[]} />)
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('类型快照', async () => {
    const screen = render(
      <>
        <XiaokuiModal type="active" visible btn={[]} />
        <XiaokuiModal type="default" visible btn={[]} />
        <XiaokuiModal type="guide" visible btn={[]} />
        <XiaokuiModal type="notify" visible btn={[]} />
        <XiaokuiModal type="upadte" visible btn={[]} />
      </>
    )
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('设置子节点', async () => {
    const screen = render(<XiaokuiModal visible btn={[]} >我是小葵弹窗</XiaokuiModal>)
    await waitFor(() => screen.getByText('我是小葵弹窗'))

  })

  test('设置按钮', async () => {
    const screen = render(
      <XiaokuiModal
        visible
        btn={[{ text: '炫耀一下' }, { text: '解锁更多', type: 'error', ghost: true }]}
      >
        我是小葵弹窗
      </XiaokuiModal>
    )

    await waitFor(() => screen.getByText('我是小葵弹窗'))
    await waitFor(() => screen.getByText('炫耀一下'))
    await waitFor(() => screen.getByText('解锁更多'))
  })

  test('点击按钮', async () => {
    const onClick = jest.fn()
    const screen = render(
      <XiaokuiModal
        visible
        btn={[{ text: '炫耀一下' }, { text: '解锁更多', type: 'error', ghost: true }]}
        onClick={onClick}
      >
        我是小葵弹窗
      </XiaokuiModal>
    )
    await waitFor(() => screen.getByText('我是小葵弹窗'))
    const btn1 = await waitFor(() => screen.getByText('炫耀一下'))
    const btn2 = await waitFor(() => screen.getByText('解锁更多'))
    fireEvent.click(btn1)
    fireEvent.click(btn2)
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(2))
    await waitFor(() => expect(onClick.mock.calls[0][1]).toBe(0))
    await waitFor(() => expect(onClick.mock.calls[1][1]).toBe(1))
  })
})
