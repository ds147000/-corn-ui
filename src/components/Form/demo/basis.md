---header
sort: 1
---

### 基本使用

```tsx
import { useState } from 'react'
import { Input, Form, Checkbox, CheckboxGroup, Button, Toast } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  const [data, setData] = useState({})

  return (
    <Form onSubmit={(e) => setData(e)} >
      {JSON.stringify(data)}
      <Input id="x-input" name="name" />
      <Checkbox name="isVip" >是否会员</Checkbox>
      <CheckboxGroup name="sex" radio >
        <Checkbox value="男" >男</Checkbox>
        <Checkbox value="女" >女</Checkbox>
      </CheckboxGroup >
      <Button formType="submit" >提交</Button>
      <Button formType="reset" >重置</Button>
    </Form>
  )
}

export default Demo
```
```css
#x-input {
  border: 1px solid #999;
}
```
配合`Form`组件使用，需要对所有表单框设置`name`。
