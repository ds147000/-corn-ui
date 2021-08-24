---header
sort: 2
---

### 设置固定方向

```tsx
import { Affix, Button } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Affix position="buttom">
        <Button>漂浮的按钮</Button>
      </Affix>
    </>
  )
}

export default Demo
```
`position`属性可控制固钉固定的方向
