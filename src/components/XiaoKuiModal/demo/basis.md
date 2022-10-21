---header
sort: 1
---

### API方式调用

```tsx
import { XiaoKuiModal, Button } from 'corn-h5'
import { useState } from 'react'

const Demo: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
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
      <XiaoKuiModal
        visible={visible2}
        onClick={() => setVisible2(false)}
        onClose={() => setVisible2(false)}
        type="notify"
        btn={[
          { text: '炫耀一下' },
          { text: '解锁更多课程', type: 'error', ghost: true }
          ]}
        >
        <div>我是内容</div>
      </XiaoKuiModal>
      <XiaoKuiModal
        visible={visible3}
        onClick={() => setVisible3(false)}
        onClose={() => setVisible3(false)}
        type="upadte"
        btn={[
          { text: '炫耀一下' },
          { text: '解锁更多课程', type: 'error', ghost: true }
          ]}
        >
        <div>我是内容</div>
      </XiaoKuiModal>
      <XiaoKuiModal
        visible={visible4}
        onClick={() => setVisible4(false)}
        onClose={() => setVisible4(false)}
        type="guide"
        btn={[
          { text: '炫耀一下' },
          { text: '解锁更多课程', type: 'error', ghost: true }
          ]}
        >
        <div>我是内容</div>
      </XiaoKuiModal>
      <XiaoKuiModal
        visible={visible5}
        onClick={() => setVisible5(false)}
        onClose={() => setVisible5(false)}
        type="active"
        btn={[
          { text: '炫耀一下' },
          { text: '解锁更多课程', type: 'error', ghost: true }
          ]}
        >
        <div>我是内容</div>
      </XiaoKuiModal>
      <Button onClick={() => setVisible(true)}>打开小葵弹窗</Button>
      <Button onClick={() => setVisible2(true)}>打开 notify 类型小葵弹窗</Button>
      <Button onClick={() => setVisible3(true)}>打开 upadte 小葵弹窗</Button>
      <Button onClick={() => setVisible4(true)}>打开 guide 小葵弹窗</Button>
      <Button onClick={() => setVisible5(true)}>打开 active 小葵弹窗</Button>
    </>
  )
}

export default Demo
```
最简单的使用方式
