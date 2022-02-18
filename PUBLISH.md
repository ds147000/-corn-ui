# 参与代码贡献说明

## ⌨️ 本地开发

h5预览开发模式
```bash
yarn dev:h5
```

Taro预览开发模式
```bash
yarn dev:taro
```

编译Icon库
```bash
yarn dev:icon
```

文档开发模式
```bash
yarn dev:doc
```

编译构建UI库和UI文档
```bash
yarn buidl:all
```

一键发布组件库
```bash
npm run pub
```

<br />
<br />

## 📁 项目结构说明
```
XRKMM_UI
├── build
├── docs
├── example-weapp
├── example-react
└── src
    ├── assets
    ├── components
    |     └── demo
    ├── config
    ├── styles
    └── utils
```
 - `build` rollup编译配置文件，rollup的编译h5端,小程序端,css端的配置文件

 - `exapmple-weapp` 小程序预览demo，用于实时调试自己编写组件效果

 - `exapmple-react` 浏览器端预览demo，用于实时调试编写端组件浏览器效果，是否与小程序端保持一致。

 - `src/assets` UI静态资源文件夹，组件的媒体组件存放。注意：组件引用的媒体资源应该尽量使用css引入使用。

 - `src/components` 组件源码，注意此处只能存放js源码，scss样式文件应该在`styles`中

 - `src/components/demo` 组件的使用说明文件，markdown语法。用于生成在线文档。

 - `src/styles` 组件样式文件，为了方便外部主题的修改和css按需使用。所有的组件样式都是存放在此

 - `src/config` 公共变量配置

 - `src/utils` 工具模块

<br />
<br />

## 📖 组件开发规范
 - 每个文件中只能存在一个组件（包括状态和无状态）
 - 组件目录必须存在`demo`文件夹，存放组件说明的`md`文件。[组件md文件编写规范](./COMPONENT.md)。用于生产UI在线说明文档。


```tsx
// 组件目录说明
Card
├── demo
|    ├── props.md // 组件属性说明文件
|    └── basis.md // 组件使用例子文件
├── index.tsx
```
```css
/** 对应Card组件样式文件 */
styles
├── Card
|    └── style.scss
```

<br />
<br />

## 🔨 使用条件编译代码
因为UI库会同时编译成`Taro`端、`React`端两端代码，所以部分API需要做环境兼容处理，我们可以通过注释方式来做条件编译。

```js
  // #if _APP === 'weapp'
  console.log('只会打包在Taro端代码包中')
  // #else
  console.log('只会打包在React端代码包中')
  // #endif
```
<br />
<br />

## 🐼 @xrkmm/icons 图标库开发
新增图标只有放入 `src/assets/icons` 文件夹中即可，编译命令`yarn build:all` 会自动生成icons库

<br />
<br />


## PR标准
 - 🚗 单元测试覆盖率必须 100%
 - 🕹 必须满足`eslint`，`stylelint`检测，`lint`规则来自于 [eslint-plugin-xrkmm](https://codeup.aliyun.com/xrkmm/xrk-front/xrkmm/tree/master/packages/eslint) 和 [stylelint-plugin-xrkmm](https://codeup.aliyun.com/xrkmm/xrk-front/xrkmm/tree/master/packages/stylelint)
 - 🏍 所有组件必须存在`md使用说明文件`和`props`注释说明。

<br />
<br />

## 编译结果说明
``` bash
XRKMM_UI
├── package-h5      # @xrkmm/ui-h5 编译结果
├── package-weapp   # @xrkmm/ui-taro 编译结果
├── package-icons   # @xrkmm/icons 编译结果
└── docs/build      # 在线文档编译结果
```

