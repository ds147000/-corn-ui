import React from 'react'
import { View } from '@tarojs/components'

export declare namespace Upload {
  type Media = {
    mediaId: number
    content: string
  }

  type handleUpload = (file: File) => Promise<Media>

  type onChange = (imgs: Media[]) => void

  type renderBtn = (props: btnProps) => JSX.Element

  type layout = 'square' | 'row'

  interface btnProps {
    onClick(): void
  }

  interface props {
    /** 图片项类名 */
    itemClassName?: string
    /** 上传目录前缀 */
    pathPrefix?: string
    /** 最多数量 */
    count?: number
    /** 布局类型 */
    layout?: layout
    /** 自定义渲染上传按钮 */
    renderBtn?: renderBtn
    /** 自定义上传，必须返回上传后的结果 */
    handleUpload: handleUpload
    /** 上传完成回调函数 */
    onChange?: onChange
  }
}

export const UploadBase: React.FC<Upload.props> = () => {
  return (
    <View />
  )
}

