/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-magic-numbers */
import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import Link from '../index.h5'

test('replace to /home', () => {
  const screen = render(<Link to="/replace" replace >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
})

test('to default', async () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const screen = render(<Link>首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/')
  expect(Link.history.push).toHaveBeenCalledTimes(1)
  expect((Link.history.push as jest.Mock).mock.calls[0][0]).toBe('')
})


test('to /home', async () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const screen = render(<Link to="/home">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
  expect(Link.history.push).toHaveBeenCalledTimes(1)
  expect((Link.history.push as jest.Mock).mock.calls[0][0]).toBe('/home')
})

test('to /home of primary', async () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const screen = render(<Link to="/home" type="primary">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
  expect(Link.history.push).toHaveBeenCalledTimes(1)
  expect((Link.history.push as jest.Mock).mock.calls[0][0]).toBe('/home')
})

test('to /home of warn', async () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const screen = render(<Link to="/home" type="warn">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
  expect(Link.history.push).toHaveBeenCalledTimes(1)
  expect((Link.history.push as jest.Mock).mock.calls[0][0]).toBe('/home')
})

test('to /home of pop', async () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const screen = render(<Link to="/home" type="pop">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
  expect(Link.history.push).toHaveBeenCalledTimes(1)
  expect((Link.history.push as jest.Mock).mock.calls[0][0]).toBe('/home')
})

test('to /home of link', async () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const screen = render(<Link to="/home" type="link">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
  expect(Link.history.push).toHaveBeenCalledTimes(1)
  expect((Link.history.push as jest.Mock).mock.calls[0][0]).toBe('/home')
})

test('to /home of error', async () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const screen = render(<Link to="/home" type="error">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
  expect(Link.history.push).toHaveBeenCalledTimes(1)
  expect((Link.history.push as jest.Mock).mock.calls[0][0]).toBe('/home')
})

test('to /home View', () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const screen = render(<Link to="/home" target="View" >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('http://localhost/home')
  expect(Link.history.push).toHaveBeenCalledTimes(1)
  expect((Link.history.push as jest.Mock).mock.calls[0][0]).toBe('/home')
})

test('to https://baidu.com', () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const screen = render(<Link to="https://baidu.com/">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(screen.container.querySelector('a')?.href).toBe('https://baidu.com/')
  expect(Link.history.push).toHaveBeenCalledTimes(1)
  expect((Link.history.push as jest.Mock).mock.calls[0][0]).toBe('https://baidu.com/')
})

test('replace to /home and cutrom history', () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const screen = render(<Link to="/home2" replace >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(Link.history.replace).toHaveBeenCalledTimes(1)
  expect((Link.history.replace as jest.Mock).mock.calls[0][0]).toBe('/home2')
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
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const onClick = jest.fn()
  const onBefer = (): boolean => true
  const screen = render(<Link to="/home" onBefor={onBefer} onClick={onClick} >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(Link.history.push).toHaveBeenCalledTimes(0)
})

test('禁用', () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const onClick = jest.fn()
  const screen = render(<Link to="/home" disabled onClick={onClick} >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(Link.history.push).toHaveBeenCalledTimes(0)
})

test('globale onBefor', () => {
  Link.history = {
    push: jest.fn(),
    replace: jest.fn()
  }
  const onBefor = jest.fn()
  Link.onBefor = onBefor
  const screen = render(<Link to="/home" replace >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(onBefor).toHaveBeenCalledTimes(1)
})
