---header
sort: 1
---

### 代码演示

```tsx
import { useState } from 'react'
import { Tab } from '@xrkmm/ui-h5'

const TabOption = [
  { title: '我是选项1' },
  { title: '我是选项2' },
  { title: '我是选项3' },
  { title: '我是选项4' },
  { title: '我是选项5' }
]

const Demo: React.FC = () => {
  const [current, setCurrent] = useState(0)

  return (
    <>
     <Tab
        options={TabOption}
        currenIndex={current}
        onChange={(index) => setCurrent(index)}
      />
      <Tab
        options={TabOption}
        currenIndex={current}
        onChange={(index) => setCurrent(index)}
        type="button"
      />
    </>
  )
}

export default Demo
```
可以通过`option`属性和`current`控制切换栏的状态。
