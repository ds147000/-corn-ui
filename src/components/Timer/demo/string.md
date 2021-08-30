---header
sort: 2
---

### 使用日期字符串

```tsx
import { Timer } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <>
      <div>2021-10-11 12:00:01 - 2021-10-11 12:00:40</div>
      <Timer startTime='2021-10-11 12:00:01' endTime='2021-10-11 12:00:40' />
    </>
  )
}

export default Demo
```
也可以直接时间字符串使用
