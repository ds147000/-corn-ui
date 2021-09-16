---header
sort: 5
---

### 使用 API

```tsx
import { useRef } from 'react'
import { Checkbox, Card, CheckboxGroup, Button } from "@xrkmm/ui-h5"

const Demo: React.FC = () => {
  const checkGroupRef = useRef<CheckboxGroup>()

  return (
    <Card>
      <CheckboxGroup ref={checkGroupRef as React.LegacyRef<CheckboxGroup>}>
        <Checkbox value="1">单选模式1</Checkbox>
        <Checkbox value="2">单选模式2</Checkbox>
        <Checkbox value="3">单选模式3</Checkbox>
        <Checkbox value="4">单选模式4</Checkbox>
      </CheckboxGroup>
      <Button onClick={() => checkGroupRef.current?.selectAll()}>全选</Button>
      <Button onClick={() => checkGroupRef.current?.reset()}>取消选中</Button>
    </Card>
  )
}

export default Demo;
```

