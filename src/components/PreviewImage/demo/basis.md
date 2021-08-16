---header
sort: 1
---
### 代码实例

```tsx
import { previewImage, Button } from "@xrkmm/ui-h5"

const Demo: React.FC = () => {

  const onPreviewImage = () => {
    previewImage({
      current: 'https://t7.baidu.com/it/u=801209673,1770377204&fm=193&f=GIF',
      urls: [
        'https://t7.baidu.com/it/u=3713375227,571533122&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=2235903830,1856743055&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=801209673,1770377204&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=1635608122,693552335&fm=193&f=GIF'
      ]
    })
  }

  return (
    <Button onClick={onPreviewImage} >
      点击查看图片列表
    </Button>
  );
};

export default Demo;
```
直接调用API预览图片，`current`不是必传参数。
