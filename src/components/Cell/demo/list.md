---header
sort: 4
---

### 单元列表 Cell.List

```tsx
import { Cell, Toast } from "@xrkmm/ui-h5";

const Demo: React.FC = () => {
  return (
    <Cell.List line>
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" href="/home" suffix="重选" arrow disable />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="立即兑换" suffix="重选" arrow onClick={() => Toast.show("唤起程序失败")}/>
      <Cell label="联系人" placeholder="请输入联系人" arrow />
      <Cell label="联系电话" placeholder="请选择联系电话" arrow />
    </Cell.List>
  );
};

export default Demo;
```
`Cell.List`可以让快速编排组件和提高添加线条占位的样式
