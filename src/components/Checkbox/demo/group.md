---header
sort: 3
---

### checkBox组

```tsx
import { Checkbox, Toast, Card, CheckboxGroup } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {
  const onChange = (check:string[]) => Toast.show(check.join(','))

  return (
    <Card>
        <CheckboxGroup onChange={onChange}>
          <Checkbox value="1">联合复选框1</Checkbox>
          <Checkbox value="2">联合复选框4</Checkbox>
          <Checkbox value="3">联合复选框3</Checkbox>
          <Checkbox value="4">联合复选框2</Checkbox>
        </CheckboxGroup>
      </Card>
  )
}

export default Demo
```
CheckboxGroup 内嵌 Checkbox ，可以实现灵活的布局。


