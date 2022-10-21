---header
sort: 2
---

### 使用图标

```tsx
import { useState } from 'react'
import { Tab } from 'corn-h5'

const TabOption = [
  { icon: 'https://assets.xrkmm.cn/u/4000002499670412/9ec97723-bf4b-47c4-887b-b8d57805b7ab.jpeg' },
  { title: '我是选项2' },
  { title: '我是选项3' },
  { title: '我是选项4' },
  { title: '我是选项5' }
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
`icon`可以显示为一个图标类型的菜单
