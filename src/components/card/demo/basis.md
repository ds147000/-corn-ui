### 基本用法

```tsx
import { Card } from '@xrkmm/ui'

const CardDemo = () => {
  const [title, setTitle] = useState('我是卡片')

  const onClick = () => {
    setTitle('我是卡片' + Date.now())
  }

  return (
    <Card title={title} onClick={onClick} />
  )
}

```
