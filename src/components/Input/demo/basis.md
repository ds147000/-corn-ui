---header
sort: 1
---

### 基本使用

```tsx
import { useState } from 'react'
import { Input } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <Input id="x-input" value={value} onChange={(val) => setValue(val.detail.value)} />
  )
}

export default Demo
```
```css
#x-input {
  border: 1px solid #999;
}
```
简单的 `Input`。建议配合`Form`组件使用，这样你不需要控制值与改变事件
