---header
sort: 2
---

### 5种不同弹出的方式抽屉

```tsx
import { useState } from 'react'
import { Drawer, Button } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  const [ show, setShow ] = useState(false)
  const [ topShow, setTopShow ] = useState(false)
  const [ leftShow, setLeftShow ] = useState(false)
  const [ rightShow, setRightShow ] = useState(false)
  const [ centerShow, setCenterShow ] = useState(false)

  const onChange = () => setShow(!show)
  const onTopChange = () => setTopShow(!topShow)
  const onLeftChange = () => setLeftShow(!leftShow)
  const onRightChange = () => setRightShow(!rightShow)
  const onCenterChange = () => setCenterShow(!centerShow)

  return (
    <>
      <Button onClick={onChange}>底部出现的抽屉</Button>
      <Button onClick={onTopChange} type="warn">顶部出现的抽屉</Button>
      <Button onClick={onLeftChange} type="error" >左边出现的抽屉</Button>
      <Button onClick={onRightChange} type="pop" >右边出现的抽屉</Button>
      <Button onClick={onCenterChange} >中间出现的抽屉</Button>

      <Drawer visible={show} onClose={onChange} position="bottom" >
        <div style={{ width: '100%', height: 300, backgroundColor: '#fff', fontSize: 40, textAlign: 'center' }}>
          底部弹出的
        </div>
      </Drawer>
      <Drawer visible={topShow} onClose={onTopChange} position="top" >
        <div style={{ width: '100%', height: 300, backgroundColor: '#fff', fontSize: 40, textAlign: 'center' }}>
          顶部弹出的
        </div>
      </Drawer>
      <Drawer visible={leftShow} onClose={onLeftChange} position="left" >
        <div style={{ width: 300, height: '100%', backgroundColor: '#fff', fontSize: 40, textAlign: 'center' }}>
          左边弹出的
        </div>
      </Drawer>
      <Drawer visible={rightShow} onClose={onRightChange} position="right" >
        <div style={{ width: 300, height: '100%', backgroundColor: '#fff', fontSize: 40, textAlign: 'center' }}>
          右边弹出的
        </div>
      </Drawer>
      <Drawer visible={centerShow} onClose={onCenterChange} position="center" >
        <div style={{ width: 300, height: 300, backgroundColor: '#fff', fontSize: 40, textAlign: 'center' }}>
          中间弹出的
        </div>
      </Drawer>
    </>
  )
}

export default Demo
```
`position`属性控制抽屉组件弹出方式，可选值 `left` `right` `bottom` `top` `center`。默认`bottom`
