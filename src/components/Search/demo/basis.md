---header
sort: 1
---

### 基本使用

```tsx
import { Search, Toast, Icon } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <>
      <Search
        type="light"
        back
        placeholder={['向日葵妈妈', '常青藤爸爸', '小熊', '二逼']}
        onBack={() => Toast.show('返回')}
        onClick={() => Toast.show('点击搜索')}
      />
      <Search
        back
        placeholder={['向日葵妈妈', '常青藤爸爸', '小熊', '二逼']}
        onBack={() => Toast.show('返回')}
        onClick={() => Toast.show('点击搜索')}
      />
      <Search
        back
        openInput
        placeholder={['我是可输入的', '向日葵妈妈', '常青藤爸爸', '小熊', '二逼']}
        onBack={() => Toast.show('返回')}
        onSearch={(e) => Toast.show('搜索内容：' + e)}
        suffix={<Icon name="camera" />}
      />
    </>
  )
}

export default Demo
```
一个非常简单的 `Search` 组件
