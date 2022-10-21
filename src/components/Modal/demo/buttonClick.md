---header
sort: 4
---
### 直接使用 button 的 click 事件

```tsx
import { useState } from "react";
import { Modal, Button } from "corn-h5";

const Demo: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button onClick={() => setShow(true)} >
         button 的 click 事件
      </Button>
      <Modal
        visible={show}
        title="这是标题"
        content="这是文案这是文案这是文案这是文案"
        button={[
          { text: '取消', style: 'cancel', onClick: () => setShow(false) },
          { text: '继续观看' },
          { text: '确定', onClick: () => setShow(false) }
        ]}
      />
    </>
  );
};

export default Demo;
```
除了`onButtonClick`可以监听弹窗按钮点击事件，直接在按钮对象中 `onClick` 也可以监听到弹窗点击事件
