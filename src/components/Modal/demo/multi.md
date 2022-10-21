---header
sort: 3
---
### 多个按钮弹的模态框

```tsx
import { useState } from "react";
import { Modal, Button } from "corn-h5";

const Demo: React.FC = () => {
  const [idnex, setIndex] = useState(0)
  const [show, setShow] = useState(false)

  return (
    <>
      <Button onClick={() => setShow(true)} >
        多个按钮的弹窗 {idnex}
      </Button>
      <Modal
        visible={show}
        title="这是标题"
        content="这是文案这是文案这是文案这是文案"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '继续观看', style: 'cancel' },
          { text: '确定' }
        ]}
        onButtonClick={(index) => {
          setIndex(index)
          setShow(false)
        }}
      />
    </>
  );
};

export default Demo;
```
`button` 是一个按钮对象数组，可以配置多个按钮，无限制。超过两个会换行显示。
