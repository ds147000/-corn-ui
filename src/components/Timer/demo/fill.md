---header
sort: 3
---

### 填充风格样式

```tsx
import { Timer } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  return (
    <>
      <div>
        <div>1500000000 ~ 240000</div>
        <Timer startTime={1500000000} endTime={1500000000 + 240000} fill />
      </div>
      <div>
        <div>1500000000 ~ 240000000</div>
        <Timer startTime={1500000000} endTime={1500000000 + 240000000} fill />
      </div>
    </>
  )
}

export default Demo
```
`fill`属性可以开启填充方块风格
