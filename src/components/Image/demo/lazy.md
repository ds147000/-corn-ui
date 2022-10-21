
---header
sort: 3
---
### 懒加载

```tsx
import { Image } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <Image src="https://t7.baidu.com/it/u=774679999,2679830962&fm=193&f=GIF" className="ximg" lazyLoad />
  )
}

export default Demo
```
```css
.ximg {
  width: 300px !important;
}
```
你可以使用`lazyLoad`开启图片组件的懒加载来提高页面的性能，`lazyLoad`只有在图片处于屏幕显示位置时候会进行价值图片

