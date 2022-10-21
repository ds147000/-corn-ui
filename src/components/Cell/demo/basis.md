---header
sort: 1
---

### 基本使用

```tsx
import { Cell } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <>
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" arrow />
    </>
  )
}

export default Demo
```
`label`显示单元格的标题内容，`placeholder`当内容为空时候显示，内容可以通过`value`或`children`方式插入。`arrow`为`true`时候会显示一个箭头
