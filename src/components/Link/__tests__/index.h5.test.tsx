/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-magic-numbers */
import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import Link from '../index.h5'

const redirectTo = window.location.replace as unknown as jest.Mock

beforeEach(() => {
  redirectTo.mockReset()
})


test('to default', async () => {
  const screen = render(<Link>首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/')
})


test('to /home', async () => {
  const screen = render(<Link to="/home">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home of primary', async () => {
  const screen = render(<Link to="/home" type="primary">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home of warn', async () => {
  const screen = render(<Link to="/home" type="warn">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home of pop', async () => {
  const screen = render(<Link to="/home" type="pop">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home of link', async () => {
  const screen = render(<Link to="/home" type="link">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home of error', async () => {
  const screen = render(<Link to="/home" type="error">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to /home View', () => {
  const screen = render(<Link to="/home" target="View" >首页</Link>)
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
})

test('to https://baidu.com', () => {
  const screen = render(<Link to="https://baidu.com/">首页</Link>)
  expect(screen.container.querySelector('a')?.href).toBe('https://baidu.com/')
})

test('replace to /home', () => {
  const screen = render(<Link to="/home" replace >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(redirectTo).toHaveBeenCalledTimes(1)
  expect(redirectTo.mock.calls[0][0]).toBe('/home')
})

test('to openmp', async () => {
  const screen = render(<Link to="openmp:///home" >首页</Link>)
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')).not.toBeNull())
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('path'))
    .toBe('/home'))
})

test('to openmp and globa appid', async () => {
  Link.appId = '123'
  const screen = render(<Link to="openmp:///home" >首页</Link>)
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')).not.toBeNull())
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('path'))
    .toBe('/home'))
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('username'))
    .toBe('123'))
})

test('to openmp and pre appid', async () => {
  const screen = render(<Link to="openmp:///home" appId="456" >首页</Link>)
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')).not.toBeNull())
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('path'))
    .toBe('/home'))
  await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('username'))
    .toBe('456'))
})

test('拦截', () => {
  const onClick = jest.fn()
  const onBefer = (): boolean => true
  const screen = render(<Link to="/home" onBefor={onBefer} onClick={onClick} >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(onClick).toHaveBeenCalledTimes(0)
})

test('禁用', () => {
  const onClick = jest.fn()
  const screen = render(<Link to="/home" disable onClick={onClick} >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(onClick).toHaveBeenCalledTimes(0)
})

test('globale onBefor', () => {
  const onBefor = jest.fn()
  Link.onBefor = onBefor
  const screen = render(<Link to="/home" replace >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(onBefor).toHaveBeenCalledTimes(1)
})
