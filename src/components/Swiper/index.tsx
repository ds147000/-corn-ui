import { Swiper as _Swiper, SwiperItem } from '@tarojs/components'
import { SwiperProps } from '@tarojs/components/types/Swiper'


const Swiper = _Swiper as unknown as React.FC<SwiperProps & { loop: boolean }>

export {
  Swiper, SwiperItem, SwiperProps
}
