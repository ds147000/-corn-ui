import React, { useEffect, useMemo, useRef } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import Image from '../Image'
import previewImage from '../PreviewImage'
import Icon from '../Icon'

export declare namespace Upload {
  type Media = {
    mediaId: number
    content: string
  }

  /** 自定义上传，必须返回上传后的结果 */
  type handleUpload = (file: File) => Promise<Media>

  /** 上传完成回调函数 */
  type onChange = (imgs: Media[]) => void

  type layout = 'square' | 'row'

  type onRemove = (img: Media, index: number) => void

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
  itemClassName,
  count = DEFAULT_COUNT,
  layout = 'row',
  btn,
  list,
  onRemove
}) => {
  const El = useRef<HTMLDivElement>()
  const isShowBtn = !list || list.length < count

  const _class = useMemo(() => classNames(
    'xrk-upload',
    'xrk-upload-' + layout
  ), [ layout ])

  const _itemClass = useMemo(() => classNames(
    'xrk-upload-item',
    itemClassName
  ), [ itemClassName ])

  const onPreview = (index: number): void => {
    const _list = list as Upload.Media[]
    previewImage({
      current: _list[index].content,
      urls: _list?.map((item) => item.content)
    })
  }

  useEffect(() => {
    if (layout !== 'row') return

    // #if _APP === 'weapp'

    // #else
    try {
      El.current?.scrollTo?.({ left: El.current.scrollWidth, top: 0, behavior: 'smooth' })
    } catch (error) {
      El.current?.scrollTo?.(El.current.scrollWidth, 0)
    }
    // #endif
  }, [ list?.length, layout ])

  return (
    <View className={_class} ref={El} >
      {list?.map((item, key) => (
        <View key={item.mediaId + item.content} className={_itemClass} >
          <View
            data-testid="upload-item"
            className="xrk-upload-remove xrk-f xrk-ac xrk-jc"
            onClick={(): void => onRemove?.(item, key)}
          >
            <Icon name="delete" data-testid="upload-remove" />
          </View>
          <Image
            className="xrk-upload-img"
            src={item.content}
            onClick={(): void => onPreview(key)}
            lazyLoad
            mode="aspectFill"
          />
        </View>
      ))}
      {isShowBtn && btn}
    </View>
  )
}

