import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { UploadBase, Upload } from '../base'
import { act } from 'react-dom/test-utils'

jest.mock('../../PreviewImage')

describe('UploadBase', () => {
  test('row', async () => {
    const screen = render(<UploadBase />)

    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('square', async () => {
    const screen = render(<UploadBase />)

    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })


  test('自定义按钮', async () => {
    const onClick = jest.fn()
    const screen = render(<UploadBase btn={<div onClick={onClick} >上传</div>} />)
    fireEvent.click(screen.getByText('上传'))
    await waitFor(() => expect(screen.container).toMatchSnapshot())
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
  })

  test('list', async () => {
    const list: Upload.Media[] = [
      {
        mediaId: 100,
        content: '100.jpg',
        status: 'done'
      },
      {
        mediaId: 101,
        content: '101.jpg',
        status: 'done'
      },
      {
        mediaId: 102,
        content: '102.jpg',
        status: 'done'
      }
    ]

    const onClick = jest.fn()
    const screen = render(<UploadBase list={list} btn={<div onClick={onClick} >上传</div>} />)
    fireEvent.click(screen.getByText('上传'))
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
    await waitFor(async () => expect(await screen.queryAllByTestId('upload-item').length).toBe(3))
  })

  test('list and itemClass', async () => {
    const list: Upload.Media[] = [
      {
        mediaId: 100,
        content: '100.jpg',
        status: 'done'
      },
      {
        mediaId: 101,
        content: '101.jpg',
        status: 'done'
      },
      {
        mediaId: 102,
        content: '102.jpg',
        status: 'done'
      }
    ]

    const onClick = jest.fn()
    const screen = render(<UploadBase itemClassName="abs100" list={list} btn={<div onClick={onClick} >上传</div>} />)
    fireEvent.click(screen.getByText('上传'))
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
    await waitFor(async () => expect(await screen.queryAllByTestId('upload-item').length).toBe(3))
    await waitFor(async () => expect(screen.container.querySelectorAll('.abs100').length).toBe(3))
  })

  test('list and count', async () => {
    const list: Upload.Media[] = [
      {
        mediaId: 100,
        content: '100.jpg',
        status: 'done'
      },
      {
        mediaId: 101,
        content: '101.jpg',
        status: 'done'
      },
      {
        mediaId: 102,
        content: '102.jpg',
        status: 'done'
      }
    ]

    const screen = render(<UploadBase count={3} list={list} btn={<div>上传</div>} />)
    await waitFor(() => expect(screen.queryByTestId('上传')).toBeNull())
    await waitFor(async () => expect(await screen.queryAllByTestId('upload-item').length).toBe(3))
  })

  test('list and remove', async () => {
    const onRemove = jest.fn()
    const list: Upload.Media[] = [
      {
        mediaId: 100,
        content: '100.jpg',
        status: 'done'
      },
      {
        mediaId: 101,
        content: '101.jpg',
        status: 'done'
      },
      {
        mediaId: 102,
        content: '102.jpg',
        status: 'done'
      }
    ]

    const screen = render(<UploadBase layout="square" onRemove={onRemove} list={list} btn={<div>上传</div>} />)
    const items = await screen.queryAllByTestId('upload-remove')
    fireEvent.click(items[0])
    expect(onRemove).toHaveBeenCalledTimes(1)
    expect(onRemove.mock.calls[0][0]).toEqual(list[0])
  })

  test('onPreview', () => {
    const list: Upload.Media[] = [
      {
        mediaId: 100,
        content: '100.jpg',
        status: 'done'
      },
      {
        mediaId: 101,
        content: '101.jpg',
        status: 'loading'
      },
      {
        mediaId: 102,
        content: '102.jpg',
        status: 'error'
      }
    ]

    act(() => {
      const screen = render(<UploadBase list={list} btn={<div>上传</div>} />)
      fireEvent.click(screen.container.querySelector('.corn-upload-img'))
    })
  })

})
