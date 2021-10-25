import React from 'react'
import classNames from 'classnames'
import { View, Image, Text } from '@tarojs/components'
import { transformRem } from '../../utils'

const PRESENTED_IMAGE_DEFAULT = 'https://assets.xrkmm.cn/u/4000002499670412/7d17be13-fb93-4b73-9027-b50ea6e4c236.png'
const PRESENTED_IMAGE_SIMPLE = 'https://assets.xrkmm.cn/u/4000002499670412/1b3b6895-9a51-4e4c-a4fd-b3878dbe987e.png'
const PRESENTED_IMAGE_HAPPY = 'https://assets.xrkmm.cn/u/4000002499670412/d0c4ce46-2459-4e8e-a6f4-861e842aba43.png'
const PRESENTED_IMAGE_ERROR = 'https://assets.xrkmm.cn/u/4000002499670412/7d17be13-fb93-4b73-9027-b50ea6e4c236.png'
const PRESENTED_IMAGE_MONEY = 'https://assets.xrkmm.cn/u/4000002499670412/42799481-a708-4157-82bc-c32afa46df7f.png'

export interface EmptyProps {
  src?: string
  size?: 'large' | 'middle' | 'small'
  text?: string
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
Empty.PRESENTED_IMAGE_MONEY = PRESENTED_IMAGE_MONEY

export default Empty
