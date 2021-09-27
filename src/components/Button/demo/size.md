---header
sort: 2
---

### 多达6种的按钮大小

```tsx
import { Button } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Button size="max">max size</Button>
      <Button size="big">big size </Button>
      <Button size="large">large size </Button>
      <Button size="middle">middle size </Button>
      <Button size="small">small size </Button>
      <Button size="mini">mini size </Button>
      <Button size="max" auto >max auto </Button>
      <Button size="big" auto >big auto </Button>
      <Button size="large" auto >large auto </Button>
      <Button size="middle" auto >middle auto </Button>
      <Button size="small" auto >small auto </Button>
      <Button size="mini" auto >mini auto </Button>
    </>
  )
}

export default Demo
```
可以通过`size`属性控制按钮风格，具有五个可选属性：`max` `big` `large` `middle` `small` `mini`  ，默认为`middle`。按钮默认不开启固定宽度。如果需求可以通过`auto`属性开启
 - `max`：一个顶级最大的按钮
 - `big`：一个超大的按钮
 - `large`：一个大大的按钮
 - `middle`：中等大小的按钮，默认是这个
 - `small`：比较小的按钮
 - `mini`：迷你大小的按钮
