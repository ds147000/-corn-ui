---header
sort: 2
---

### 替换跳转

```tsx
import { Link } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <Link to='/vip' replace >首页</Link>
  )
}

export default Demo
```
`replace`可以开启路由的替换跳转，使用此属性将替换原有的路由
