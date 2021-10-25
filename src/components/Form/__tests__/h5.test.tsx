import React, { useEffect, useState } from 'react'
import { act, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../index.h5'
import Input from '../../Input'
import Checkbox from '../../Checkbox/checkbox'
import CheckboxGroup from '../../Checkbox/group'
import Button from '../../Button'
import Textarea from '../../Textarea'

beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

describe('Fomr', () => {
  test('渲染', async () => {
    const screen = render(
      <Form>
        <Input />
        <Checkbox />
        <Textarea />
      </Form>
    )

    expect(screen.container.getElementsByTagName('input').length).toBe(2)

    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('自带值', async () => {
    const screen = render(
      <Form>
        <Input value="123" />
        <Checkbox check>男</Checkbox>
        <CheckboxGroup name="age" >
          <Checkbox value="1">1</Checkbox>
          <Checkbox value="2">2</Checkbox>
          <Checkbox value="3">3</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup name="study" radio >
          <Checkbox value="1">大学</Checkbox>
          <Checkbox value="2">小学</Checkbox>
        </CheckboxGroup>
        <Textarea name="liuyan" />
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    expect(input.value).toBe("123")

    const check = screen.getByText('男').querySelector('input') as HTMLInputElement
    expect(check.value).toBe("true")

    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('初始化值', async () => {
    const screen = render(
      <Form defaultValue={{ name: '小明', sex: false, liuyan: '123456', abc: '122' }} >
        <Input name="name" />
        <Checkbox name="sex">男</Checkbox>
        <CheckboxGroup name="age" >
          <Checkbox value="1">1</Checkbox>
          <Checkbox value="2">2</Checkbox>
          <Checkbox value="3">3</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup name="study" radio >
          <Checkbox value="1">大学</Checkbox>
          <Checkbox value="2">小学</Checkbox>
        </CheckboxGroup>
        <Textarea name="liuyan" />
      </Form>
    )
    await waitFor(() => expect((screen.getByTestId('input') as HTMLInputElement).value)
      .toBe("小明"))
    await waitFor(() => expect((screen.getByText('男').querySelector('input') as HTMLInputElement).value)
      .toBe("false"))

    await waitFor(() => expect((screen.getByTestId('textarea') as HTMLTextAreaElement).value)
      .toBe('123456'))

    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('改变初始化值', async () => {
    const App = () => {
      const [value, setValue] = useState({ name: '小明', sex: false, liuyan: "123" })

      useEffect(() => {
        setTimeout(() => setValue({ name: '123', sex: true, liuyan: "456" }))
      },[])

      return (
        <Form defaultValue={value} >
          <Input name="name" />
          <Checkbox name="sex">男</Checkbox>
          <CheckboxGroup name="age" >
            <Checkbox value="1">1</Checkbox>
            <Checkbox value="2">2</Checkbox>
            <Checkbox value="3">3</Checkbox>
          </CheckboxGroup>
          <CheckboxGroup name="study" radio >
            <Checkbox value="1">大学</Checkbox>
            <Checkbox value="2">小学</Checkbox>
          </CheckboxGroup>
          <Textarea name="liuyan" />
        </Form>
      )
    }

    const screen = render(<App />)

    const input = screen.getByTestId('input') as HTMLInputElement
    await waitFor(() => expect(input.value).toBe("123"))

    const check = screen.getByText('男').querySelector('input') as HTMLInputElement
    await waitFor(() => expect(check.value).toBe("true"))

    const textarea = screen.getByTestId('textarea') as HTMLTextAreaElement
    await waitFor(() => expect(textarea.value).toBe('456'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('提交', async () => {
    const onSubmit = jest.fn()

    const screen = render(
      <Form onSubmit={onSubmit} >
        <Input name="name" />
        <Checkbox name="sex">男</Checkbox>
        <CheckboxGroup name="age" >
          <Checkbox value="1">100</Checkbox>
          <Checkbox value="2">200</Checkbox>
          <Checkbox value="3">300</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup name="study" radio >
          <Checkbox value="1">大学</Checkbox>
          <Checkbox value="2">小学</Checkbox>
        </CheckboxGroup>
        <Textarea name="liuyan" />
        <Button formType="submit" >提交</Button>
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('100'))
    userEvent.click(screen.getByText('大学'))
    userEvent.type(screen.getByTestId('textarea'), '123456')
    userEvent.click(screen.getByText('提交'))

    await waitFor(() => expect(onSubmit.mock.calls[0][0]).toEqual({ name: 'hello wrold', sex: true, age: ['1'], study: '1', liuyan: 123456 }))
  })

  test('具有初始化值的提交', async () => {
    const onSubmit = jest.fn()

    const screen = render(
      <Form onSubmit={onSubmit} defaultValue={{ name: '1', sex: false, liuyan: '123456' }} >
        <Input name="name" />
        <Checkbox name="sex">男</Checkbox>
        <CheckboxGroup name="age" >
          <Checkbox value="1">100</Checkbox>
          <Checkbox value="2">200</Checkbox>
          <Checkbox value="3">300</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup name="study" radio >
          <Checkbox value="1">大学</Checkbox>
          <Checkbox value="2">小学</Checkbox>
        </CheckboxGroup>
        <Textarea name="liuyan" />
        <Button formType="submit" >提交</Button>
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('100'))
    userEvent.click(screen.getByText('大学'))
    userEvent.type(screen.getByTestId('textarea'), '00000')
    userEvent.click(screen.getByText('提交'))
    await waitFor(() => expect(onSubmit.mock.calls[0][0])
      .toEqual({ name: 'hello wrold', sex: true, age: ['1'], study: '1', liuyan: '00000' }))
  })

  test('自管理提交', async () => {
    const onSubmit = jest.fn()

    const screen = render(
      <Form onSubmit={onSubmit} >
        <Input name="name" value="1234567" onInput={() => {}} />
        <Checkbox name="sex" check={false} >男</Checkbox>
        <CheckboxGroup name="age" >
          <Checkbox value="1">100</Checkbox>
          <Checkbox value="2">200</Checkbox>
          <Checkbox value="3">300</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup name="study" radio >
          <Checkbox value="1">大学</Checkbox>
          <Checkbox value="2">小学</Checkbox>
        </CheckboxGroup>
        <Textarea name="liuyan" />
        <Button formType="submit" >提交</Button>
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('200'))
    userEvent.click(screen.getByText('大学'))
    userEvent.type(screen.getByTestId('textarea'), '我是多行文本')
    userEvent.click(screen.getByText('提交'))
    await waitFor(() => expect(onSubmit.mock.calls[0][0])
      .toEqual({ name: 1234567, sex: false, age: ['2'], study: '1', liuyan: '我是多行文本' }))
  })

  test('重置', async () => {
    const onSubmit = jest.fn()

    const screen = render(
      <Form onSubmit={onSubmit} defaultValue={{ name: '1', sex: false }} >
        <Input name="name" />
        <Checkbox name="sex">男</Checkbox>
        <CheckboxGroup name="age" >
          <Checkbox value="1">100</Checkbox>
          <Checkbox value="2">200</Checkbox>
          <Checkbox value="3">300</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup name="study" radio >
          <Checkbox value="1">大学</Checkbox>
          <Checkbox value="2">小学</Checkbox>
        </CheckboxGroup>
        <Textarea name="liuyan" />
        <Button formType="submit" >提交</Button>
        <Button formType="reset" >重置</Button>
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('200'))
    userEvent.click(screen.getByText('大学'))
    userEvent.type(screen.getByTestId('textarea'), '我是多行文本')
    userEvent.click(screen.getByText('重置'))
    userEvent.click(screen.getByText('提交'))
    await waitFor(() => expect(onSubmit.mock.calls[0][0])
      .toEqual({ name: '', sex: false, age: [], study: '', liuyan: '' }))
  })

  test('实例使用-提交', async () => {
    const onSubmit = jest.fn()
    const form = React.createRef<Form>()

    const screen = render(
      <Form onSubmit={onSubmit} ref={form} >
        <Input name="name" />
        <Checkbox name="sex">男</Checkbox>
        <CheckboxGroup name="age" >
          <Checkbox value="1">100</Checkbox>
          <Checkbox value="2">200</Checkbox>
          <Checkbox value="3">300</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup name="study" radio >
          <Checkbox value="1">大学</Checkbox>
          <Checkbox value="2">小学</Checkbox>
        </CheckboxGroup>
        <Textarea name="liuyan" />
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('200'))
    userEvent.click(screen.getByText('大学'))
    userEvent.type(screen.getByTestId('textarea'), '我是多行文本')
    form.current.submit()
    await waitFor(() => expect(onSubmit.mock.calls[0][0])
      .toEqual({ name: 'hello wrold', sex: true, age: ['2'], study: '1', liuyan: '我是多行文本' }))
  })

  test('实例使用-重置', async () => {
    const onSubmit = jest.fn()
    const form = React.createRef<Form>()

    const screen = render(
      <Form onSubmit={onSubmit} ref={form} >
        <Input name="name" />
        <Checkbox name="sex">男</Checkbox>
        <CheckboxGroup name="age" >
          <Checkbox value="1">100</Checkbox>
          <Checkbox value="2">200</Checkbox>
          <Checkbox value="3">300</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup name="study" radio >
          <Checkbox value="1">大学</Checkbox>
          <Checkbox value="2">小学</Checkbox>
        </CheckboxGroup>
        <Textarea name="liuyan" />
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('200'))
    userEvent.click(screen.getByText('小学'))
    userEvent.type(screen.getByTestId('textarea'), 'abcd')
    form.current.reset()
    form.current.submit()
    await waitFor(() => expect(onSubmit.mock.calls[0][0])
      .toEqual({ sex: false, name: '', age: [], study: '', liuyan: '' }))
  })

  test('实例使用-获取值', async () => {
    const onSubmit = jest.fn()
    const form = React.createRef<Form>()

    const screen = render(
      <Form onSubmit={onSubmit} ref={form} >
        <Input name="name" />
        <Checkbox name="sex">男</Checkbox>
        <CheckboxGroup name="age" >
          <Checkbox value="1">100</Checkbox>
          <Checkbox value="2">200</Checkbox>
          <Checkbox value="3">300</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup name="study" radio >
          <Checkbox value="1">大学</Checkbox>
          <Checkbox value="2">小学</Checkbox>
        </CheckboxGroup>
        <Textarea name="liuyan" />
        <Textarea />
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    await (await screen.findAllByTestId('textarea')).map((item) => {
      userEvent.type(item, '1234567')
    })
    expect(await form.current.getValue())
      .toEqual({ name: 'hello wrold', sex: true, age: [], study: '', liuyan: 1234567 })
  })

  test('实例使用-设置值', async () => {
    const onSubmit = jest.fn()
    const form = React.createRef<Form>()

    render(
      <Form onSubmit={onSubmit} ref={form} >
        <Input name="name" />
        <Checkbox name="sex">男</Checkbox>
        <CheckboxGroup name="age" >
          <Checkbox value="1">100</Checkbox>
          <Checkbox value="2">200</Checkbox>
          <Checkbox value="3">300</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup name="study" radio >
          <Checkbox value="1">大学</Checkbox>
          <Checkbox value="2">小学</Checkbox>
        </CheckboxGroup>
        <Textarea name="liuyan" />
      </Form>
    )
    form.current.setValue({ name: 'hello wrold', sex: true, age: ['2'], study: '1', liuyan: '我是多行文本'})
    form.current.submit()
    await waitFor(() => expect(onSubmit.mock.calls[0][0])
      .toEqual({ name: 'hello wrold', sex: true, age: ['2'], study: '1', liuyan: '我是多行文本' }))
  })
})
