import React from 'react'
import classNames from 'classnames'
import { View, Image, Text } from '@tarojs/components'
import { transformRem } from '../../utils'

const PRESENTED_IMAGE_DEFAULT = 'https://assets.xrkmm.cn/u/4000002499670412/fec0810a-501e-4875-9a7e-0e152681ae21.png'
const PRESENTED_IMAGE_SIMPLE = 'https://assets.xrkmm.cn/u/4000002499670412/1b3b6895-9a51-4e4c-a4fd-b3878dbe987e.png'
const PRESENTED_IMAGE_HAPPY = 'https://assets.xrkmm.cn/u/4000002499670412/8bc1ba9b-b71d-4b77-bc86-1fd2a2f7b026.png'
const PRESENTED_IMAGE_ERROR = 'https://assets.xrkmm.cn/u/4000002499670412/99bc2c9f-eba2-4295-8de4-3d8f52862cf6.png'

export interface EmptyProps {
  src?: string
  size?: 'large' | 'middle' | 'small'
  text?: string
  wrapperTop?: number | string
  wrapperBottom?: number | string
}

type EmptyComponents = React.FC<EmptyProps> & {
  PRESENTED_IMAGE_DEFAULT: string;
  PRESENTED_IMAGE_SIMPLE: string;
  PRESENTED_IMAGE_HAPPY: string;
  PRESENTED_IMAGE_ERROR: string
}

const Empty: EmptyComponents = ({
  src = PRESENTED_IMAGE_DEFAULT,
  size = 'middle',
  text,
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
      <View>
        <Image src={src} className="xrk-empty-img" mode="aspectFit" />
      </View>
      {Boolean(text) && (
        <Text className="xrk-empty-text">{text}</Text>
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

export default Empty
