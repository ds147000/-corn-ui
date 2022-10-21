---header
sort: 3
---

### 指定Link渲染的标签类型

```tsx
import { Link } from 'corn-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Link to='/home' target="View">首页</Link>
       <Link to='/home' target="Text">首页</Link>
    </>
  )
}

export default Demo
```
`target`可以指定渲染标签，默认是 a 标签
