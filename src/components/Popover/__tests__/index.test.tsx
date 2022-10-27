import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import Popover from '../index'

describe('Popover', () => {
  test('基础快照', async () => {
    const screen = render(
      <Popover content={() => (
        <div>气泡标题</div>
      )} >
        <div>气泡按钮</div>
      </Popover>
    )

    fireEvent.click(screen.getByText('气泡按钮'))

    await waitFor(() => expect(screen.queryByText('气泡标题')).not.toBeNull())
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('打开', async () => {
    const screen = render(
      <Popover content={() => (
        <div>气泡标题</div>
      )} >
        <div>气泡按钮</div>
      </Popover>
    )

    fireEvent.click(screen.getByText('气泡按钮'))
    await waitFor(() => screen.getByText('气泡标题'))
  })

  test('打开 动画结束', async () => {
    const screen = render(
      <Popover content={() => (
        <div>气泡标题</div>
      )} >
        <div>气泡按钮</div>
      </Popover>
    )

    fireEvent.click(screen.getByText('气泡按钮'))
    await waitFor(() => screen.getByText('气泡标题'))
    fireEvent.animationEnd(screen.getByTestId('centent'), { detail: { animationName: 'SHOW' } })
    await waitFor(() => screen.getByText('气泡标题'))
  })

  test('收起', async () => {
    const screen = render(
      <Popover content={() => (
        <div>气泡标题</div>
      )} >
        <div>气泡按钮</div>
      </Popover>
    )

    fireEvent.click(screen.getByText('气泡按钮'))
    await waitFor(() => screen.getByText('气泡标题'))
    fireEvent.click(screen.getByText('气泡按钮'))
    fireEvent.animationEnd(screen.getByTestId('centent'), { detail: { animationName: 'HIDE' } })
    await waitFor(() => expect(screen.queryByText('气泡标题')).toBeNull())
  })

  test('触摸内容', async () => {
    const screen = render(
      <Popover content={() => (
        <div>气泡标题</div>
      )} >
        <div>气泡按钮</div>
      </Popover>
    )

    fireEvent.click(screen.getByText('气泡按钮'))
    await waitFor(() => screen.getByText('气泡标题'))
    fireEvent.touchStart(screen.getByText('气泡标题'))
    fireEvent.animationEnd(screen.getByTestId('centent'), { detail: { animationName: 'HIDE' } })
    await waitFor(() => expect(screen.queryByText('气泡标题')).not.toBeNull())
  })



  test('面板收起', async () => {
    const screen = render(
      <Popover content={() => (
        <div>气泡标题</div>
      )} >
        <div>气泡按钮</div>
      </Popover>
    )

    fireEvent.click(screen.getByText('气泡按钮'))
    await waitFor(() => screen.getByText('气泡标题'))
    fireEvent.click(screen.getByText('气泡标题'))
    fireEvent.animationEnd(screen.container.querySelector('.corn-popover-hide'), { detail: { animationName: 'HIDE' } })
    await waitFor(() => expect(screen.queryByText('气泡标题')).toBeNull())
  })

  test('设置样式', () => {
    const screen = render(
      <Popover className="abc" content={() => (
        <div>气泡标题</div>
      )} >
        <div>气泡按钮</div>
      </Popover>
    )

    expect(screen.container.getElementsByClassName('abc')).not.toBeNull()
  })
})
