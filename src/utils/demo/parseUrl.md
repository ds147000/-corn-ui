
---header
sort: 4
---
### `parseUrl(url: string): Object` 解析链接信息

```tsx
import { UTILS } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <>
      https://baidu.com/search?a=100#home
      解析结果 {JSON.stringify(UTILS.parseUrl('https://baidu.com/search?a=100#home'))}
    </>
  )
}

export default Demo
```
`parseUrl`可以解析url中的元素

