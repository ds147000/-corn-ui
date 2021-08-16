---header
sort: 1
---

### 代码演示

```tsx
import { Swiper, SwiperItem, Image } from "@xrkmm/ui-h5";

const imgs = [
  'https://t7.baidu.com/it/u=518698083,437784578&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2859906941,1154696622&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2235903830,1856743055&fm=193&f=GIF'
]

const Demo: React.FC = () => {
  return (
    <Swiper
      indicatorDots
      loop={false}
      className="x-swiper"
    >
      {imgs.map((item) => (
        <SwiperItem key={item}>
          <Image
            lazyLoad={false}
            src={item}
          />
        </SwiperItem>
      ))}
    </Swiper>
  );
};

export default Demo;
```
```css
.x-swiper {
  width: 450px;
  height: 250px !important;
}
```

直接使用`Empty`组件
