import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { TOAST_ADD } from '../../config/event'
import Sub from '../../utils/sub'
import { ToastOption } from './typing'
import { ToastView } from './toast.h5'

const MAX_SHOW_TOAST = 3

interface ContainerProps {
  onShow?(): void
  onHide?(): void
  onDestory?(): void
}

export const Container: React.FC<ContainerProps> = ({ onDestory, onShow, onHide }) => {
  const [ toastList, setToastList ] = useState<ToastOption[]>([])
  // eslint-disable-next-line no-magic-numbers
  const hide = useRef<number>(0)

  const isMask = toastList.find((item) => item.mask)

  const onItemClose = useCallback((): void => {
    hide.current += 1

    if (hide.current === toastList.length) {
      hide.current = 0
      setToastList([])
      onHide?.()
      onDestory?.()
    }
  }, [ toastList.length, hide, onDestory, onHide ])

  useEffect(() => {
    const remove = Sub.add(TOAST_ADD, (toast: ToastOption) => {
      setToastList((s) => [ ...s, toast ].slice(-MAX_SHOW_TOAST))
    })
    onShow?.()

    return remove
  }, [ onShow ])



  return (
    <View className={classNames('xrk-toast', isMask && 'xrk-toast-actions')}>
      {toastList.map((item) => (
        <ToastView {...item} onClose={onItemClose} key={String(item.title)} />
      ))}
    </View>
  )
}
