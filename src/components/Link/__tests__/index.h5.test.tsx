/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-magic-numbers */
import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Link from '../index.h5'

const App: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>{children}</Route>
      </Switch>
    </BrowserRouter>
  )
}

test('replace to /home', () => {
  const screen = render(
    <App>
      <Link to="/replace" replace >首页</Link>
    </App>
  )
  fireEvent.click(screen.getByText('首页'))
})

test('to default', async () => {

  const screen = render(
    <App>
      <Link>首页</Link>
    </App>
  )
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/')
})


test('to /home', async () => {

  const screen = render(<App><Link to="/home">首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home of primary', async () => {

  const screen = render(<App><Link to="/home" type="primary">首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home of warn', async () => {

  const screen = render(<App><Link to="/home" type="warn">首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home of pop', async () => {

  const screen = render(<App><Link to="/home" type="pop">首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home of link', async () => {

  const screen = render(<App><Link to="/home" type="link">首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home of error', async () => {

  const screen = render(<App><Link to="/home" type="error">首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home View', () => {

  const screen = render(<App><Link to="/home" target="View" >首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to https://baidu2.com', () => {

  const screen = render(<App><Link to="https://baidu2.com/">首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
})

test('replace to /home and cutrom history', () => {

  const screen = render(<App><Link to="/home2" replace >首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
})

test('to openmp', async () => {
  const screen = render(<App><Link to="openmp:///home" >首页</Link></App>)
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')).not.toBeNull())
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('path'))
    .toBe('/home'))
})

test('to openmp and globa appid', async () => {
  Link.appId = '123'
  const screen = render(<App><Link to="openmp:///home" >首页</Link></App>)
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')).not.toBeNull())
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('path'))
    .toBe('/home'))
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('username'))
    .toBe('123'))
})

test('to openmp and pre appid', async () => {
  const screen = render(<App><Link to="openmp:///home" appId="456" >首页</Link></App>)
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')).not.toBeNull())
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('path'))
    .toBe('/home'))
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('username'))
    .toBe('456'))
})

test('拦截', () => {

  const onClick = jest.fn()
  const onBefer = (): boolean => true
  const screen = render(<App><Link to="/home" onBefor={onBefer} onClick={onClick} >首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
  expect(onClick).toHaveBeenCalledTimes(0)
})

test('禁用', () => {

  const onClick = jest.fn()
  const screen = render(<App><Link to="/home" disabled onClick={onClick} >首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
  expect(onClick).toHaveBeenCalledTimes(0)
})

test('globale onBefor', () => {

  const onBefor = jest.fn()
  Link.onBefor = onBefor
  const screen = render(<App><Link to="/home" replace >首页</Link></App>)
  fireEvent.click(screen.getByText('首页'))
  expect(onBefor).toHaveBeenCalledTimes(1)
})
