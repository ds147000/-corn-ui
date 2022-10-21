---header
sort: 1
---

### 代码演示

```tsx
import { Affix, Button } from 'corn-h5'

const Demo: React.FC = () => {

  return (
    <>
      <div style={{ height: 500 }} />
      <Affix>
        <Button>漂浮的按钮</Button>
      </Affix>
      <div style={{ height: 1500 }} />
    </>
  )
}

export default Demo
```
直接用Affix组件包裹需要固定的内容
