import React from 'react'
import { View, Image } from '@tarojs/components'
import { previewImageOption } from './typeing'
import { Swiper, SwiperItem } from '../Swiper'
import Portal from '../Portal'
import { isWatch } from '../../utils'

interface ContainerProps extends previewImageOption {
  onDestory(): void
  activeIndex: number
}

const Container: React.FC<ContainerProps> = ({ onDestory, urls, activeIndex }) => {
  return (
    <View
      data-testid="previewImage"
      className="xrk-preview-image"
      onClick={onDestory}
      key="previewImage"
    >
      <Swiper
        indicatorDots
        loop={false}
        current={activeIndex}
        indicatorActiveColor="#fff"
        className="xrk-preview-image-swiper"
      >
        {urls.map((item, key) => (
          <SwiperItem key={item} >
            <Image
              data-testid={key === activeIndex ? 'previewImage-current' : ''}
              lazyLoad={false}
              src={item}
              className="xrk-preview-image-img"
            />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}

const previewImage = async (option: previewImageOption): Promise<{ errMsg: string }> => {
  if (window?.wx?.previewImage && isWatch())
    return callWxPreview(option)

  return callProtalPreview(option)
}

/** 微信sdk预览 */
const callWxPreview = async (option: previewImageOption): Promise<{ errMsg: string }> => {
  try {
    window.wx.previewImage(option)
    return Promise.resolve({ errMsg: 'ok' })
  } catch (error) {
    return Promise.reject({ errMsg: error.message })
  }
}

/** 使用jsx预览 */
const callProtalPreview = async (option: previewImageOption): Promise<{ errMsg: string }> => {
  try {

    const activeIndex = option.urls.findIndex((item) => item === option.current)

    await Portal.add(Container, { urls: option.urls, activeIndex })

    return Promise.resolve({ errMsg: 'ok' })
  } catch (error) {
    return Promise.reject({ errMsg: error.message })
  }
}


export default previewImage
