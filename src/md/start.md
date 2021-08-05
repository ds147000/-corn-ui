### 📦 安装
因为UI库是基于 `tarojs/components` 的演示开发的，所有也需要安装 `@tarojs/components-react`。但是只是简单引入其css表。不会使用其他组件代码。

```bash
npm install @xrkmm/ui  @tarojs/components-react
```

```bash
yarn add @xrkmm/ui @tarojs/components-react
```

## 引入固定样式文档
```tsx
import '@tarojs/components-react/dist/index.css'
```

## 🔨 Taro使用示例

```jsx
import { Card } from '@xrkmm/ui'

const App = () => (<Card />)
```

引入scss样式：

```jsx
import '@xrkmm/ui/dist/styles/index.scss'
```

按需引入scss样式：

```jsx
import '@xrkmm/ui/dist/styles/components/card.scss'
```

## 🔨 单纯React项目中使用示例

```jsx
import { Card } from '@xrkmm/ui/dist-h5'

const App = () => (
  <Card />
)
```

引入scss样式：

```jsx
import '@xrkmm/ui/dist/styles/index.scss'
```

或者引入css样式（编译后样式文件）：

```jsx
import '@xrkmm/ui/dist/xrkmm.mini.css'
```
