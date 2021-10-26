import React from 'react'
import { render } from '@testing-library/react'
import ImageH5 from '../index.h5'

jest.mock('@tarojs/components', () => {
  const React2 = require('react')
  class Image extends React2.Component {
    imgRef: any

    componentDidMount() {
      setTimeout(() => this.imgRef = null, 20)
    }

    render() {
      return (<img ref={ref => this.imgRef = ref} />)
    }
  }

  return {
    Image: Image
  }
})

describe('ImageH5', () => {
  const url = 'https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF'

  test('lazyLoad', async () => {
    const screen = render(<ImageH5 src={url} lazyLoad />)
    await new Promise((res) => setTimeout(res, 2000))
  })

  test('destroy', async () => {
    const screen = render(<ImageH5 src={url} />)
    screen.unmount()
  })
})
