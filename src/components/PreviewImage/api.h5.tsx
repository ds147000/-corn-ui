import React, { useCallback, useState } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { previewImageOption } from './index'
import Portal from '../Portal'
import { isWatch } from '../../utils'

const START_INDEX = 1

interface ContainerProps extends previewImageOption {
  onDestory(): void
  activeIndex: number
}

const Container: React.FC<ContainerProps> = ({ onDestory, urls, activeIndex }) => {
  const [ index, setIndex ] = useState(activeIndex)

  const onChange = useCallback((swiper) => {
    setIndex(swiper.activeIndex)
  }, [])

  return (
    <View
      data-testid="previewImage"
      className="xrk-preview"
      onClick={onDestory}
      key="previewImage"
    >
      <Text className="xrk-preview-dot">{index + START_INDEX}/{urls.length}</Text>
      <Swiper
        loop={false}
        initialSlide={activeIndex}
        className="xrk-preview-swiper"
        onSlideChange={onChange}
        autoHeight
      >
        {urls.map((item) => (
          <SwiperSlide key={item} >
            <Image
              lazyLoad={false}
              src={item}
              className="xrk-preview-img"
            />
          </SwiperSlide>
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
