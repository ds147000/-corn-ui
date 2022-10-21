---header
sort: 5
---
### 不可操作toast

```tsx
import { Button, Toast } from 'corn-h5'

const Demo: React.FC = () => {
  const onClick = () => {
    Toast.show({
      title: '我是不可操作的toast',
      mask: true
    })
  }

  return (
    <Button onClick={onClick}>我是不可操作的toast</Button>)
}

export default Demo
```
通过`Option.mask`出现屏障，让用户在toast期间不可操作
