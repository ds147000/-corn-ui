import React from 'react'
import { render, waitFor } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import Textarea from '../index'

describe('Textarea', () => {
  test('基础', async () => {
    const screen = render(<Textarea />)
    await waitFor (() => expect(screen.container).toMatchSnapshot())
  })

  test('插入底部节点', async () => {
    const screen = render(<Textarea floor={<div>我是底部</div>} />)
    screen.getByText('我是底部')
    await waitFor (() => expect(screen.container).toMatchSnapshot())
  })

  test('插入底部节点 可操作', async () => {
    const click = jest.fn()
    const screen = render(<Textarea floor={<div onClick={click} >我是底部</div>} />)
    UserEvent.click(screen.getByText('我是底部'))
    await waitFor (() => expect(click).toHaveBeenCalledTimes(1))
  })

  test('输入', async () => {
    const screen = render(<Textarea  />)
    UserEvent.type(screen.getByTestId('textarea'), '我是输入框')
    screen.getByText('我是输入框')
  })

  test('设置字数限制', async () => {
    const screen = render(<Textarea maxlength={6} />)
    UserEvent.type(screen.getByTestId('textarea'), '我是输入框')
    UserEvent.type(screen.getByTestId('textarea'), '123456')
    await waitFor(() => expect((screen.getByTestId('textarea') as HTMLTextAreaElement).value).toBe('我是输入框1'))
  })
})
