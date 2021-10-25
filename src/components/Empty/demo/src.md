---header
sort: 5
---

### 使用其他的缺省图

```tsx
import { Empty } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <Empty text="暂无数据哦～" src={Empty.PRESENTED_IMAGE_SIMPLE} />
  )
}

export default Demo
```
`src`属性可以自定义缺省图，也可以使用`Empty`组件提供了4种状态图。分别为 `Empty.PRESENTED_IMAGE_DEFAULT` `Empty.PRESENTED_IMAGE_SIMPLE` `Empty.PRESENTED_IMAGE_HAPPY` `Empty.PRESENTED_IMAGE_ERROR` `Empty.PRESENTED_IMAGE_MONEY`
