import { render, waitFor } from '@testing-library/react'
import React from 'react'
import Upload from '../index'
import UserEvent from '@testing-library/user-event'

jest.mock('../inputMask')
jest.mock('../../PreviewImage')
jest.mock('../../Toast')

describe('Uplaod.h5', () => {

  test('快照', async () => {
    const screen = render(<Upload />)
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('渲染自定义按钮', async () => {
    const screen = render(<Upload btn={() => <div>upload</div>} />)
    screen.getByText('upload')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('上传', async () => {
    const handelUpload = jest.fn()
    const screen = render(<Upload handelUpload={handelUpload} />)
    const file = new File([], '123.jpg', { type: 'image/jpg' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
    await waitFor(() => expect(handelUpload).toHaveBeenCalledTimes(1))
  })

  test('上传成功', async () => {
    let a = 1
    const handelUpload = jest.fn((file: FileList) => Promise.resolve([{ mediaId: a++, content: '123.jpg' }]))

    const screen = render(<Upload handelUpload={handelUpload} />)
    const file = new File([], '123.jpg', { type: 'image/jpg' })
    const file2 = new File([], '123.jpg', { type: 'image/jpg' })
    const file3 = new File([], '123.jpg', { type: 'image/jpg' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
    await waitFor(async () => expect(await (await screen.findAllByTestId('upload-item')).length).toBe(1))
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file2)
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file3)
    await waitFor(async () => expect(await (await screen.findAllByTestId('upload-item')).length).toBe(3))
  })

  test('上传失败', async () => {
    const handelUpload = jest.fn((file: FileList) => Promise.reject(new Error('上传失败')))

    const screen = render(<Upload handelUpload={handelUpload} />)
    const file = new File([], '123.jpg')
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
  })

  test('指定全局上传成功', async () => {
    let a = 1
    const handelUpload = jest.fn((file: FileList) => Promise.resolve([{ mediaId: a++, content: '123.jpg' }]))
    Upload.handelUpload = handelUpload

    const screen = render(<Upload />)
    const file = new File([], '123.jpg', { type: 'image/jpg' })
    const file2 = new File([], '123.jpg', { type: 'image/jpg' })
    const file3 = new File([], '123.jpg', { type: 'image/jpg' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
    await waitFor(async () => expect(await (await screen.findAllByTestId('upload-item')).length).toBe(1))
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file2)
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file3)
    await waitFor(async () => expect(await (await screen.findAllByTestId('upload-item')).length).toBe(3))
  })
})
