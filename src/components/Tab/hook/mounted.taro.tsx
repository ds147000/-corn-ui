// 滚动tabBar横向展示区域
const useTabScroll = (el: React.MutableRefObject<HTMLDivElement | undefined>, index: number): void => {
  console.error('小程序不支持聚焦动效', index, el.current?.id)
}

export default useTabScroll
