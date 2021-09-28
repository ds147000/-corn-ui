---header
sort: 1
---

### 5种状态基础使用

```tsx
import { Tag } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Tag type="error">3-9岁</Tag>
      <Tag type="link">3-9岁</Tag>
      <Tag type="pop">3-9岁</Tag>
      <Tag type="primary">3-9岁</Tag>
      <Tag type="warn">3-9岁</Tag>
      <Tag type="urgent">3-9岁</Tag>
      <Tag type="activity">3-9岁</Tag>
    </>
  )
}

export default Demo
```

可以通过`type`属性控制标签风格，具有五个可选属性：`primary` `warn` `error` `link` `pop` ，默认为`primary`
