---header
sort: 5
---

### icon
图标按钮

```tsx
import { Button, Icon } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Button type="primary" icon={<Icon name="service" />} />
      <Button type="warn" icon={<Icon name="add" />} />
      <Button type="error" icon={<Icon name="collected" />} />
      <Button type="link" icon={<Icon name="set" />} />
      <Button type="pop" icon={<Icon name="menu" />} />
      <Button type="primary" icon={<Icon name="service" />} >联系客服</Button>
    </>
  )
}

export default Demo
```
可以通过`icon`属性来传入图标组件实现图标按钮
