import React from 'react'
import { View } from '@tarojs/components'

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

export const UploadBase: React.FC<Upload.props> = () => {
  return (
    <View />
  )
}

