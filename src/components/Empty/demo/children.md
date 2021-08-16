---header
sort: 4
---

### 自定义子节点

```tsx
import { Empty, Button } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <Empty>
      <Button>返回首页</Button>
    </Empty>
  )
}

export default Demo
```
可以通过`children`插入子节点的内容
