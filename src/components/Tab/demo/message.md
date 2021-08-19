---header
sort: 3
---

### 开启消息红点

```tsx
import { useState } from 'react'
import { Tab } from '@xrkmm/ui-h5'

const TabOption = [
  { icon: 'https://assets.xrkmm.cn/u/4000002499670412/9ec97723-bf4b-47c4-887b-b8d57805b7ab.jpeg' },
  { title: '我是选项2', message: true },
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
`message`可以开启一个消息红点，更加吸引用户的点击感
