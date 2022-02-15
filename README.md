<!--
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-10 18:57:24
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-11 14:08:32
-->
<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://assets.xrkmm.cn/u/3202028/f7ae6e50-7336-4233-aa44-ee9f2d2e83dc.png">
  </a>
</p>

<h1 align="center">向日葵妈妈 UI</h1>

<div align="center">

一套企业级 UI 和 支持React、Taro小程序的组件库。

</div>

## ✨ 特性

- 🌈 提炼自企业级移动端产品的交互语言和视觉风格。
- 📦 开箱即用的高质量组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 无缝切换支持小程序
- 🎨 深入每个细节的主题定制能力。

## 🖥 兼容环境

- 现代浏览器和 IE11（需要 [polyfills](https://ant.design/docs/react/getting-started-cn#兼容性)）。
- 支持服务端渲染。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


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


### 🌈 定制主题和按需加载样式

参考 [定制主题](http://ui.mamakt.cn/basis/Customize) 文档。



## 🤝 参与共建 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

请参考[贡献指南](./Publish.md).

## 🔗 案例链接
[向日葵妈妈](https://m.xrkmm.com/)
向日葵妈妈学院plus 小程序
