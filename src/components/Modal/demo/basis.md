---header
sort: 2
---
### jsx方式使用

```tsx
import { useState } from "react";
import { Modal, Button } from "@xrkmm/ui-h5";

const Demo: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button onClick={() => setShow(true)} >
        JSX使用模态框
      </Button>
      <Modal
        visible={show}
        title="这是标题"
        content="这是文案这是文案这是文案这是文案"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '确定' }
        ]}
        onButtonClick={() => setShow(false)}
      />
    </>
  );
};

export default Demo;
```
使用`jsx`方式开发，可以灵活配置模态框样式和内容
