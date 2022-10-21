---header
sort: 2
---

### 两种大小

```tsx
import { Tag } from 'corn-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Tag size="large">3-9岁</Tag>
      <Tag size="middle">3-9岁</Tag>
      <Tag size="small">3-9岁</Tag>
      <Tag size="mini">3-9岁</Tag>
    </>
  )
}

export default Demo
```
可以通过`size`属性控制按钮风格，可选属性： `middle` `small` `mini`  ，默认为`small`。
 - `middle`：打的标签，默认是这个
 - `small`：比较小的标签
 - `mini`： 很小的标签
