---header
sort: 7
---

### 底部的操作按钮

```tsx
import { useState } from 'react'
import { ActionSheet, ActionSheetItem, Button } from 'corn-h5'

const list = ['广州', '深圳']

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
        showCancel
        showOk
        title="请选择城市"
        visible={show}
        onClose={() => setShow(false)}
        onOk={() => setShow(false)}
      >
        {list.map((item) => (
          <ActionSheetItem key={item} onClick={() => onSelect(item)} text={item} />
        ))}
      </ActionSheet>
    </>
  )
}

export default Demo
```
`showCancel` `showOk` 可以分别单独控制显示底部的操作按钮。`onOk` `onClose` 分别对应操作按钮的回调事件,并且操作按钮的文案也可以通过
