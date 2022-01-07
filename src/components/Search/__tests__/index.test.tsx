import React from 'react'
import { fireEvent, render, waitFor, createEvent } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import Search from '../index'
import { act } from 'react-dom/test-utils'

jest.mock('../../Form')

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
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(5))
    await waitFor(() => expect(onSearch).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0]).toBe('喜'))
    await waitFor(() => expect(onChange.mock.calls[1][0]).toBe('喜马'))
    await waitFor(() => expect(onChange.mock.calls[2][0]).toBe('喜马拉'))
    await waitFor(() => expect(onChange.mock.calls[3][0]).toBe('喜马拉雅'))
    await waitFor(() => expect(onChange.mock.calls[4][0]).toBe('喜马拉雅山'))
    await waitFor(() => expect(onSearch.mock.calls[0][0]).toBe('喜马拉雅山'))
  })


  test('输入值，搜索 无onChange监听', async () => {
    const onSearch = jest.fn()
    const screen = render(<Search openInput onSearch={onSearch}  />)
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山1234')
    UserEvent.click(screen.getByTestId('search-btn'))
    await waitFor(() => expect(onSearch).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onSearch.mock.calls[0][0]).toBe('喜马拉雅山1234'))
  })

  test('输入值，搜索 无事件情况下', async () => {
    const screen = render(<Search openInput />)
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山')
    UserEvent.click(screen.getByTestId('search-btn'))
  })

  test('输入值，点击清空按钮。但是配置不可清空  -> 搜索', async () => {
    const onSearch = jest.fn()
    const onChange = jest.fn()
    const screen = render(<Search openInput allowClear={false} onSearch={onSearch} onChange={onChange} />)
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山')
    UserEvent.click(screen.getByTestId('search-btn'))
    await waitFor(() => expect(screen.container.querySelector('.xrk-search-clear')).toBeNull())
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(5))
    await waitFor(() => expect(onSearch).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0]).toBe('喜'))
    await waitFor(() => expect(onChange.mock.calls[1][0]).toBe('喜马'))
    await waitFor(() => expect(onChange.mock.calls[2][0]).toBe('喜马拉'))
    await waitFor(() => expect(onChange.mock.calls[3][0]).toBe('喜马拉雅'))
    await waitFor(() => expect(onChange.mock.calls[4][0]).toBe('喜马拉雅山'))
    await waitFor(() => expect(onSearch.mock.calls[0][0]).toBe('喜马拉雅山'))
  })

  test('空值，搜索', async () => {
    const onSearch = jest.fn()
    const onChange = jest.fn()
    const screen = render(<Search openInput onSearch={onSearch} onChange={onChange} />)
    act(() => {
      UserEvent.click(screen.getByTestId('search-btn'))
    })
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
    UserEvent.click(screen.container.querySelector('.xrk-search-clear'))
    UserEvent.click(screen.getByTestId('search-btn'))
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(6))
    await waitFor(() => expect(onSearch).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0]).toBe('喜'))
    await waitFor(() => expect(onChange.mock.calls[1][0]).toBe('喜马'))
    await waitFor(() => expect(onChange.mock.calls[2][0]).toBe('喜马拉'))
    await waitFor(() => expect(onChange.mock.calls[3][0]).toBe('喜马拉雅'))
    await waitFor(() => expect(onChange.mock.calls[4][0]).toBe('喜马拉雅山'))
    await waitFor(() => expect(onChange.mock.calls[5][0]).toBe(''))
    await waitFor(() => expect(onSearch.mock.calls[0][0]).toBe(''))
  })

  test('外部输入值，搜索', async () => {
    const onSearch = jest.fn()
    const onChange = jest.fn()
    const screen = render(<Search value="100" openInput onSearch={onSearch} onChange={onChange} />)
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山')
    UserEvent.click(screen.getByTestId('search-btn'))
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(5))
    await waitFor(() => expect(onSearch).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0]).toBe('100喜'))
    await waitFor(() => expect(onChange.mock.calls[1][0]).toBe('100马'))
    await waitFor(() => expect(onChange.mock.calls[2][0]).toBe('100拉'))
    await waitFor(() => expect(onChange.mock.calls[3][0]).toBe('100雅'))
    await waitFor(() => expect(onChange.mock.calls[4][0]).toBe('100山'))
    await waitFor(() => expect(onSearch.mock.calls[0][0]).toBe(100))
  })

  test('设置提示语', async () => {
    const screen = render(<Search openInput placeholder="请输入关键词" />)
    screen.getByText('请输入关键词')
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山')
    await waitFor(async () => expect(await screen.queryByText('请输入关键词')).toBeNull())
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
    await waitFor(() => expect(screen.queryByText('常青藤爸爸')).toBeNull())
    await waitFor(() => expect(screen.queryByText('向日葵妈妈')).toBeNull())
    await waitFor(() => expect(screen.queryByText('请输入关键字搜索')).toBeNull())
  })

  test('设置提示列表 失去焦', async () => {
    const screen = render(<Search openInput placeholder={[
      '常青藤爸爸',
      '向日葵妈妈',
      '请输入关键字搜索'
    ]} />)
    screen.getByText('常青藤爸爸')
    screen.getByText('向日葵妈妈')
    screen.getByText('请输入关键字搜索')
    const input = screen.getByTestId('input')
    fireEvent.focus(input)
    await waitFor(() => expect(screen.queryByText('常青藤爸爸')).toBeNull())
    await waitFor(() => expect(screen.queryByText('向日葵妈妈')).toBeNull())
    await waitFor(() => expect(screen.queryByText('请输入关键字搜索')).toBeNull())
    fireEvent.blur(input)
    await waitFor(() => expect(screen.queryByText('常青藤爸爸')).not.toBeNull())
    await waitFor(() => expect(screen.queryByText('向日葵妈妈')).not.toBeNull())
    await waitFor(() => expect(screen.queryByText('请输入关键字搜索')).not.toBeNull())
  })

  test('点击事件', async () => {
    const onBack = jest.fn()
    const onClick = jest.fn()
    const onSearch = jest.fn()
    const screen = render(<Search back onBack={onBack} onClick={onClick} onSearch={onSearch} />)
    fireEvent.click(screen.getByTestId('search-box'))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onBack).toHaveBeenCalledTimes(0)
    expect(onSearch).toHaveBeenCalledTimes(0)
  })

  test('点击事件 同时开启输入', async () => {
    const onBack = jest.fn()
    const onClick = jest.fn()
    const onSearch = jest.fn()
    const screen = render(<Search back openInput onBack={onBack} onClick={onClick} onSearch={onSearch} />)
    fireEvent.click(screen.getByTestId('search-box'))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onBack).toHaveBeenCalledTimes(0)
    expect(onSearch).toHaveBeenCalledTimes(0)
  })
})
