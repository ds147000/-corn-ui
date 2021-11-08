import React, { useEffect, useMemo, useRef } from 'react'
import { View, Input } from '@tarojs/components'
import classNames from 'classnames'
import previewImage from '../PreviewImage'
import { UploadItem } from './item'

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
    name?: string
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
  name,
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

  const successList = list?.filter((item) => item.status === 'done') || []

  return (
    <View className={_class} ref={El} >
      {Boolean(name) && (
        <Input
          className="xrk-checkbox-hide"
          name={name}
          value={JSON.stringify(successList)}
        />
      )}
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



