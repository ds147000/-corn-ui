---header
sort: 1
---

### 基本使用

```tsx
import { Tooltip, Button, Toast } from "corn-h5";

const Demo: React.FC = () => {
  return (
    <Tooltip
      align="bottom"
      list={[
        { text: "VIP妈妈", type: "active" },
        { text: "明星妈妈" },
        { text: "平民" },
        { text: "新人" },
      ]}
      onClick={(item) => Toast.show(item.text)}
      moveX={10}
    >
      <Button>会员等级</Button>
    </Tooltip>
  );
};

export default Demo;
```

使用`jsx`方式开发，可以灵活配置模态框样式和内容
