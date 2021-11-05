import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Toast from '../../Toast'
import showActionSheet from '../../ActionSheet/api'
import { InputMaskProps } from './typeing'

export const InputMask: React.FC<InputMaskProps> = ({ type, onMpChange, onChange }) => {
  const _onClick = async (): Promise<void> => {
    if (type === 'image') {
      onSelectPhoto()
      return
    }

    if (type === 'video') {
      onSelectVideo()
      return
    }

    try {
      const res = await showActionSheet({ list: [ '视频', '照片' ] })
      if (res.tapIndex === 1)
        onSelectPhoto()
      else
        onSelectVideo()
    } catch (error) {
      console.error(error.errMsg)
    }
  }

  const onSelectPhoto = (): void => {
    Taro.chooseImage({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      success: (res: any) => {
        const fileList: FileList = res.ImageFile?.originalFileObj
        if (fileList) onChange?.(fileList)
        onMpChange?.(res.tempFilePaths)
      },
      fail: (error) => Toast.show(error.errMsg)
    })
  }

  const onSelectVideo = (): void => {
    Taro.chooseVideo({
      success: (res) => {
        onMpChange?.([ res.tempFilePath ])
      },
      fail: (error) => Toast.show(error.errMsg)
    })
  }

  return (
    <View className="xrk-upload-mask" onClick={_onClick} />
  )
}
