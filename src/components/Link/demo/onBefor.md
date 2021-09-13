---header
sort: 4
---

### 监听或者跳转

```tsx
import { Link, Toast } from '@xrkmm/ui-h5'

Link.onBefor = (): boolean => {
  Toast.show('修改全局的toast')
  return false
}

const Demo: React.FC = () => {
  const onBefor = (): boolean => {
    Toast.show('前往首页')
    return false
  }

  const onBeforOfError = (): boolean => {
    Toast.show('哎呀，跳转失败')
    return true
  }
  return (
    <>
      <Link to='/home' onBefor={onBefor}>首页</Link>
      <Link to='/home' onBefor={onBeforOfError}>首页</Link>
      <Link to='/home'>全局的</Link>
    </>
  )
}

export default Demo
```
`onBefor`事件会在跳转前触发，如果返回`true`会阻止默认的跳转行为。可以单独通过`props`设置，也可以通过`Link.onBefor`对全局的Link设置。
