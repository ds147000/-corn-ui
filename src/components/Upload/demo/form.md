---header
sort: 1
---

### 配合Form表单使用

```tsx
import { useState } from 'react'
import { Upload, Card, Form, Button } from '@xrkmm/ui-h5'

// 全局配置处理上传方法
Upload.handelUpload = async (file: FileList) => {
  const list = []
    for (let i = 0; i < file.length; i++) {
      list.push({ mediaId: Math.random(), content: URL.createObjectURL(file[i]), status: 'done' })
    }
    return list
}

const Demo: React.FC = () => {
  const [list, setList] = useState({})

  return (
    <Form onSubmit={(value) => setList(value)} >
      {JSON.stringify(list)}
      <Card>
        <Upload name="img" />
      </Card>
      <Button formType="submit" >提交</Button>
    </Form>
  )
}

export default Demo
```
直接使用上传组件
