/* eslint-disable max-len */
import React, { useMemo } from 'react'
import { Image } from '@tarojs/components'
import { formatImg } from '../../utils/url'
import { XImageProps } from './typing'
import previewImageApi from '../PreviewImage'

const XImage: React.FC<XImageProps> = ({
  src,
  light,
  lazyImg,
  onClick,
  previewImage,
  m, w, h, l, s, limit, format,
  ...props
}) => {
  // 缓冲的图片url
  const _src = useMemo(() => formatImg(src, { m, w, h, l, s, limit, format }), [ m, w, h, l, s, limit, format, src ])

  const _onClick = (e): void => {
    onClick?.(e)
    if (previewImage) previewImageApi({ current: src, urls: [ src ] })
  }

  return (
    <Image
      {...props}
      onClick={_onClick}
      src={_src}
    />
  )
}

export default XImage
