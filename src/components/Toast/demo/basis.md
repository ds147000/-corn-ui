---header
sort: 1
---

### 代码演示

```tsx
import { Button, Toast } from 'corn-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Button onClick={() => Toast.show('通过字符串弹一个轻提示')}>
        通过字符串唤起
      </Button>
      <Button onClick={() => Toast.show(new Date().toString())} type="error">
        连续点击可唤起多个哦
      </Button>
    </>
    )
}

export default Demo
```
唤起toast可以有两种方式，一种是直接传入字符串参数，其他配置使用默认值。另一种是传入`Option`配置。
