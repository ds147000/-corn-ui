---header
sort: 2
---

### 配合Form表单使用

```tsx
import { useState } from 'react'
import { Input, Form } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <Form onSubmit={(e) => console.log(e)} >
      <Input id="x-input" name="age" />
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
配合`Form`组件使用，需要要设置`name`。但是不需要管理state属性等
