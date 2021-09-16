import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import CheckBoxGroup from '../group'
import Checck from '../checkbox'

test('基本使用', () => {
  const screen = render(
    <CheckBoxGroup>
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
    </CheckBoxGroup>
  )

  screen.getByText('选项1')
  screen.getByText('选项2')

  expect(screen.container).toMatchSnapshot()
})

test('选中', async () => {
  const onChange = jest.fn()
  const screen = render(
    <CheckBoxGroup onChange={onChange} >
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
    </CheckBoxGroup>
  )

  fireEvent.click(screen.getByText('选项1'))
  fireEvent.click(screen.getByText('选项2'))

  await waitFor(() => expect(screen.container).toMatchSnapshot())
  await waitFor(() => expect(onChange).toHaveBeenCalledTimes(2))
  await waitFor(() => expect(onChange.mock.calls[0][0]).toEqual(['1']))
  await waitFor(() => expect(onChange.mock.calls[1][0]).toEqual(['1', '2']))
})

test('取消选中', async () => {
  const onChange = jest.fn()
  const screen = render(
    <CheckBoxGroup onChange={onChange} >
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
    </CheckBoxGroup>
  )

  fireEvent.click(screen.getByText('选项1'))
  fireEvent.click(screen.getByText('选项2'))
  fireEvent.click(screen.getByText('选项1'))
  fireEvent.click(screen.getByText('选项2'))

  await waitFor(() => expect(screen.container).toMatchSnapshot())
  expect(onChange).toHaveBeenCalledTimes(4)
  expect(onChange.mock.calls[0][0]).toEqual(['1'])
  expect(onChange.mock.calls[1][0]).toEqual(['1', '2'])
  expect(onChange.mock.calls[2][0]).toEqual(['2'])
  expect(onChange.mock.calls[3][0]).toEqual([])
})

test('取消选中 和默认值', async () => {
  const onChange = jest.fn()
  const screen = render(
    <CheckBoxGroup onChange={onChange} defaultValue={['1', '2']} >
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
    </CheckBoxGroup>
  )

  fireEvent.click(screen.getByText('选项1'))
  fireEvent.click(screen.getByText('选项2'))

  await waitFor(() => expect(screen.container).toMatchSnapshot())
  await waitFor(() => expect(onChange).toHaveBeenCalledTimes(2))
  await waitFor(() => expect(onChange.mock.calls[0][0]).toEqual(['2']))
  await waitFor(() => expect(onChange.mock.calls[1][0]).toEqual([]))
})

test('获取值', () => {
  const ref = React.createRef<CheckBoxGroup>()
  render(
    <CheckBoxGroup ref={ref}>
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
    </CheckBoxGroup>
  )

  expect(ref.current.getValue()).toEqual([])
})


test('获取值 和 默认值', () => {
  const ref = React.createRef<CheckBoxGroup>()
  render(
    <CheckBoxGroup ref={ref} defaultValue={['1', '2']}>
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
    </CheckBoxGroup>
  )

  expect(ref.current.getValue()).toEqual(['1', '2'])
})

test('操作后获取值', async () => {
  const ref = React.createRef<CheckBoxGroup>()
  const screen = render(
    <CheckBoxGroup ref={ref}>
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
    </CheckBoxGroup>
  )

  fireEvent.click(screen.getByText('选项1'))

  await waitFor(() => expect(ref.current.getValue()).toEqual(['1']))
})

test('操作后获取值2', async () => {
  const ref = React.createRef<CheckBoxGroup>()
  const screen = render(
    <CheckBoxGroup ref={ref}>
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
    </CheckBoxGroup>
  )

  fireEvent.click(screen.getByText('选项1'))
  fireEvent.click(screen.getByText('选项2'))

  await waitFor(() => expect(ref.current.getValue()).toEqual(['1', '2']))
})

test('操作后获取值 重置', async () => {
  const ref = React.createRef<CheckBoxGroup>()
  const screen = render(
    <CheckBoxGroup ref={ref}>
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
    </CheckBoxGroup>
  )

  fireEvent.click(screen.getByText('选项1'))
  fireEvent.click(screen.getByText('选项2'))
  ref.current.reset()
  await waitFor(() => expect(ref.current.getValue()).toEqual([]))
})

test('单选模式', async () => {
  const onChange = jest.fn()
  const screen = render(
    <CheckBoxGroup onChange={onChange} radio >
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
      <Checck value="3">选项3</Checck>
      <Checck value="4">选项4</Checck>
    </CheckBoxGroup>
  )

  fireEvent.click(screen.getByText('选项1'))
  fireEvent.click(screen.getByText('选项2'))
  fireEvent.click(screen.getByText('选项3'))
  fireEvent.click(screen.getByText('选项4'))

  await waitFor(() => expect(screen.container).toMatchSnapshot())
  await waitFor(() => expect(onChange.mock.calls[3][0]).toEqual(['4']))
})

test('设置值方法', async () => {
  const ref = React.createRef<CheckBoxGroup>()
  render(
    <CheckBoxGroup ref={ref} >
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
    </CheckBoxGroup>
  )

  ref.current.setValue(['1'])

  await waitFor(() => expect(ref.current.getValue()).toEqual(['1']))
})

test('全选', async () => {
  const ref = React.createRef<CheckBoxGroup>()
  render(
    <CheckBoxGroup ref={ref} >
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
      <Checck value="3">选项3</Checck>
    </CheckBoxGroup>
  )

  ref.current.selectAll()

  await waitFor(() => expect(ref.current.getValue()).toEqual(['1', '2', '3']))
})

test('全选', async () => {
  const ref = React.createRef<CheckBoxGroup>()
  render(
    <CheckBoxGroup ref={ref} >
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
      <Checck value="3">选项3</Checck>
      <Checck value="3">选项3</Checck>
    </CheckBoxGroup>
  )

  ref.current.selectAll()

  await waitFor(() => expect(ref.current.getValue()).toEqual(['1', '2', '3']))
})

test('单选 全选', async () => {
  const ref = React.createRef<CheckBoxGroup>()
  render(
    <CheckBoxGroup ref={ref} radio >
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
      <Checck value="3">选项3</Checck>
    </CheckBoxGroup>
  )

  ref.current.selectAll()

  await waitFor(() => expect(ref.current.getValue()).toEqual([]))
})

test('单选选择', async () => {
  const ref = React.createRef<CheckBoxGroup>()
  const screen = render(
    <CheckBoxGroup ref={ref} radio >
      <Checck value="1">选项1</Checck>
      <Checck value="2">选项2</Checck>
      <Checck value="3">选项3</Checck>
    </CheckBoxGroup>
  )

  fireEvent.click(screen.getByText('选项2'))
  fireEvent.click(screen.getByText('选项2'))

  await waitFor(() => expect(ref.current.getValue()).toEqual(['2']))
})
