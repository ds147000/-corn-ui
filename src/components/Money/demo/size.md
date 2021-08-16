---header
sort: 2
---

### 不同的大小风格

```tsx
import { Money } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <>
      <Money size="large" >9999</Money>
      <Money>9999</Money>
      <Money size="small">9999</Money>
    </>
  )
}

export default Demo
```
直接使用`Money`组件
