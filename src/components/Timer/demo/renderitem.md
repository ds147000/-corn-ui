---header
sort: 4
---

### 自定义渲染项

```tsx
import { Timer } from 'corn-h5'

const Demo: React.FC = () => {
  const renderItem = (type: string, number: string): JSX.Element => {
    console.log(type, number)
    switch(type) {
      case 'day':
        return <div>{number}天:</div>

      case 'hous':
        return <div>{number}小时:</div>

      case 'min':
        return <div>{number}分钟:</div>

      default:
        return <div>{number}秒</div>
    }
  }

  return (
    <Timer startTime='2021-10-11 12:00:01' endTime='2021-10-12 2:00:40' renderItem={renderItem} />
  )
}

export default Demo
```
`renderItem`可以自定义时间每一项渲染内容
