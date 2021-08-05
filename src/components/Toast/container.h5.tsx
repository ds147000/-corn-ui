import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { TOAST_ADD } from '../../config/event'
import Sub from '../../utils/sub'
import { ToastOption } from './interface'
import { Toast } from './toast.h5'

export const Container: React.FC = () => {
  const [ toastList, setToastList ] = useState<ToastOption[]>([])
  // eslint-disable-next-line no-magic-numbers
  const hide = useRef<number>(0)

  const isMask = toastList.find((item) => item.mask)

  const onClose = useCallback((): void => {
    hide.current += 1

    if (hide.current === toastList.length) {
      hide.current = 0
      setToastList([])
    }
  }, [ toastList.length, hide ])

  useEffect(() => {
    const remove = Sub.add(TOAST_ADD, (toast: ToastOption) => {
      setToastList((s) => [ ...s, toast ])
    })

    return remove
  }, [])

  return (
    <View className={`xrk-toast ${isMask && 'xrk-toast-actions'}`}>
      {toastList.map((item, key) => (
        <Toast {...item} onClose={onClose} key={String(key)} />
      ))}
    </View>
  )
}
