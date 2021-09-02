---header
sort: 1
---

### 基本使用

```tsx
import { Link } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Link to='/home'>首页</Link>
      <br />
      <Link to='/home' type="normal" >normal</Link>
      <br />
      <Link to='/home' type="primary" >primary</Link>
      <br />
      <Link to='/home' type="warn" >warn</Link>
      <br />
      <Link to='/home' type="error" >error</Link>
      <br />
      <Link to='/home' type="link" >link</Link>
      <br />
      <Link to='/home' type="pop" >pop</Link>

    </>
  )
}

export default Demo
```
直接使用，`to`设置跳转的路由。`type`可以设置链接的风格样式，可选值`'normal' | 'primary' | 'warn' | 'error' | 'link' | 'pop'`，默认值`normal`
