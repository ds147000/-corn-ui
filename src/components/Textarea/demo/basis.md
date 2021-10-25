---header
sort: 1
---

### 基本使用

```tsx
import { useState } from 'react'
import { Textarea } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <Textarea
      placeholder="请选择问题类型，并填写相关建议，我们将基于你的反馈持续优化~"
      value={value} onChange={(val) => setValue(val.detail.value)}
    />
  )
}

export default Demo
```

建议配合`Form`组件使用，这样你不需要控制值与改变事件
