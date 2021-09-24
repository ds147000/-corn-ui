import { useEffect } from 'react'

// 滚动tabBar横向展示区域
const useTabScroll = (id: string, currenIndex: number): void => {

  useEffect(() => {
    const stopIndex = 0
    const widthPI = 2

    if (currenIndex > stopIndex) {
      const tabList = document.getElementById(id) as HTMLDivElement

      const activeItem = tabList.querySelector('.__active') as HTMLDivElement
      if (!activeItem) return

      const move = activeItem.offsetLeft - (tabList.clientWidth / widthPI) + (activeItem.offsetWidth / widthPI)

      window.requestAnimationFrame(() => {
        try {
          tabList.scrollTo?.({ left: move, behavior: 'smooth' })
        } catch (error) {
          // eslint-disable-next-line no-magic-numbers
          tabList.scrollTo?.(move, 0)
        }
      })
    }


  }, [ currenIndex, id ])
}

export default useTabScroll
