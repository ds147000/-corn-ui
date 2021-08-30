---header
sort: 6
---
### `DateToTimestamp(value: Date | number | string ): number` 日期字符串转时间戳

```tsx
import { UTILS } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <span>
      2021-10-01 = <span>{UTILS.DateToTimestamp('2021-10-01')}</span>
    </span>
  )
}

export default Demo
```
`DateToTimestamp`可以把时间对象、日期字符串、时间戳、转换为时间戳

