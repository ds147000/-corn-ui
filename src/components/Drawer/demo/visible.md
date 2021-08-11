---header
sort: 1
---

### 代码演示

```tsx
import { useState } from 'react'
import { Drawer, Button } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  const [ show, setShow ] = useState(false)

  const onChange = () => setShow(!show)

  return (
    <>
      <Button onClick={onChange}>底部出现的抽屉</Button>
      <Drawer visible={show} onClose={onChange} >
        <div style={{ width: '100%', height: 300, backgroundColor: '#fff', fontSize: 40, textAlign: 'center' }}>
          向日葵妈妈
        </div>
      </Drawer>
    </>
  )
}

export default Demo
```
`visible`属性控制抽屉组件的展示，抽屉发生关闭事件会回调`onClose`事件
