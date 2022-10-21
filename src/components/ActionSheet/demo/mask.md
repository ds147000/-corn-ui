---header
sort: 9
---

### 遮罩层不可操作

```tsx
import { useState } from 'react'
import { ActionSheet, Button } from 'corn-h5'

const Demo: React.FC = () => {
  const [city, setCity] = useState('')
  const [show, setShow] = useState(false)

  const onSelect = (city: string): void => {
    setCity(city)
    setShow(false)
  }

  return (
    <>
      <Button onClick={() => setShow(true)}>选择城市: {city}</Button>
      <ActionSheet
        title="请选择城市"
        visible={show}
        maskClosable={false}
        onClose={() => setShow(false)}
      >
        <div onClick={() => onSelect('广州')}>广州</div>
        <div onClick={() => onSelect('深圳')}>深圳</div>
      </ActionSheet>
    </>
  )
}

export default Demo
```
通过`maskClosable` 可以控制用户点击遮罩层是否允许关闭
