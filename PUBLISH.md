<!--
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-10 19:47:51
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-11 15:02:45
-->
# 参与代码贡献说明

## ⌨️ 本地开发

1.clone 项目

2.开发模式
 ``` yarn dev ```

3.启动小程序预览例子
```yarn demo:weapp```

4.启动h5例子
```yarn demo:h5```

5.编译结果
```yarn buidl:all```

## 📁 项目结构说明
```
xrkmm-cli
├── build
├── example
├── example-react
└── src
    ├── assets
    ├── components
    ├── config
    ├── styles
    └── utils
```
 - `build` 编译配置文件，rollup的编译h5端,小程序端,css端的配置文件

 - `exapmple` 小程序demo，用于实时调试自己编写组件效果

 - `exapmple-react` 浏览器端demo，用于实时调试编写端组件浏览器效果，是否与小程序端保持一致。

 - `src` 组件源码

 - `src/assets` 静态资源文件夹，组件的媒体组件存放初。注意：组件引用的媒体资源应该尽量使用css引入使用。

 - `src/components` 组件源码，注意此处只能存放js源码，scss样式文件应该在`styles`中

 - `src/config` 配置

 - `src/styles` 组件样式文件，为了方便外部主题的修改和css按需使用。所有的组件样式都是存放在此

 - `src/utils` 工具模块

## 🔨 使用条件编译代码
```js
  // #if _APP === 'weapp'
  console.log('我是taro环境')
  // #else
  console.log('我是纯h5环境')
  // #endif
```

## PR标准
 - 🚗 单元测试覆盖率必须 100%
 - 🕹 必须满足`eslint`，`stylelint`检测
 - 🏍 所有组件必须存在`md使用说明文件`和`props`注释说明。因为后续我们将生成在线文档站点

