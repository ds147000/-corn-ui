---header
sort: 2
---

### suffix

```tsx
import { Cell } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
  )
}

export default Demo
```
`suffix`可以在箭头前面插入自定义的内容
