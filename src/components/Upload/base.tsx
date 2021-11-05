import React, { useEffect, useMemo, useRef } from 'react'
// #if _APP === 'weapp'
import Taro from '@tarojs/taro'
// #endif
import { View } from '@tarojs/components'
import classNames from 'classnames'
import Image from '../Image'
import previewImage from '../PreviewImage'
import Icon from '../Icon'

export declare namespace Upload {
  type Media = {
    status: 'done' | 'loading' | 'error'
    mediaId: number
    content: string
  }

  /** 自定义上传，必须返回上传后的结果 */
  type handleUpload = (file: File) => Promise<Media>

  /** 上传完成回调函数 */
  type onChange = (imgs: Media[]) => void

  type layout = 'square' | 'row'

  type onRemove = (img: Media) => void

  interface props {
    /** 图片项类名 */
    itemClassName?: string
    /** 最多数量 */
    count?: number
    /** 布局类型 */
    layout?: layout
    /** 自定义渲染上传按钮 */
    btn?: React.ReactNode
    /** 已经上传文件对象 */
    list?: Media[]
    /** 上传项删除事件 */
    onRemove?: onRemove
  }
}

export const DEFAULT_COUNT = 9

export const UploadBase: React.FC<Upload.props> = ({
  count = DEFAULT_COUNT,
  layout = 'row',
  btn,
  list,
  itemClassName,
  onRemove
}) => {
  const El = useRef<HTMLDivElement>()
  const isShowBtn = !list || list.length < count

  const _class = useMemo(() => classNames(
    'xrk-upload',
    'xrk-upload-' + layout
  ), [ layout ])



  const onPreview = (item: Upload.Media): void => {
    const _list = list as Upload.Media[]
    previewImage({
      current: item.content,
      urls: _list?.map((i) => i.content)
    })
  }

  useEffect(() => {
    if (layout !== 'row') return

    // #if _APP === 'weapp'

    // #else
    El.current?.scrollTo?.({ left: El.current.scrollWidth, top: 0, behavior: 'smooth' })
    // #endif
  }, [ list?.length, layout ])

  return (
    <View className={_class} ref={El} >
      {list?.map((item) => (
        <UploadItem
          key={item.mediaId + item.content}
          onPreview={onPreview}
          onRemove={onRemove}
          className={itemClassName}
          item={item}
        />
      ))}
      {isShowBtn && btn}
    </View>
  )
}

interface UploadItemProps {
  onPreview(item: Upload.Media): void
  onRemove?: Upload.onRemove
  /** 图片项类名 */
  className?: string
  item: Upload.Media
}

const UploadItem: React.FC<UploadItemProps> = ({
  onPreview,
  onRemove,
  className,
  item
}) => {
  const _itemClass = useMemo(() => classNames(
    'xrk-upload-item',
    className
  ), [ className ])

  const status = useMemo(() => {
    switch(item.status) {
      case 'loading':
        return <View className="xrk-upload-loading" />

      case 'error':
        return <View className="xrk-upload-error xrk-f xrk-ac xrk-jc" >上传失败</View>

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
        className="xrk-upload-remove xrk-f xrk-ac xrk-jc"
        onClick={_onRemove}
        data-testid="upload-remove"
      >
        <Icon name="delete"  />
      </View>
      <Image
        className="xrk-upload-img"
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

