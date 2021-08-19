
---header
sort: 3
---
### `formatMoney(value: number | string, isReverse: boolean): number` 元转分

```tsx
import { UTILS } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <>
      100元 = {UTILS.formatMoney(100, true)}分
    </>
  )
}

export default Demo
```
`formatMoney`不仅可以把分单位转为元单位，还可以把元转为元

