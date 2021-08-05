import React, { useEffect, useState } from 'react'
import ProtalSub from '../../utils/sub'
import { PROTAL_ADD, PROTAL_REMOVE } from '../../config/event'

const Host: React.FC = () => {
  const [ list, setList ] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const ids = new Map<number, React.ReactNode>()

    const setChildren = (): void => {
      setList([ ...ids.values() ])
    }

    const removeAdd = ProtalSub.add(PROTAL_ADD, (id: number, child: React.ReactNode) => {
      ids.set(id, child)
      setChildren()
    })

    const removeRemove = ProtalSub.add(PROTAL_REMOVE, (id: number) => {
      ids.delete(id)
      setChildren()
    })

    return (): void => {
      removeAdd?.()
      removeRemove?.()
      ids.clear()
    }
  }, [])

  return (
    <>
      {list}
    </>
  )
}

export default Host
