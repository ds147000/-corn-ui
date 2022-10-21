
---header
sort: 1
---
### `transformRem(px: number): string` PX单位转Rem

```tsx
import { UTILS } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <>
      100px = {UTILS.transformRem(100)}
    </>
  )
}

export default Demo
```
`transformRem`可以动态的把`px`单位转换为`rem`

