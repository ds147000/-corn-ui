---header
sort: 3
---

### Click 和 disabled
点击事件和禁用按钮

```tsx
import { Button } from 'corn-h5'

const Demo: React.FC = () => {

  const click = () => alert('点击了按钮')

  return (
    <>
      <Button onClick={click}>可点击的</Button>
      <Button onClick={click} formType="reset" >可点击的</Button>
      <Button onClick={click} formType="submit" >可点击的</Button>
      <Button onClick={click} disabled>禁用的</Button>
    </>
  )
}

export default Demo
```
可以通过`onClick`来监听按钮的点击事件，`disabled`为`true`可以将按钮禁用。`formType`可以指定提交行为
