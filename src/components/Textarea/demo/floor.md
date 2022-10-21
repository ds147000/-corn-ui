---header
sort: 2
---

### 插入底部内容

```tsx
import { useState } from 'react'
import { Textarea, Button } from 'corn-h5'

const Demo: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <Textarea
      placeholder="请选择问题类型，并填写相关建议，我们将基于你的反馈持续优化~"
      value={value}
      onInput={(val) => setValue(val.detail.value)}
      floor={<Button onClick={() => setValue('')} >重置</Button>}
    />
  )
}

export default Demo
```

`floor`属性可以随意插入子节点。
