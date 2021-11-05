import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import { InputMask } from '../index.h5'

jest.mock('../../../Toast')

describe('inputMask', () => {

  test('快照', async () => {
    const onChange = jest.fn()
    const screen = render(<InputMask type="all" onChange={onChange} multiple />)
    await waitFor(() => expect(screen).toMatchSnapshot())
  })

  test('选择文件', async () => {
    const onChange = jest.fn()
    const screen = render(<InputMask type="all" onChange={onChange} multiple />)
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0][0]).toEqual(file))
  })

  test('选择错误类型文件', async () => {
    const onChange = jest.fn()
    const screen = render(<InputMask type="all" onChange={onChange} multiple />)
    const file = new File(['hello'], 'hello.go', { type: 'text/go' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(0))
  })


  test('指定选择的图片类型', async () => {
    const onChange = jest.fn()
    const screen = render(<InputMask type="image" onChange={onChange} multiple />)
    const file = new File(['hello'], 'hello.jpg', { type: 'image/jpg' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0][0]).toEqual(file))
  })

  test('指定选择的图片类型，选择错误类型', async () => {
    const onChange = jest.fn()
    const screen = render(<InputMask type="image" onChange={onChange} multiple />)
    const file = new File(['hello'], 'hello.jpg', { type: 'image/png' })
    const file2 = new File(['hello'], 'hello.mp4', { type: 'video/mp4' })
    const file3 = new File(['hello'], 'hello.png', { type: 'image/png' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file2)
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file3)
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(2))
    await waitFor(() => expect(onChange.mock.calls[0][0][0]).toEqual(file))
    await waitFor(() => expect(onChange.mock.calls[1][0][0]).toEqual(file3))
  })

  test('指定选择的图片类型，全图片类型测试', async () => {
    const onChange = jest.fn()
    const screen = render(<InputMask type="image" onChange={onChange} multiple />)
    const jpg = new File(['hello'], 'hello.jpg', { type: 'image/jpg' })
    const jpeg = new File(['hello'], 'hello.jpeg', { type: 'image/jpeg' })
    const png = new File(['hello'], 'hello.png', { type: 'image/png' })
    const gif = new File(['hello'], 'hello.gif', { type: 'image/gif' })
    const bmp = new File(['hello'], 'hello.bmp', { type: 'image/bmp' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), jpg)
    UserEvent.upload(screen.getByTestId('uplaod-btn'), jpeg)
    UserEvent.upload(screen.getByTestId('uplaod-btn'), png)
    UserEvent.upload(screen.getByTestId('uplaod-btn'), gif)
    UserEvent.upload(screen.getByTestId('uplaod-btn'), bmp)
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(5))
    await waitFor(() => expect(onChange.mock.calls[0][0][0]).toEqual(jpg))
    await waitFor(() => expect(onChange.mock.calls[1][0][0]).toEqual(jpeg))
    await waitFor(() => expect(onChange.mock.calls[2][0][0]).toEqual(png))
    await waitFor(() => expect(onChange.mock.calls[3][0][0]).toEqual(gif))
    await waitFor(() => expect(onChange.mock.calls[4][0][0]).toEqual(bmp))
  })

  test('指定选择的图片类型，恶意文件', async () => {
    const onChange = jest.fn()
    const screen = render(<InputMask type="image" onChange={onChange} multiple />)
    const jpg = new File(['hello'], 'hello.jpg', { type: 'text' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), jpg)

    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(0))
  })

  test('指定选择的视频类型', async () => {
    const onChange = jest.fn()
    const screen = render(<InputMask type="video" onChange={onChange} multiple />)
    const file = new File(['hello'], 'hello.mp4', { type: 'video/mp4' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0][0]).toEqual(file))
  })

  test('指定选择的视频类型， 全视频类型测试', async () => {
    const onChange = jest.fn()
    const screen = render(<InputMask type="video" onChange={onChange} multiple />)
    const mp4 = new File(['hello'], 'hello.mp4', { type: 'video/mp4' })
    const mp3 = new File(['hello'], 'hello.mp3', { type: 'audio/mp3' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), mp4)
    UserEvent.upload(screen.getByTestId('uplaod-btn'), mp3)
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(onChange.mock.calls[0][0][0]).toEqual(mp4))
  })


  test('指定选择的视频类型，恶意文件', async () => {
    const onChange = jest.fn()
    const screen = render(<InputMask type="image" onChange={onChange} multiple />)
    const mp4 = new File(['hello'], 'hello.mp4', { type: 'video/mp4' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), mp4)

    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(0))
  })
})
