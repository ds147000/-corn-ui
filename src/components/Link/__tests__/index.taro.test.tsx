/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-magic-numbers */
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Taro from '@tarojs/taro'
import Link from '../index.taro'

const navigateTo = Taro.navigateTo as unknown as jest.Mock
const redirectTo = Taro.redirectTo as unknown as jest.Mock
const navigateToMiniProgram = Taro.navigateToMiniProgram as unknown as jest.Mock

beforeEach(() => {
  navigateTo.mockReset()
  navigateToMiniProgram.mockReset()
  redirectTo.mockReset()
})


test('to /home', () => {
  const screen = render(<Link to="/home">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(navigateTo).toHaveBeenCalledTimes(1)
  expect(navigateTo.mock.calls[0][0]).toEqual({ url: '/home' })
})

test('to /home View', () => {
  const screen = render(<Link to="/home" target="View" >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(navigateTo).toHaveBeenCalledTimes(1)
  expect(navigateTo.mock.calls[0][0]).toEqual({ url: '/home' })
})

test('to https://baidu.com', () => {
  const screen = render(<Link to="/home">首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(navigateTo).toHaveBeenCalledTimes(1)
  expect(navigateTo.mock.calls[0][0]).toEqual({ url: '/home' })
})

test('replace to /home', () => {
  const screen = render(<Link to="/home" replace >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(redirectTo).toHaveBeenCalledTimes(1)
  expect(redirectTo.mock.calls[0][0]).toEqual({ url: '/home' })
})

test('to openmp', () => {
  const screen = render(<Link to="openmp:///home" >前往小程序</Link>)
  fireEvent.click(screen.getByText('前往小程序'))
  expect(navigateToMiniProgram).toHaveBeenCalledTimes(1)
  expect(navigateToMiniProgram.mock.calls[0][0]).toEqual({ path: '/home', appId: '' })
})

test('to openmp replace', () => {
  const screen = render(<Link to="openmp:///home" replace >前往小程序</Link>)
  fireEvent.click(screen.getByText('前往小程序'))
  expect(navigateToMiniProgram).toHaveBeenCalledTimes(1)
  expect(navigateToMiniProgram.mock.calls[0][0]).toEqual({ path: '/home', appId: '' })
  expect(redirectTo).toHaveBeenCalledTimes(0)
})

test('to openmp and appId', () => {
  Link.appId = '001'
  const screen = render(<Link to="openmp:///home" >前往小程序</Link>)
  fireEvent.click(screen.getByText('前往小程序'))
  expect(navigateToMiniProgram).toHaveBeenCalledTimes(1)
  expect(navigateToMiniProgram.mock.calls[0][0]).toEqual({ path: '/home', appId: '001' })
})

test('to openmp reset appId', () => {
  Link.appId = '001'
  const screen = render(<Link to="openmp:///home" appId="002" >前往小程序</Link>)
  fireEvent.click(screen.getByText('前往小程序'))
  expect(navigateToMiniProgram).toHaveBeenCalledTimes(1)
  expect(navigateToMiniProgram.mock.calls[0][0]).toEqual({ path: '/home', appId: '002' })
})

test('拦截', () => {
  const onBefer = (): boolean => true
  const screen = render(<Link to="/home" onBefor={onBefer} >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(navigateTo).toHaveBeenCalledTimes(0)
})

test('禁用', () => {
  const screen = render(<Link to="/home" disable >首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(navigateTo).toHaveBeenCalledTimes(0)
})



test('to /home', () => {
  const onClick = jest.fn()
  const screen = render(<Link to="/home" onClick={onClick}>首页</Link>)
  fireEvent.click(screen.getByText('首页'))
  expect(onClick).toHaveBeenCalledTimes(1)

})
