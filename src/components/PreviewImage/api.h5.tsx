import React from 'react'
import { View, Image } from '@tarojs/components'
import { previewImageOption } from './interface'
import { Swiper, SwiperItem } from '../Swiper'
import Portal from '../Portal'

const previewImage = async (option: previewImageOption): Promise<{ errMsg: string }> => {
  if (window?.wx?.previewImage) return callWxPreview(option)

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
  let id = -1
  try {
    const remove = (): void => Portal.remove(id)

    const activeIndex = option.urls.findIndex((item) => item === option.current)

    id = await Portal.add(
      <View
        data-testid="previewImage"
        className="xrk-preview-image"
        onClick={remove}
        key="previewImage"
      >
        <Swiper
          indicatorDots
          loop={false}
          current={activeIndex}
          indicatorActiveColor="#fff"
          className="xrk-preview-image-swiper"
        >
          {option.urls.map((item, key) => (
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

    return Promise.resolve({ errMsg: 'ok' })
  } catch (error) {
    return Promise.reject({ errMsg: error.message })
  }
}


export default previewImage
