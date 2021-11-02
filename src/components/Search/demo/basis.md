---header
sort: 1
---

### 基本使用

```tsx
import { Search } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <Search
      back
      placeholder={['向日葵妈妈', '常青藤爸爸', '小熊', '二逼']}
      onBack={() => console.log('返回')}
      onClick={() => console.log('点击搜索')}
    />
  )
}

export default Demo
```
一个非常简单的 `Search` 组件
