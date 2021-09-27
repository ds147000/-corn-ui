/* eslint-disable no-magic-numbers */
import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { View, Text } from '@tarojs/components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Button from '../index'

describe('<Button />', () => {
  test('基本使用', () => {
    const screen = render(<Button />)
    expect(screen.container).toMatchSnapshot()
  })

  test('标题：向日葵妈妈UI', () => {
    const screen = render(<Button>向日葵妈妈UI</Button>)
    screen.getByText('向日葵妈妈UI')
    expect(screen.container).toMatchSnapshot()
  })

  test('复杂标题：节点+文字', () => {
    const screen = render(
      <Button>
        <View>
          <Text>我是图标</Text>
        </View>
        <Text>向日葵妈妈UI</Text>
      </Button>
    )
    screen.getByText('向日葵妈妈UI')
    screen.getByText('我是图标')
    expect(screen.container).toMatchSnapshot()
  })

  test('点击事件', () => {
    const onClick = jest.fn()
    const screen = render(<Button onClick={onClick}>向日葵妈妈UI</Button>)
    fireEvent.click(screen.getByText('向日葵妈妈UI'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('禁用', () => {
    const onClick = jest.fn()
    const screen = render(<Button onClick={onClick} disabled >向日葵妈妈UI</Button>)
    fireEvent.click(screen.getByText('向日葵妈妈UI'))
    expect(onClick).toHaveBeenCalledTimes(0)
  })

  test('size', () => {
    const screen = render(
      <View>
        <Button size="max">向日葵妈妈UI</Button>
        <Button size="big">向日葵妈妈UI</Button>
        <Button size="large">向日葵妈妈UI</Button>
        <Button size="middle">向日葵妈妈UI</Button>
        <Button size="small">向日葵妈妈UI</Button>
        <Button size="mini">向日葵妈妈UI</Button>
      </View>
    )
    expect(screen.container).toMatchSnapshot()
  })

  test('type', () => {
    const screen = render(
      <View>
        <Button type="error">向日葵妈妈UI</Button>
        <Button type="link">向日葵妈妈UI</Button>
        <Button type="pop">向日葵妈妈UI</Button>
        <Button type="primary">向日葵妈妈UI</Button>
        <Button type="warn">向日葵妈妈UI</Button>
      </View>
    )
    expect(screen.container).toMatchSnapshot()
  })

  test('icon', () => {
    const screen = render(<Button icon={<View>我是图标</View>}>向日葵妈妈UI</Button>)
    screen.getByText('我是图标')
    expect(screen.container).toMatchSnapshot()
  })

  test('block', () => {
    const BlockScreen = render(<Button block >向日葵妈妈UI</Button>).container.innerHTML.toString()
    const DefualtScreen = render(<Button block={false} >向日葵妈妈UI</Button>).container.innerHTML.toString()

    expect(BlockScreen).not.toBe(DefualtScreen)
  })

  test('ghost', () => {
    const BlockScreen = render(<Button ghost >向日葵妈妈UI</Button>).container.innerHTML.toString()
    const DefualtScreen = render(<Button ghost={false} >向日葵妈妈UI</Button>).container.innerHTML.toString()

    expect(BlockScreen).not.toBe(DefualtScreen)
  })

  test('href', async () => {
    const screen = render(
      <BrowserRouter>
        <Switch>
          <Route>
            <Button to="/home" >向日葵妈妈UI</Button>
          </Route>
        </Switch>
      </BrowserRouter>
      )
    await waitFor(() => expect(screen.container.querySelector('a').href).toBe('http://localhost/home'))
    expect(screen).toMatchSnapshot()
  })

  test('固定宽带', () => {
    const screen = render(<Button auto />)
    expect(screen.container).toMatchSnapshot()
  })

})
