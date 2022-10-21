import React from 'react'
import classNames from 'classnames'
import { View, Image, Text } from '@tarojs/components'
import { transformRem } from '../../utils'
import emptyImg from '../../assets/img/empty.svg'
import emptyImgSimple from '../../assets/img/empty-simple.svg'

const PRESENTED_IMAGE_DEFAULT = emptyImg
const PRESENTED_IMAGE_SIMPLE = emptyImgSimple
const PRESENTED_IMAGE_HAPPY = emptyImg
const PRESENTED_IMAGE_ERROR = emptyImg
const PRESENTED_IMAGE_MONEY = emptyImg

export interface EmptyProps {
  src?: string
  size?: 'large' | 'middle' | 'small'
  text?: string
  direction?: string
  wrapperTop?: number | string
  wrapperBottom?: number | string
}

type EmptyComponents = React.FC<EmptyProps> & {
  PRESENTED_IMAGE_DEFAULT: string
  PRESENTED_IMAGE_SIMPLE: string
  PRESENTED_IMAGE_HAPPY: string
  PRESENTED_IMAGE_ERROR: string
  PRESENTED_IMAGE_MONEY: string
}

const Empty: EmptyComponents = ({
  src = PRESENTED_IMAGE_DEFAULT,
  size = 'middle',
  text,
  direction,
  wrapperTop,
  wrapperBottom,
  children
}) => {
  const _class = classNames('xrk-empty', `xrk-empty-${size}`)

  const _style: React.CSSProperties = {
    paddingTop: typeof wrapperTop === 'string' ? wrapperTop : transformRem(wrapperTop),
    paddingBottom: typeof wrapperBottom === 'string' ? wrapperBottom : transformRem(wrapperBottom)
  }

  return (
    <View className={_class} style={_style} data-testid="empty" >
      <View key="0">
        <Image key="1" src={src} className="xrk-empty-img" mode="aspectFit" />
      </View>
      {Boolean(text) && (
        <Text className="xrk-empty-text">{text}</Text>
      )}
      {Boolean(direction) && (
        <Text className="xrk-empty-direction" >{direction}</Text>
      )}
      {Boolean(children) && (
        <View className="xrk-empty-children">{children}</View>
      )}
    </View>
  )
}

Empty.PRESENTED_IMAGE_DEFAULT = PRESENTED_IMAGE_DEFAULT
Empty.PRESENTED_IMAGE_SIMPLE = PRESENTED_IMAGE_SIMPLE
Empty.PRESENTED_IMAGE_HAPPY = PRESENTED_IMAGE_HAPPY
Empty.PRESENTED_IMAGE_ERROR = PRESENTED_IMAGE_ERROR
Empty.PRESENTED_IMAGE_MONEY = PRESENTED_IMAGE_MONEY

export default Empty
