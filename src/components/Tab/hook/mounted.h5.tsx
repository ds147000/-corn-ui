import { useEffect } from 'react'

// 滚动tabBar横向展示区域
const useTabScroll = (currenIndex: number): void => {

  useEffect(() => {
    const stopIndex = 0
    const widthPI = 2

    if (currenIndex > stopIndex) {
      const tabList = document.querySelectorAll('.xrk-tab')

      for (let i = 0; i < tabList.length; i++) {
        const activeItem = tabList[i].querySelector('.xrk-tab-item-active') as HTMLDivElement
        if (!activeItem) return
        const move = activeItem.offsetLeft - (tabList[i].clientWidth / widthPI) + (activeItem.offsetWidth / widthPI)

        window.requestAnimationFrame(() => {
          try {
            tabList[i].scrollTo?.({ left: move, behavior: 'smooth' })
          } catch (error) {
            // eslint-disable-next-line no-magic-numbers
            tabList[i].scrollTo?.(move, 0)
          }
        })
      }
    }


  }, [ currenIndex ])
}

export default useTabScroll
