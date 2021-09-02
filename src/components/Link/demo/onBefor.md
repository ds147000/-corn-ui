---header
sort: 4
---

### 监听或者跳转

```tsx
import { Link, Toast } from '@xrkmm/ui-h5'

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
    </>
  )
}

export default Demo
```
`onBefor`事件会在跳转前触发，如果返回`true`会阻止默认的跳转行为
