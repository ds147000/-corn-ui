/* eslint-disable max-len */
import React, { useEffect, useMemo, useRef } from 'react'
import { Image } from '@tarojs/components'
import ClassNames from 'classnames'
import getObserverService from './utils/observer'
import previewImageApi from '../PreviewImage/api.h5'
import { formatImg } from '../../utils/url'
import { DEFAULT_LAZY_IMG, DEFAULT_LIGHT_LAZY_IMG, XImageProps } from './interface'


const XImage: React.FC<XImageProps> = ({
  src,
  light,
  lazyImg,
  lazyLoad,
  className,
  previewImage,
  onClick,
  m, w, h, l, s, limit, format,
  ...props
}) => {
  const el = useRef<{ imgRef: HTMLImageElement }>()
  const _class = useMemo(() => ClassNames('xrk-img', className), [ className ])
  // 缓冲的图片url
  const _src = useMemo(() => formatImg(src, { m, w, h, l, s, limit, format }), [ m, w, h, l, s, limit, format, src ])
  // 占位图
  const _lazyImg = light ? DEFAULT_LAZY_IMG : DEFAULT_LIGHT_LAZY_IMG

  const _onClick = (e): void => {
    onClick?.(e)
    if (previewImage) previewImageApi({ current: src, urls: [ src ] })
  }

  useEffect(() => {
    if (!lazyLoad || !el.current) return

    const destory = getObserverService().add(el.current.imgRef, () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (el.current as any).imgRef.src = _src
    })

    // eslint-disable-next-line consistent-return
    return destory
  }, [ lazyLoad, _src ])

  return (
    <Image
      {...props}
      className={_class}
      lazyLoad={false}
      src={lazyLoad ? _lazyImg : _src}
      ref={el}
      onClick={_onClick}
    />
  )
}

export default XImage
