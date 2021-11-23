---header
sort: 1
---

### API方式调用

```tsx
import { XiaoKuiModal, Button } from '@xrkmm/ui-h5'
import { useState } from 'react'

const Demo: React.FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <XiaoKuiModal
        visible={visible}
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        btn={[
          { text: '炫耀一下' },
          { text: '解锁更多课程', type: 'error', ghost: true }
          ]}
        >
        <div>我是内容</div>
      </XiaoKuiModal>
      <Button onClick={() => setVisible(true)}>打开小葵弹窗</Button>
    </>
  )
}

export default Demo
```
最简单的使用方式
