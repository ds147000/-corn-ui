---header
sort: 1
---

### 基本使用

```tsx
import { Checkbox, Toast } from 'corn-h5'

const Demo: React.FC = () => {
  const onChange = (check:boolean) => Toast.show(String(check))

  return (
    <Checkbox onChange={onChange} >复选框1</Checkbox>
  )
}

export default Demo
```
简单的 `checkbox。`
