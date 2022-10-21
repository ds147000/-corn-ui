---header
sort: 5
---

### 标题的方向

```tsx
import { useState } from 'react'
import { ActionSheet, ActionSheetItem, Button } from 'corn-h5'

const list = ['广州', '深圳']

const Demo: React.FC = () => {
  const [city, setCity] = useState('')
  const [showLeft, setShowLeft] = useState(false)
  const [showCenter, setShowCenter] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const onSelect = (city: string): void => {
    setCity(city)
    setShowLeft(false)
    setShowCenter(false)
    setShowRight(false)
  }

  return (
    <>
      <Button onClick={() => setShowLeft(true)}>左边: {city}</Button>
      <Button onClick={() => setShowCenter(true)}>中间: {city}</Button>
      <Button onClick={() => setShowRight(true)}>右边: {city}</Button>

      <ActionSheet
        title="请选择城市"
        subTitle="建议选广州"
        titleAlign="left"
        visible={showLeft}
        onClose={() => setShowLeft(false)}
      >
        {list.map((item) => (
          <ActionSheetItem key={item} onClick={() => onSelect(item)} text={item} />
        ))}
      </ActionSheet>

      <ActionSheet
        title="请选择城市"
        subTitle="建议选广州"
        titleAlign="center"
        visible={showCenter}
        onClose={() => setShowCenter(false)}
      >
        {list.map((item) => (
          <ActionSheetItem key={item} onClick={() => onSelect(item)} text={item} />
        ))}
      </ActionSheet>

      <ActionSheet
        title="请选择城市"
        subTitle="建议选广州"
        titleAlign="right"
        visible={showRight}
        onClose={() => setShowRight(false)}
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
`titleAlign` 可以控制操作板的方向，并且具有 `left` `center` `right` 可选值。默认为 `left`
