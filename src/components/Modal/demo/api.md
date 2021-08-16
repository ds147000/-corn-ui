---header
sort: 1
---
### API 方式调用

```tsx
import { showModal, Button } from "@xrkmm/ui-h5";

const Demo: React.FC = () => {
  return (
    <Button
      onClick={() => {
        showModal({ title: "API 唤起 Modal" })
          .then(console.log)
          .catch(console.error);
      }}
    >
      API 唤起 Modal
    </Button>
  );
};

export default Demo;
```

可以直接通过 API 唤起 `Modal` 。对于比较简单的场景可以直接使用此方式。API 返回一个`Promise`对象。用户选择会执行 `then`。失败执行`catch`
