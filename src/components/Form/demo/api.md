---header
sort: 2
---

### 使用API

```tsx
import { useState, useRef, useEffect } from 'react'
import { Input, Form, Checkbox, CheckboxGroup, Button } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  const [data, setData] = useState({})
  const form = useRef<Form>()

  useEffect(() => {
    form.current?.setValue({ name: '我是小明', isVip: true, sex: '男' })
  }, [])

  return (
    <>
      {JSON.stringify(data)}
      <Form ref={form} onSubmit={(e) => setData(e)} >
        <Input id="x-input" name="name" />
        <Checkbox name="isVip" >是否会员</Checkbox>
        <CheckboxGroup name="sex" radio >
          <Checkbox value="男" >男</Checkbox>
          <Checkbox value="女" >女</Checkbox>
        </CheckboxGroup>
      </Form>
      <Button onClick={() => form.current?.submit()} >点击提交</Button>
    </>
  )
}

export default Demo
```
```css
#x-input {
  border: 1px solid #999;
}
```
使用`From`实例的方法可以更加简洁使用表单。提高 `getValue`,`setValue`,`submit`,`reset`等方法。
