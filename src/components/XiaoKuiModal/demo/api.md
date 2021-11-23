---header
sort: 2
---

### API方式调用

```tsx
import { useState } from 'react'
import { showXiaokuiModal, Button } from '@xrkmm/ui-h5'


const Demo: React.FC = () => {
  const [city, setCity] = useState('')

  const showAction = () => {
    showXiaokuiModal({
      content: <div>API 唤起</div>,
      btn: [
        { text: '炫耀一下' }
      ]
    })
      .then((res) => setCity(res.item.text))
      .catch((err) => console.error)
  }

  return (
    <Button onClick={showAction}>打开小葵弹窗: {city}</Button>
  )
}

export default Demo
```
可以直接通过API唤起 `XiaokuiModal` 。对于比较简单的场景可以直接使用此方式。API返回一个`Promise`对象。用户选择会执行 `then`。取消和唤起失败执行`catch`
