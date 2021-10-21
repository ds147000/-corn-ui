import React, { useEffect, useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../index.h5'
import Input from '../../Input'
import Checkbox from '../../Checkbox/checkbox'
import CheckboxGroup from '../../Checkbox/group'
import Button from '../../Button'

describe('Form', () => {
  test('渲染', () => {
    const screen = render(
      <Form>
        <Input />
        <Checkbox />

      </Form>
    )

    expect(screen.container.getElementsByTagName('input').length).toBe(2)

    expect(screen.container).toMatchSnapshot()
  })

  test('自带值', () => {
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
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    expect(input.value).toBe("123")

    const check = screen.getByText('男').querySelector('input') as HTMLInputElement
    expect(check.value).toBe("true")

    expect(screen.container).toMatchSnapshot()
  })

  test('初始化值', () => {
    const screen = render(
      <Form defaultValue={{ name: '小明', sex: false }} >
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
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    expect(input.value).toBe("小明")

    const check = screen.getByText('男').querySelector('input') as HTMLInputElement
    expect(check.value).toBe("false")

    expect(screen.container).toMatchSnapshot()
  })

  test('改变初始化值', async () => {
    const App = () => {
      const [value, setValue] = useState({ name: '小明', sex: false })

      useEffect(() => {
        setTimeout(() => setValue({ name: '123', sex: true }))
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
        </Form>
      )
    }

    await new Promise((res) => setTimeout(res, 100))

    const screen = render(<App />)

    const input = screen.getByTestId('input') as HTMLInputElement
    expect(input.value).toBe("小明")

    const check = screen.getByText('男').querySelector('input') as HTMLInputElement
    expect(check.value).toBe("false")

    expect(screen.container).toMatchSnapshot()
  })


  test('提交', () => {
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
        <Button formType="submit" >提交</Button>
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('100'))
    userEvent.click(screen.getByText('大学'))
    userEvent.click(screen.getByText('提交'))
    expect(onSubmit.mock.calls[0][0]).toEqual({ name: 'hello wrold', sex: true, age: ['1'], study: '1' })
  })

  test('具有初始化值的提交', () => {
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
        <Button formType="submit" >提交</Button>
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('100'))
    userEvent.click(screen.getByText('大学'))
    userEvent.click(screen.getByText('提交'))
    expect(onSubmit.mock.calls[0][0]).toEqual({ name: '1hello wrold', sex: true, age: ['1'], study: '1' })
  })


  test('自管理提交', () => {
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
        <Button formType="submit" >提交</Button>
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('200'))
    userEvent.click(screen.getByText('大学'))
    userEvent.click(screen.getByText('提交'))
    expect(onSubmit.mock.calls[0][0]).toEqual({ name: '1234567', sex: false, age: ['2'], study: '1' })
  })

  test('重置', () => {
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
    userEvent.click(screen.getByText('重置'))
    userEvent.click(screen.getByText('提交'))
    expect(onSubmit.mock.calls[0][0]).toEqual({ name: '', sex: false, age: [], study: '' })
  })

  test('实例使用-提交', () => {
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
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('200'))
    userEvent.click(screen.getByText('大学'))
    form.current.submit()
    expect(onSubmit.mock.calls[0][0]).toEqual({ name: 'hello wrold', sex: true, age: ['2'], study: '1' })
  })

  test('实例使用-重置', () => {
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
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    userEvent.click(screen.getByText('200'))
    userEvent.click(screen.getByText('小学'))
    form.current.reset()
    form.current.submit()
    expect(onSubmit.mock.calls[0][0]).toEqual({ sex: false, name: '', age: [], study: '' })
  })

  test('实例使用-获取值', () => {
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
      </Form>
    )

    const input = screen.getByTestId('input') as HTMLInputElement
    userEvent.type(input, 'hello wrold')

    const check = screen.getByText('男') as HTMLInputElement
    userEvent.click(check)
    expect(form.current.getValue()).toEqual({ name: 'hello wrold', sex: true, age: [], study: '' })
  })

  test('实例使用-设置值', () => {
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
      </Form>
    )
    form.current.setValue({ name: 'hello wrold', sex: true, age: ['2'], study: '1'})
    form.current.submit()
    expect(onSubmit.mock.calls[0][0]).toEqual({ name: 'hello wrold', sex: true, age: ['2'], study: '1' })
  })
})

