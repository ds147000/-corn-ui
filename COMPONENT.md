# 组件md文件编写规范

### 命名规范
必须是英文开头，小驼峰。使用markdown语法

### 系统命名
 - props.md 组件的属性说明文件，如果组件存在演示例子，props.md 内容中需要使用 `<solt>`插入演示内容。

### 例子

```tsx
// 目录
demo
├── props.md // 组件属性说明文件
└── basis.md // 组件演示离职文件
```

props.md
```
# 测试卡片组件 Card
// 注意：props.md 第一个标题将用于文档菜单名称

<solt> // 注意：solt用来插入演示组件例子代码

## Props
| 属性 | 说明 | 类型 | 默认值
| --- | --- | --- | --- |
| title| 标题 | `string` | |


# Event
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击事件 | null | |

```

basis.md
```
## 基本用法

\\```tsx
import { useState } from 'react'
import { Card } from '@xrkmm/ui'

const CardDemo: React.FC = () => {
  const [title, setTitle] = useState('我是卡片')

  const onClick = () => {
    setTitle('我是卡片' + Date.now())
  }

  return (
    <Card title={title} onClick={onClick} />
  )
}

export default CardDemo
\\```

这是一个普通的卡片，具有标题和点击事件
```

### 生成文档预览

<img style="width:100%" src="https://assets.xrkmm.cn/u/4000002499670412/bbbe7e74-8a6d-4348-a742-cf26559999b2.png">
