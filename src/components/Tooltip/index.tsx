import React from 'react'
import Popover from '../Popover'
import TootipList from './list'


export declare namespace TOOTIPS {
  type Align = 'top' | 'bottom'

  type Item =  { text: string; type?: 'active' | 'defualt' }

  type List = Item[]

  type onClick = (item: Item, index: number) => void
  interface Props {
    align?: Align
    list: List
    onClick?: onClick
    moveX?: number
    moveY?: number
  }
}


const TootipsCmps: React.FC<TOOTIPS.Props> = ({ children, ...res }) => {
  return (
    <Popover content={(rect): JSX.Element => <TootipList rect={rect} {...res} />} >
      {children}
    </Popover>
  )
}

export default TootipsCmps
