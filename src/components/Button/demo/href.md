---header
sort: 6
---

### 配置跳转链接

```tsx
import { Button } from 'corn-h5'

const Demo: React.FC = () => {

  return (
    <Button to="/home">@CornUI</Button>
  )
}

export default Demo
```
传入`to`属性可以实现按钮直接跳转链接
