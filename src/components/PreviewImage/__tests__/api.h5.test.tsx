import React from 'react'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import previewImage from '../api.h5'
import Protal from '../../Portal'
import Host from '../../Portal/host'
import { isWatch } from '../../../utils'

jest.mock('../../../utils', () => ({
  isWatch: () => true
}))

beforeEach(() => {
  window.wx = null
})

const mockIsWatch = isWatch as jest.Mock

test('preview img one', async () => {
  Protal.status = true
  const screen = render(<Host />)

  const currentUrl = 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF'

  await act(async () => {
    await previewImage({ current: currentUrl, urls: [ currentUrl ] })
  })

  await waitFor(() => screen.getByTestId('previewImage'))
  await waitFor(() => expect(
    (screen.getByTestId('previewImage-current').querySelector('img') as HTMLImageElement).src).toBe(currentUrl)
  )
})

test('preview on Close', async () => {
  Protal.status = true
  const screen = render(<Host />)

  const currentUrl = 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF'

  await act(async () => {
    await previewImage({ current: currentUrl, urls: [ currentUrl ] })
  })

  const previewEl = await waitFor(() => screen.getByTestId('previewImage'))
  fireEvent.click(previewEl)
  await waitFor(() => expect(screen.queryByTestId('previewImage')).toBeNull())
})

test('多张图片预览', async () => {
  Protal.status = true
  const screen = render(<Host />)

  const currentUrl = 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF'
  const urls = [
    currentUrl,
    'https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=1575628574,1150213623&fm=193&f=GIF'
  ]

  await act(async () => {
    await previewImage({ current: currentUrl, urls })
  })

  await waitFor(() => screen.getByTestId('previewImage'))

  await waitFor(() => expect(
    (screen.getByTestId('previewImage-current')
      .querySelector('img') as HTMLImageElement
    ).src).toBe(currentUrl))

  const imgs = screen.container.querySelectorAll('img') as unknown as HTMLImageElement[]

  const imgsUrls: string[] = []

  for (let i = 0; i < imgs.length; i++) imgsUrls.push(imgs[i].src)
  expect(imgsUrls).toEqual(urls)
})

test('多张图片预览2', async () => {
  Protal.status = true
  const screen = render(<Host />)

  const currentUrl = 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF'
  const urls = [
    'https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF',
    currentUrl,
    'https://t7.baidu.com/it/u=1575628574,1150213623&fm=193&f=GIF'
  ]

  await act(async () => {
    await previewImage({ current: currentUrl, urls: urls })
  })

  await waitFor(() => screen.getByTestId('previewImage'))
  await waitFor(() => expect(
    (screen.getByTestId('previewImage-current').querySelector('img') as HTMLImageElement).src
  ).toBe(currentUrl))
  const imgs = await waitFor(() => screen.container.querySelectorAll('img')) as unknown as HTMLImageElement[]

  const imgsUrls: string[] = []
  for (let i = 0; i < imgs.length; i++) imgsUrls.push(imgs[i].src)
  expect(imgsUrls).toEqual(urls)
})

test('多张图片预览3', async () => {
  Protal.status = true
  const screen = render(<Host />)

  const currentUrl = 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF'
  const urls = [
    'https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=1575628574,1150213623&fm=193&f=GIF',
    currentUrl
  ]

  await act(async () => {
    await previewImage({ current: currentUrl, urls: urls })
  })


  await waitFor(() => screen.getByTestId('previewImage'))
  await waitFor(() => expect(
    (screen.getByTestId('previewImage-current').querySelector('img') as HTMLImageElement).src).toBe(currentUrl)
  )
  const imgs = await waitFor(() => screen.container.querySelectorAll('img')) as unknown as HTMLImageElement[]
  const imgsUrls: string[] = []
  for (let i = 0; i < imgs.length; i++) imgsUrls.push(imgs[i].src)
  expect(imgsUrls).toEqual(urls)
})

test('on WxSDK', async () => {
  window.wx = {
    previewImage: jest.fn(),
  }

  await act(async () => {
    await previewImage({
      current: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
      urls: [ 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF' ]
    })
  })
  // eslint-disable-next-line no-magic-numbers
  expect(window.wx.previewImage).toHaveBeenCalledTimes(1)
})

test('on WxSDK Error', async () => {
  window.wx = {
    previewImage: (): void => {
      throw new Error('error')
    },
  }

  try {
    await act(async () => {
      await previewImage({
        current: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
        urls: [ 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF' ]
      })
    })
  } catch (error) {
    expect(error).toEqual({ errMsg: 'error' })
  }
})

test('on WxSDK not weapp', async () => {
  // mockIsWatch.mock.(false)

  await act(async () => {
    await previewImage({
      current: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
      urls: [ 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF' ]
    })
  })
})

test('on Error Data ', async () => {
  try {
    await act(async () => {
      await previewImage({
        current: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
        urls: ({} as unknown as string[])
      })
    })
  } catch (error) {
    expect(error).toEqual({ errMsg: 'option.urls.findIndex is not a function' })
  }
})
