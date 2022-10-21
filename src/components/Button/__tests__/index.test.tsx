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

  test('标题：@CornUI', () => {
    const screen = render(<Button>@CornUI</Button>)
    screen.getByText('@CornUI')
    expect(screen.container).toMatchSnapshot()
  })

  test('复杂标题：节点+文字', () => {
    const screen = render(
      <Button>
        <View>
          <Text>我是图标</Text>
        </View>
        <Text>@CornUI</Text>
      </Button>
    )
    screen.getByText('@CornUI')
    screen.getByText('我是图标')
    expect(screen.container).toMatchSnapshot()
  })

  test('点击事件', () => {
    const onClick = jest.fn()
    const screen = render(<Button onClick={onClick}>@CornUI</Button>)
    fireEvent.click(screen.getByText('@CornUI'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('禁用', () => {
    const onClick = jest.fn()
    const screen = render(<Button onClick={onClick} disabled >@CornUI</Button>)
    fireEvent.click(screen.getByText('@CornUI'))
    expect(onClick).toHaveBeenCalledTimes(0)
  })

  test('size', () => {
    const screen = render(
      <View>
        <Button size="max">@CornUI</Button>
        <Button size="big">@CornUI</Button>
        <Button size="large">@CornUI</Button>
        <Button size="middle">@CornUI</Button>
        <Button size="small">@CornUI</Button>
        <Button size="mini">@CornUI</Button>
      </View>
    )
    expect(screen.container).toMatchSnapshot()
  })

  test('type', () => {
    const screen = render(
      <View>
        <Button type="error">@CornUI</Button>
        <Button type="link">@CornUI</Button>
        <Button type="pop">@CornUI</Button>
        <Button type="primary">@CornUI</Button>
        <Button type="warn">@CornUI</Button>
      </View>
    )
    expect(screen.container).toMatchSnapshot()
  })

  test('icon', () => {
    const screen = render(<Button icon={<View>我是图标</View>}>@CornUI</Button>)
    screen.getByText('我是图标')
    expect(screen.container).toMatchSnapshot()
  })

  test('block', () => {
    const BlockScreen = render(<Button block >@CornUI</Button>).container.innerHTML.toString()
    const DefualtScreen = render(<Button block={false} >@CornUI</Button>).container.innerHTML.toString()

    expect(BlockScreen).not.toBe(DefualtScreen)
  })

  test('ghost', () => {
    const BlockScreen = render(<Button ghost >@CornUI</Button>).container.innerHTML.toString()
    const DefualtScreen = render(<Button ghost={false} >@CornUI</Button>).container.innerHTML.toString()

    expect(BlockScreen).not.toBe(DefualtScreen)
  })

  test('href', async () => {
    const screen = render(
      <BrowserRouter>
        <Switch>
          <Route>
            <Button to="/home" >@CornUI</Button>
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
