---header
sort: 1
---

### 基本使用

```tsx
import { Popover, Button } from "@xrkmm/ui-h5";

const Demo: React.FC = () => {
  return (
    <Popover
      content={(rect) => (
        <div style={{ position: 'absolute', top: rect.bottom, left: rect.left + (rect.width / 2) }} >
          <Button>我是气泡按钮</Button>
        </div>
      )}
    >
      <Button>点击</Button>
    </Popover>
  );
};

export default Demo;
```

使用`jsx`方式开发，可以灵活配置模态框样式和内容
