
## 🔨 Taro项目使用示例

安装依赖

```bash
yarn add @xrkmm/ui-taro @xrkmm/icons
```

再入口scss文件中，引用样式
```css
@import '~@xrkmm/ui-taro/styles/index';
@import '~@xrkmm/icons/style';
```

使用组件
```jsx
import { Button } from '@xrkmm/ui-taro'

const App = () => (
  <Button />
)
```

<br />
<br />
<br />

## 🔨 React项目中使用示例

安装依赖
```bash
yarn add @xrkmm/ui-h5 @xrkmm/icons
```

使用组件
```jsx
import { Button } from '@xrkmm/ui-h5'
import '@xrkmm/ui-h5/dist/styles/base.css'
import '@xrkmm/ui-h5/dist/styles/index.mini.css'

const App = () => (
  <Button />
)
```
