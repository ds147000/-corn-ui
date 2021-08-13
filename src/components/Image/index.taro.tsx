/* eslint-disable max-len */
import React, { useMemo } from 'react'
import { Image } from '@tarojs/components'
import { formatImg } from '../../utils/url'
import { XImageProps } from './interface'

const XImage: React.FC<XImageProps> = ({
  src,
  light,
  lazyImg,
  lazyLoad,
  m, w, h, l, s, limit, format,
  className,
  ...props
}) => {
  // 缓冲的图片url
  const _src = useMemo(() => formatImg(src, { m, w, h, l, s, limit, format }), [ m, w, h, l, s, limit, format, src ])

  return (
    <Image
      {...props}
      src={_src}
    />
  )
}

export default XImage
