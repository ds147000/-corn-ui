
---header
sort: 2
---
### `formatMoney(value: number | string): number` 分转元

```tsx
import { UTILS } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <>
      10000分 = {UTILS.formatMoney(10000)}元
    </>
  )
}

export default Demo
```
`formatMoney`可以把分单位转为元单位

