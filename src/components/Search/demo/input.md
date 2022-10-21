---header
sort: 2
---

### 可直接输入的搜索框

```tsx
import { Search, Toast, Icon } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <Search
      back
      openInput
      placeholder="输入关键词"
      onBack={() => Toast.show('返回')}
      onSearch={(e) => Toast.show('搜索内容：' + e)}
      suffix={<Icon name="camera" />}
    />
  )
}

export default Demo
```
一个非常简单的 `Search` 组件
