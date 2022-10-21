
---header
sort: 4
---
### 通过oss裁剪图片体积

```tsx
import { Image } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <Image
      src="https://assets.xrkmm.cn/u/4000002499670412/9ec97723-bf4b-47c4-887b-b8d57805b7ab.jpeg"
      w="100"
      h="100"
      m="fill"
    />
  )
}

export default Demo
```
你可以使用通过`m``l``w``h``s``limit``format`的[阿里云OSS](https://help.aliyun.com/document_detail/32217.html?spm=a2c4g.11186623.6.786.38d04c13NPhk0T)裁剪参数来优化图片的体积。配合懒加载`lazyLoad`达到最优图片性能

