---header
sort: 4
---
### 自定义图标的toast

```tsx
import { Button, Toast } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  const onClick = () => {
    Toast.show({
      title: '愤怒的小鸟！！',
      image: 'https://img1.baidu.com/it/u=3563879038,322783869&fm=26&fmt=auto&gp=0.jpg'
    })
  }

  return (
    <Button onClick={onClick}>自定义图标</Button>)
}

export default Demo
```
通过`Option.image`选项传入图片路径自定义图标，
