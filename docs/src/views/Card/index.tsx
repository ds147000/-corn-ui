import Markdown from 'markdown-to-jsx'

const txt = `
# 测试卡片组件
\`\`\`js
const a = 100
\`\`\`

## Props
| 属性 | 说明 | 类型 | 默认值
| --- | --- | --- | --- |
| title| 标题 | \`string\` | |

# Event
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击事件 | null | |
`

const Pgae: React.FC = () => {
  return (
    <Markdown>
      {txt}
    </Markdown>
  )
}

export default Pgae
