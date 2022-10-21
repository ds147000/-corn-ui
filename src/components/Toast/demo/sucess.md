---header
sort: 6
---
### 通过API关闭taost

```tsx
import { Button, Toast } from 'corn-h5'

const Demo: React.FC = () => {

  const onClick = () => {
    Toast.show({
      title: '10秒的taost',
      duration: 10000,
      success: () => console.log('ok~')
    })
  }

  return (
    <Button onClick={onClick}>10秒的taost</Button>
  )
}

export default Demo
```
通过`Option.success`回调可以知道toast是否显示，并且可以通过 `Toasr.hide()` 关闭所有 `taost`
