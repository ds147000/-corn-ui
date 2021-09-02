---header
sort: 4
---

### 使用url属性直接跳转

```tsx
import { useState } from 'react'
import { Tab } from '@xrkmm/ui-h5'

const TabOption = [
  { title: '我是选项1', url: '/' },
  { title: '我是选项2', url: '/home' },
  { title: '我是选项3', url: '/oa' },
  { title: '我是选项4', url: '/tt' },
  { title: '我是选项5', url: '/bb' }
]

const Demo: React.FC = () => {
  const [current, setCurrent] = useState(0)

  return (
     <Tab
        options={TabOption}
        currenIndex={current}
        onChange={(index) => setCurrent(index)}
      />
  )
}

export default Demo
```
列表项的`url`可以启用点击直接跳转链接
