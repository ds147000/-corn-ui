---header
sort: 4
---

### 隐藏遮罩层

```tsx
import { useState } from 'react'
import { Drawer, Button } from 'corn-h5'

const Demo: React.FC = () => {
  const [ show, setShow ] = useState(false)

  const onChange = () => setShow(!show)

  return (
    <>
      <Button onClick={onChange} type="error" >禁止点击遮罩层关闭抽屉</Button>
      <Drawer visible={show} onClose={onChange} maskClosable={false} >
        <div style={{ width: '100%', height: 300, backgroundColor: '#fff', fontSize: 40, textAlign: 'center'}}>
          @Corn
          <Button onClick={() => setShow(false)} type="error" >关闭</Button>
        </div>
      </Drawer>
    </>
  )
}

export default Demo
```
`maskClosable`属性控制是否允许遮罩层点击关闭
