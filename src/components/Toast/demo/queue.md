---header
sort: 2
---
### 通过Options唤起

```tsx
import { Button, Toast } from 'corn-h5'

const Demo: React.FC = () => {
  const onClick = () => {
    Toast.show({
      title: '我是通过配置唤起的，我5秒才消失',
      duration: 5000
    })
  }

  return (
    <Button onClick={onClick}>通过配置唤起轻提示</Button>)
}

export default Demo
```
通过`Option`灵活配置toast。
