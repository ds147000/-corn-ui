import { View } from '@tarojs/components'
import React from 'react'



export declare namespace Tootips {
  type Align = 'top' | 'bottom' | 'left' | 'right'

  type Item = { text: string; type: 'active' | 'defualt' }

  interface Props {
    align: Align
    list: Item[]
    onClick?(item: Item, index: number): void
  }

}


const TootipsCmps: React.FC<Tootips.Props> = () => {
  return (
    <View />
  )
}

export default TootipsCmps
