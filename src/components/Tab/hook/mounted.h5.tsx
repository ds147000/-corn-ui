import { useEffect } from 'react'

// 滚动tabBar横向展示区域
const useTabScroll = (el: React.MutableRefObject<HTMLDivElement | undefined>, currenIndex: number): void => {

  useEffect(() => {
    const stopIndex = 0
    const widthPI = 2
    if (currenIndex > stopIndex) {

      const activeItem = el.current?.querySelector('.__active') as HTMLDivElement
      if (!activeItem) return

      const move = (
        activeItem.offsetLeft
        - ((el.current as HTMLDivElement).clientWidth / widthPI)
        + (activeItem.offsetWidth / widthPI)
      )

      window.requestAnimationFrame(() => {
        try {
          el.current?.scrollTo?.({ left: move, behavior: 'smooth' })
        } catch (error) {
          // eslint-disable-next-line no-magic-numbers
          el.current?.scrollTo?.(move, 0)
        }
      })
    }


  }, [ currenIndex, el ])
}

export default useTabScroll
