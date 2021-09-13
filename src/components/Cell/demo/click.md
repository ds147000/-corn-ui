---header
sort: 3
---

### 事件和禁用

```tsx
import { Cell, Toast } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <>
      <Cell label="限时奖励" placeholder="请选择奖励类型" onClick={() => Toast.show('不能选')} arrow  />
      <Cell label="限时奖励" placeholder="请选择奖励类型" disabled onClick={() => Toast.show('不能选')} arrow  />
    </>
  )
}

export default Demo
```
`disable`可以禁用组件

