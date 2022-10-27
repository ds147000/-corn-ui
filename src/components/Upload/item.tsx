// #if _APP === 'weapp'
import Taro from '@tarojs/taro'
// #endif
import classNames from 'classnames'
import { View } from '@tarojs/components'
import React, { useMemo } from 'react'
import { Upload } from './base'
import Image from '../Image'
import Icon from '../Icon'


interface UploadItemProps {
  onPreview(item: Upload.Media): void
  onRemove?: Upload.onRemove
  /** 图片项类名 */
  className?: string
  item: Upload.Media
}

export const UploadItem: React.FC<UploadItemProps> = ({
  onPreview,
  onRemove,
  className,
  item
}) => {
  const _itemClass = useMemo(() => classNames(
    'corn-upload-item',
    className
  ), [ className ])

  const status = useMemo(() => {
    switch(item.status) {
      case 'loading':
        return <View className="corn-upload-loading" />

      case 'error':
        return <View className="corn-upload-error corn-f corn-ac corn-jc" >上传失败</View>

      default:
        return null
    }
  }, [ item.status ])

  const _onRemove = (): void => {
    onRemove?.(item)
  }

  const _onPreview = (): void => {
    onPreview(item)
  }

  return (
    <View className={_itemClass} data-testid="upload-item" >
      <View
        className="corn-upload-remove corn-f corn-ac corn-jc"
        onClick={_onRemove}
        data-testid="upload-remove"
      >
        <Icon name="delete"  />
      </View>
      <Image
        className="corn-upload-img"
        src={item.content}
        onClick={_onPreview}
        lazyLoad
        mode="aspectFill"
        // #if _APP === 'weapp'
        // eslint-disable-next-line no-magic-numbers
        style={{ width: Taro.pxTransform(160), height: Taro.pxTransform(160) }}
        // #endif
      />
      {status}
    </View>
  )
}
