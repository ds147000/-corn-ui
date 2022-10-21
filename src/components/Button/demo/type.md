---header
sort: 1
---

### 7种状态

```tsx
import { Button } from 'corn-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Button type="primary">@CornUI</Button>
      <Button type="warn">@CornUI</Button>
      <Button type="error">@CornUI</Button>
      <Button type="link">@CornUI</Button>
      <Button type="pop">@CornUI</Button>
      <Button type="light">@CornUI</Button>
      <Button type="default">@CornUI</Button>
      <Button type="stop">@CornUI</Button>
    </>
  )
}

export default Demo
```
可以通过`type`属性控制按钮风格，具有五个可选属性：`primary` `warn` `error` `link` `pop` `light` `default` `stop`  ，默认为`primary`
