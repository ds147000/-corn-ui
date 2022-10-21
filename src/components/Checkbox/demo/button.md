---header
sort: 2
---

### 默认状态和自控制状态

```tsx
import { useState } from 'react'
import { Checkbox, Toast } from 'corn-h5'

const Demo: React.FC = () => {
  const [check, setCheck] = useState(false)
  const onChange = (check:boolean) => {
    Toast.show(String(check))
    setCheck(check)
  }

  return (
    <>
      <Checkbox onChange={onChange} defaultChecked={true} >默认选择类型</Checkbox>
      <Checkbox onChange={onChange} check={check} >外部控制状态</Checkbox>
    </>
  )
}

export default Demo
```
`type`设置为`button`类型可以使用按钮复选
