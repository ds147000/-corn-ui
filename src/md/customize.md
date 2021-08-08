## 自定义主题和按需加载样式

##### 因为自定义样式需要引入 `scss` 文件，所以需要安装 `sass-loader` `sass` 和 `postcss-pxtransform` 插件把 px 单位转换为 `rem` 。

1. 安装 `sass`
```bash
npm i -D sass sass-loader
```

2. 安装 `postcss-pxtransform`
```bash
npm i -D postcss-pxtransform
```

3. 配置`webpack`
```js
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009'
            },
            stage: 3
          }),
          require('postcss-pxtransform')({
            platform: 'h5',
            designWidth: 750, // 设计图尺寸
            deviceRatio: {
              640: 2.34 / 2,
              750: 1,
              828: 1.81 / 2
            }
          })
        ]
      },
    }
```



## 修改主题色调
```tsx
// 引入自定义主题
import './custom.scss'
```

```scss
// custrom.scss
@import '@xrkmm/ui-h5/styles/index.scss';
@import './variables.scss'
```

```scss
// variables.scss
// 页面边距
$btnMargin: 7.5px;

// 品牌色
$primary: #000;

// 橙色标签底色
$warn: #fff0e5;

// 警告色，面性按钮，高亮字体颜色如价格
$error: #ff6d00;

$white: #fff;

// 背景色
$bg: #f9fafd;

// 禁用色
$disable: #dde0e4;

// 占位图图标色值（灰底）
$placeholder: #ebeef6;

// 链接颜色
$link: #00a9ff;

// 提醒我按钮底色
$pop: #00ce73;

// 背景颜色
$bg: #f6f7fb;

// 一级文字色值，重要基础icon色值
$text1: #242629;

// 二级文字色值
$text2: #818894;

// 三级文字色值，搜索框未输入状态提示文字
$text3: #b3b8bf;

// 二级基础控件icon色值
$icon1: #567;

// 三级基础控件icon色值，选择框icon，输入框删除icon，普通内容卡片跳转箭头
$icon2: #99a3ad;

// 四级基础控件icon色值，最弱层级
$icon3: #ccd1d6;

// toast 颜色
$toastBg: rgba(0 , 0 , 0 , 0.7);

// 遮罩层颜色
$mask: rgba(0 , 0 , 0 , 0.7);

// 层级
$portalIndex: 900;
$maskIndex: 900;
$SlidInIndex: 901;

// 角度
$radius: 15px;
```

## 按需引入样式
```tsx
import '@xrkmm/ui-h5/styles/components/Button.scss'
```
