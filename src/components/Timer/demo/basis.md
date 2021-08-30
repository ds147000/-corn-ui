---header
sort: 1
---

### 代码演示

```tsx
import { Timer } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <>
      <div>
        <div>1500000000 ~ 240000</div>
        <Timer startTime={1500000000} endTime={1500000000 + 240000} />
      </div>
      <div>
        <div>1500000000 ~ 240000000</div>
        <Timer startTime={1500000000} endTime={1500000000 + 240000000} />
      </div>
    </>
  )
}

export default Demo
```

直接传入时间戳数字使用
