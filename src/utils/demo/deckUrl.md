
---header
sort: 5
---
### `deckUrl(url: string, params?: object, hash: object): string` 合并链接的Params和hash

```tsx
import { UTILS } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <>
      https://baidu.com/search?a=100#home + ?b=100 + #c=1
      合并结果 {UTILS.deckUrl('https://baidu.com/search?a=100#home', { b: 100 }, { c: 1 })}
    </>
  )
}

export default Demo
```
`deckUrl`可以保留链接的`parmas`和`hash`并且其参数进行新增

