import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import Image from '../index.h5'

describe('Image', () => {
  const url = 'https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF'

  test('basis', async () => {
    const screen = render(<Image src={url} />)
    expect(screen.container.querySelector('img')?.src).toBe(url)
  })

  test('basis', async () => {
    const screen = render(<Image src={url} light />)
    expect(screen.container.querySelector('img')?.src).toBe(url)
    expect(screen.container).toMatchSnapshot()
  })

  test('lazyLoad', async () => {
    const screen = render(<Image src={url} lazyLoad />)
    expect(screen.container.querySelector('img')?.src).not.toBe(url)
  })

  test('lazyLoad Show', async () => {
    const screen = render(<Image src={url} lazyLoad />)
    expect(screen.container.querySelector('img')?.src).not.toBe(url)
    // eslint-disable-next-line no-magic-numbers
    await new Promise((res) => setTimeout(res, 1000))
    expect(screen.container.querySelector('img')?.src).toBe(url)
  })

  test('lazyLoad Show of destroy', async () => {
    const screen = render(<Image src={url} lazyLoad />)
    expect(screen.container.querySelector('img')?.src).not.toBe(url)
    screen.unmount()
    // eslint-disable-next-line no-magic-numbers
    await new Promise((res) => setTimeout(res, 1000))
    expect(screen.container.querySelector('img')).toBe(null)
  })

  test('preview', async () => {
    const screen = render(<Image src={url} previewImage />)
    fireEvent.click(screen.container.querySelector('img') as HTMLImageElement)
    await waitFor(() => expect(screen).toMatchSnapshot())
  })

  test('click', async () => {
    const click = jest.fn()
    const screen = render(<Image src={url} onClick={click} />)
    fireEvent.click(screen.container.querySelector('img') as HTMLImageElement)
    // eslint-disable-next-line no-magic-numbers
    expect(click).toHaveBeenCalledTimes(1)
  })
})
