---header
sort: 1
---

### 代码演示

```tsx
import { Skeleton } from "@xrkmm/ui-h5";

const Demo: React.FC = () => {
  return (
    <Skeleton>
      <Skeleton.Item
        height={690}
        width={690}
        top={30}
      />
      <Skeleton.Item height={106} />
      <Skeleton.Item height={46}  />
      <Skeleton.Item />
    </Skeleton>
  );
};

export default Demo;
```

直接使用`Skeleton`和`Skeleton.Item`组件
