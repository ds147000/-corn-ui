---header
sort: 3
---

### 镂空风格

```tsx
import { Tag } from 'corn-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Tag type="error" ghost>3-9岁</Tag>
      <Tag type="link" ghost>3-9岁</Tag>
      <Tag type="pop" ghost>3-9岁</Tag>
      <Tag type="primary" ghost>3-9岁</Tag>
      <Tag type="warn" ghost>3-9岁</Tag>
    </>
  )
}

export default Demo
```
可以通过`ghost`属性来开启镂空风格，默认为不开启
