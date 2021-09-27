---header
sort: 1
---

### 7种状态

```tsx
import { Button } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Button type="primary">向日葵妈妈UI</Button>
      <Button type="warn">向日葵妈妈UI</Button>
      <Button type="error">向日葵妈妈UI</Button>
      <Button type="link">向日葵妈妈UI</Button>
      <Button type="pop">向日葵妈妈UI</Button>
      <Button type="light">向日葵妈妈UI</Button>
      <Button type="default">向日葵妈妈UI</Button>
    </>
  )
}

export default Demo
```
可以通过`type`属性控制按钮风格，具有五个可选属性：`primary` `warn` `error` `link` `pop` `light` `default` ，默认为`primary`
