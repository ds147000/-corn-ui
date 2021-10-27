import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { UploadBase, Upload } from '../base'

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
        content: '100.jpg'
      }
    ]
  })

})
