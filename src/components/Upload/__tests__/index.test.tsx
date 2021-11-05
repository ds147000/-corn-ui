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
    const screen = render(<Upload list={[]} btn={() => <div>upload</div>} />)
    screen.getByText('upload')
    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('上传', async () => {
    const handelUpload = jest.fn((file: FileList) => Promise.resolve([{ mediaId: 100, content: '123.jpg', status: 'done' }]))
    const screen = render(<Upload handelUpload={handelUpload as any} />)
    const file = new File([], '123.jpg', { type: 'image/jpg' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
    await waitFor(() => expect(handelUpload).toHaveBeenCalledTimes(1))
  })

  test('上传成功', async () => {
    let a = 1
    const handelUpload = jest.fn((file: FileList) => Promise.resolve([{ mediaId: a++, content: '123.jpg', status: 'done' }]))

    const screen = render(<Upload handelUpload={handelUpload as any} />)
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
    const handelUpload = (file: FileList) => Promise.reject(new Error('上传失败'))

    const screen = render(<Upload handelUpload={handelUpload as any} />)
    const file = new File([], '123.jpg', { type: 'image/jpg' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
  })


  test('上传失败 未指定上传方法', async () => {
    const screen = render(<Upload />)
    const file = new File([], '123.jpg', { type: 'image/jpg' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), file)
  })

  test('指定全局上传成功', async () => {
    let a = 1
    const handelUpload = jest.fn((file: FileList) => Promise.resolve([{ mediaId: a++, content: '123.jpg', status: 'done' }]))
    Upload.handelUpload = handelUpload as any

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

  test('超出限制', async () => {
    let a = 1
    const handelUpload = jest.fn((file: FileList) => Promise.resolve([{ mediaId: a++, content: '123.jpg', status: 'done' }]))
    Upload.handelUpload = handelUpload as any

    const screen = render(<Upload count={2} />)
    const file = new File([], '123.jpg', { type: 'image/jpg' })
    const file2 = new File([], '123.jpg', { type: 'image/jpg' })
    const file3 = new File([], '123.jpg', { type: 'image/jpg' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), [file3, file2, file])
    const btn = await screen.queryAllByTestId('upload-item')
    await waitFor(() => expect(btn.length).toBe(0))
  })

  test('删除文件', async () => {
    let a = 1
    const handelUploads = (file: FileList) => {
      const list = []
      for(let i = 0; i < file.length; i++) {
        a = a + 1
        list.push({ mediaId: a, content: `123${a}.jpg`, status: 'done' })
      }
      return Promise.resolve(list)
    }

    const uploadEl = React.createRef<Upload>()
    const screen = render(<Upload ref={uploadEl} handelUpload={handelUploads as any} />)
    const file = new File([], '123.jpg', { type: 'image/jpg' })
    const file2 = new File([], '123.jpg', { type: 'image/jpg' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), [file2])
    UserEvent.upload(screen.getByTestId('uplaod-btn'), [file])

    await new Promise(res => setTimeout(res, 500))
    uploadEl.current.onRemove({ mediaId: 2, content: '1232.jpg', status: 'done' })
    await waitFor(async () => expect(await screen.queryAllByTestId('upload-item').length).toBe(1))
  })

  test('拦截上传', async () => {
    const screen = render(<Upload count={2} beforUpload={() => true} />)
    const file = new File([], '123.jpg', { type: 'image/jpg' })
    const file2 = new File([], '123.jpg', { type: 'image/jpg' })
    const file3 = new File([], '123.jpg', { type: 'image/jpg' })
    UserEvent.upload(screen.getByTestId('uplaod-btn'), [file3, file2, file])
    const btn = await screen.queryAllByTestId('upload-item')
    await waitFor(() => expect(btn.length).toBe(0))
  })

  test('小程序端上传', async () => {
    const uploadEl = React.createRef<Upload>()
    const screen = render(<Upload ref={uploadEl} />)
    uploadEl.current.onChangeOfMp(['123.jpg', '456.jpg'])
    await waitFor(async () => expect(await screen.queryAllByTestId('upload-item').length).toBe(2))
  })

  test('小程序端上传 超出限制', async () => {

    const uploadEl = React.createRef<Upload>()
    const screen = render(<Upload ref={uploadEl} count={1} />)
    uploadEl.current.onChangeOfMp(['123.jpg', '456.jpg'])
    await waitFor(async () => expect(await screen.queryAllByTestId('upload-item').length).toBe(0))
  })


  test('小程序端上传 拦截上传', async () => {

    const uploadEl = React.createRef<Upload>()
    const screen = render(<Upload ref={uploadEl} beforUpload={() => true} />)
    uploadEl.current.onChangeOfMp(['123.jpg', '456.jpg'])
    await waitFor(async () => expect(await screen.queryAllByTestId('upload-item').length).toBe(0))
  })
})
