import React, { useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { transformRem } from '../../utils'

/** 不执行动画的长度 */
const STOP_ANIMTED_LEN = 1
/** 关键词展示时长 */
const ANIMTED_YIME = 5000
/** 初始化移动值 */
const DEFAULT_MOVE = 0
/** 移动速度 */
const MOVE_SEEPD = -30
/** 移动自增 */
const MOVE_ADD = 1
/** 移动最大值 */
const MOVE_MAX = 2

interface SearchPlaceholderListProps {
  data: string[]
}

const SearchPlaceholderList: React.FC<SearchPlaceholderListProps> = ({ data }) => {
  const [ move, setMove ] = useState(DEFAULT_MOVE)
  const time = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (data.length <= STOP_ANIMTED_LEN) return undefined

    function animtedMove(): void {
      time.current = setTimeout(() => {
        setMove((oldState): number => {
          if (oldState > data.length - MOVE_MAX) return DEFAULT_MOVE
          return oldState += MOVE_ADD
        })
        animtedMove()
      }, ANIMTED_YIME)
    }
    animtedMove()

    return (): void => {
      clearTimeout(time.current as NodeJS.Timeout)
    }
  }, [ data.length ])

  return (
    <View className="corn-search-placeholder" >
      <View className="corn-search-placeholder-list" style={{ top: transformRem(move * MOVE_SEEPD) }} >
        {data.map((item, key) => (
          <View key={item + String(key)} className="corn-search-placeholder-item corn-f corn-ac" >{item}</View>
        ))}
      </View>
    </View>
  )
}


export interface SearchPlaceholderProps {
  data?: string | string[]
}

export const SearchPlaceholder: React.FC<SearchPlaceholderProps> = ({ data }) => {

  if (!data) return null

  if (typeof data === 'string' || typeof data === 'number') {
    return (
      <View className="corn-search-placeholder">
        {data}
      </View>
    )
  }

  if (Array.isArray(data)) return <SearchPlaceholderList data={data} />

  return null
}

