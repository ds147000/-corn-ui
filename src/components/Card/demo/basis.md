---header
sort: 1
---

### 代码演示

```tsx
import { Card, Button } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <>
      <Card>卡片1</Card>
      <Card>葵花籽</Card>
      <Card>钱包</Card>
      <Card>
        <Button>点击卡片</Button>
      </Card>
    </>
  )
}

export default Demo
```
`Card`组件可以直接当成`View`使用。并且它具有自己的样式
