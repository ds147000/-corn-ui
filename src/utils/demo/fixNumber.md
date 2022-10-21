---header
sort: 7
---
### `fixNumber(val: number | string, len = 2): string` 补全数字长度

```tsx
import { UTILS } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <span>1 补全长度{UTILS.fixNumber(1, 2)}</span>
  )
}

export default Demo
```
`fixNumber`可以把数字补长度，比如 1 补全为 01

