---header
sort: 2
---

### JSX 方式使用

```tsx
import { useState } from 'react'
import { ActionSheet, Button } from '@xrkmm/ui-h5'

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
JSX方式使用需要通过`visible`自定义。JSX方式使用提高非常多的选项来灵活控制样式
