
---header
sort: 5
---
### 开启图片预览

```tsx
import { Image } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <Image src="https://t7.baidu.com/it/u=1819644070,1305753509&fm=193&f=GIF" className="ximg" previewImage />
  )
}

export default Demo
```
```css
.ximg {
  width: 300px !important;
}
```
`previewImage`开启点击图片预览功能

