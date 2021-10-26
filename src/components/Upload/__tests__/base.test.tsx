import React from 'react'
import { render, waitFor } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import { UploadBase, Upload } from '../base'

describe('UploadBase', () => {
  test('基础', async () => {
    const screen = render(<UploadBase handleUpload={jest.fn()} />)

    await waitFor(() => expect(screen.container).toMatchSnapshot())
  })

  test('上传', async () => {
    const handleUpload = jest.fn((file: File): Promise<Upload.Media> => Promise.resolve({ mediaId: Math.random(), content: file.name }))
    const files = new File(['hello'], 'hello.png', { type: 'image/png' })
    const screen = render(<UploadBase handleUpload={handleUpload} />)

    const uploadBtn = screen.getByTestId('upload-btn')
    UserEvent.upload(uploadBtn, files)

    await waitFor(async () => expect((await screen.findAllByTestId('upload-item')).length).toBe(1))
    await waitFor(() => expect(handleUpload.mock).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(handleUpload.mock.calls[0][0]).toEqual(files))
  })
})
