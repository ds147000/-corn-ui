---header
sort: 4
---

### 单选模式

```tsx
import { Checkbox, Card, CheckboxGroup } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Card>
        <CheckboxGroup radio >
          <Checkbox value="1" >单选模式1</Checkbox>
          <Checkbox value="2" >单选模式2</Checkbox>
          <Checkbox value="3" >单选模式3</Checkbox>
          <Checkbox value="4" >单选模式4</Checkbox>
        </CheckboxGroup>
      </Card>
      <Card>
        <CheckboxGroup radio >
          <Checkbox value="1" type="button" >单选模式1</Checkbox>
          <Checkbox value="2" type="button" >单选模式2</Checkbox>
          <Checkbox value="3" type="button" >单选模式3</Checkbox>
          <Checkbox value="4" type="button" >单选模式4</Checkbox>
        </CheckboxGroup>
      </Card>
    </>
  )
}

export default Demo
```
开启`radio`属性可以开启单选模式
