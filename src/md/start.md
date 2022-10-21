
## 🔨 Taro项目使用示例

安装依赖

```bash
yarn add corn-taro corn-cons
```

再入口scss文件中，引用样式
```css
@import '~corn-taro/styles/index';
@import '~corn-cons/style';
```

使用组件
```jsx
import { Button } from 'corn-taro'

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
yarn add corn-h5 corn-cons
```

使用组件
```jsx
import { Button } from 'corn-h5'
import 'corn-h5/dist/styles/base.css'
import 'corn-h5/dist/styles/index.mini.css'

const App = () => (
  <Button />
)
```

## 使用375单位规范的UI组件
```css
/** @import '~corn-taro/styles/index'; */
/** 替换引入 */
@import '~corn-taro/styles-375/index'
```
