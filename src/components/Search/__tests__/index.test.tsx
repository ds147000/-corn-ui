import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import Search from '../index'

describe('Search', () => {
  test('基础快照', async () => {
    const screen = render(<Search />)
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('基础快照 light', async () => {
    const screen = render(<Search type="light" />)
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('插入尾部内容', async () => {
    const onCLick = jest.fn()
    const screen = render(<Search suffix={<div onClick={onCLick} >打卡</div>} />)
    fireEvent.click(screen.getByText('打卡'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
    await waitFor(() => expect(onCLick).toHaveBeenCalledTimes(1))
  })

  test('开启返回', async () => {
    const onBack = jest.fn()
    const screen = render(<Search back onBack={onBack} />)
    fireEvent.click(screen.getByTestId('back'))
    await waitFor(() => expect(onBack).toHaveBeenCalledTimes(1))
  })

  test('关闭返回', async () => {
    const onBack = jest.fn()
    const screen = render(<Search back={false} onBack={onBack} />)
    await waitFor(async () => expect(await screen.queryByTestId('back')).toBeNull())
    await waitFor(() => expect(onBack).toHaveBeenCalledTimes(0))
  })

  test('输入值，搜索', async () => {
    const onSearch = jest.fn()
    const onChange = jest.fn()
    const screen = render(<Search openInput onSearch={onSearch} onChange={onChange} />)
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山')
    UserEvent.click(screen.getByTestId('search-btn'))
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onSearch).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0]).toBe('喜马拉雅山'))
    await waitFor(() => expect(onSearch.mock.calls[0][0]).toBe('喜马拉雅山'))
  })

  test('空值，搜索', async () => {
    const onSearch = jest.fn()
    const onChange = jest.fn()
    const screen = render(<Search openInput onSearch={onSearch} onChange={onChange} />)
    UserEvent.click(screen.getByTestId('search-btn'))
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(0))
    await waitFor(() => expect(onSearch).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onSearch.mock.calls[0][0]).toBe(''))
  })

  test('输入值，清空。 搜索', async () => {
    const onSearch = jest.fn()
    const onChange = jest.fn()
    const screen = render(<Search onSearch={onSearch} openInput onChange={onChange} allowClear />)
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山')
    UserEvent.click(screen.getByTestId('search-clear'))
    UserEvent.click(screen.getByTestId('search-btn'))
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(2))
    await waitFor(() => expect(onSearch).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0]).toBe('喜马拉雅山'))
    await waitFor(() => expect(onChange.mock.calls[1][0]).toBe(''))
    await waitFor(() => expect(onSearch.mock.calls[0][0]).toBe(''))
  })

  test('外部输入值，搜索', async () => {
    const onSearch = jest.fn()
    const onChange = jest.fn()
    const screen = render(<Search value="100" openInput onSearch={onSearch} onChange={onChange} />)
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山')
    UserEvent.click(screen.getByTestId('search-btn'))
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onSearch).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0]).toBe('喜马拉雅山'))
    await waitFor(() => expect(onSearch.mock.calls[0][0]).toBe('100'))
  })

  test('设置提示语', async () => {
    const screen = render(<Search openInput placeholder="请输入关键词" />)
    screen.getByText('请输入关键词')
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山')
    await waitFor(async () => expect(await screen.queryByText('喜马拉雅山')).not.toBeNull())
  })

  test('设置提示语列表', async () => {
    const screen = render(<Search openInput placeholder={[
      '常青藤爸爸',
      '向日葵妈妈',
      '请输入关键字搜索'
    ]} />)
    screen.getByText('常青藤爸爸')
    screen.getByText('向日葵妈妈')
    screen.getByText('请输入关键字搜索')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('设置提示列表 输入内容', async () => {
    const screen = render(<Search openInput placeholder={[
      '常青藤爸爸',
      '向日葵妈妈',
      '请输入关键字搜索'
    ]} />)
    screen.getByText('常青藤爸爸')
    screen.getByText('向日葵妈妈')
    screen.getByText('请输入关键字搜索')
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山')
    await waitFor(() => expect(screen.getByText('喜马拉雅山')))
    await waitFor(() => expect(screen.queryByText('常青藤爸爸')).toBeNull())
    await waitFor(() => expect(screen.queryByText('向日葵妈妈')).toBeNull())
    await waitFor(() => expect(screen.queryByText('请输入关键字搜索')).toBeNull())
  })

  test('点击事件', async () => {
    const onBack = jest.fn()
    const onClick = jest.fn()
    const onSearch = jest.fn()
    const screen = render(<Search back onBack={onBack} onClick={onClick} onSearch={onSearch} />)
    fireEvent.click(screen.getByTestId('searc-box'))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onBack).toHaveBeenCalledTimes(0)
    expect(onSearch).toHaveBeenCalledTimes(0)
  })

  test('点击事件 同时开启输入', async () => {
    const onBack = jest.fn()
    const onClick = jest.fn()
    const onSearch = jest.fn()
    const screen = render(<Search back openInput onBack={onBack} onClick={onClick} onSearch={onSearch} />)
    fireEvent.click(screen.getByTestId('searc-box'))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onBack).toHaveBeenCalledTimes(0)
    expect(onSearch).toHaveBeenCalledTimes(0)
  })

})
