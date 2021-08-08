const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<h2>自定义主题和按需加载样式</h2>
<h5>因为自定义样式需要引入 <code><span class="hljs-attribute">scss</span></code> 文件，所以需要安装 <code><span class="hljs-attribute">sass-loader</span></code> <code><span class="hljs-attribute">sass</span></code> 和 <code><span class="hljs-attribute">postcss-pxtransform</span></code> 插件把 px 单位转换为 <code><span class="hljs-comment">rem</span></code> 。</h5>
<ol>
<li>安装 <code><span class="hljs-attribute">sass</span></code></li>
</ol>
<pre><code class="hljs language-bash">npm i -D sass sass-loader
</code></pre>
<ol start="2">
<li>安装 <code><span class="hljs-attribute">postcss-pxtransform</span></code></li>
</ol>
<pre><code class="hljs language-bash">npm i -D postcss-pxtransform
</code></pre>
<ol start="3">
<li>配置<code><span class="hljs-attribute">webpack</span></code></li>
</ol>
<pre><code class="hljs language-js">    {
      <span class="hljs-attr">loader</span>: <span class="hljs-built_in">require</span>.resolve(<span class="hljs-string">&#x27;postcss-loader&#x27;</span>),
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">ident</span>: <span class="hljs-string">&#x27;postcss&#x27;</span>,
        <span class="hljs-attr">plugins</span>: <span class="hljs-function">() =&gt;</span> [
          <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;postcss-flexbugs-fixes&#x27;</span>),
          <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;postcss-preset-env&#x27;</span>)({
            <span class="hljs-attr">autoprefixer</span>: {
              <span class="hljs-attr">flexbox</span>: <span class="hljs-string">&#x27;no-2009&#x27;</span>
            },
            <span class="hljs-attr">stage</span>: <span class="hljs-number">3</span>
          }),
          <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;postcss-pxtransform&#x27;</span>)({
            <span class="hljs-attr">platform</span>: <span class="hljs-string">&#x27;h5&#x27;</span>,
            <span class="hljs-attr">designWidth</span>: <span class="hljs-number">750</span>, <span class="hljs-comment">// 设计图尺寸</span>
            <span class="hljs-attr">deviceRatio</span>: {
              <span class="hljs-number">640</span>: <span class="hljs-number">2.34</span> / <span class="hljs-number">2</span>,
              <span class="hljs-number">750</span>: <span class="hljs-number">1</span>,
              <span class="hljs-number">828</span>: <span class="hljs-number">1.81</span> / <span class="hljs-number">2</span>
            }
          })
        ]
      },
    }
</code></pre>
<h2>修改主题色调</h2>
<pre><code class="hljs language-tsx"><span class="hljs-comment">// 引入自定义主题</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;./custom.scss&#x27;</span>
</code></pre>
<pre><code class="hljs language-scss"><span class="hljs-comment">// custrom.scss</span>
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;@xrkmm/ui-h5/styles/index.scss&#x27;</span>;
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;./variables.scss&#x27;</span>
</code></pre>
<pre><code class="hljs language-scss"><span class="hljs-comment">// variables.scss</span>
<span class="hljs-comment">// 页面边距</span>
<span class="hljs-variable">$btnMargin</span>: <span class="hljs-number">7.5px</span>;

<span class="hljs-comment">// 品牌色</span>
<span class="hljs-variable">$primary</span>: <span class="hljs-number">#000</span>;

<span class="hljs-comment">// 橙色标签底色</span>
<span class="hljs-variable">$warn</span>: <span class="hljs-number">#fff0e5</span>;

<span class="hljs-comment">// 警告色，面性按钮，高亮字体颜色如价格</span>
<span class="hljs-variable">$error</span>: <span class="hljs-number">#ff6d00</span>;

<span class="hljs-variable">$white</span>: <span class="hljs-number">#fff</span>;

<span class="hljs-comment">// 背景色</span>
<span class="hljs-variable">$bg</span>: <span class="hljs-number">#f9fafd</span>;

<span class="hljs-comment">// 禁用色</span>
<span class="hljs-variable">$disable</span>: <span class="hljs-number">#dde0e4</span>;

<span class="hljs-comment">// 占位图图标色值（灰底）</span>
<span class="hljs-variable">$placeholder</span>: <span class="hljs-number">#ebeef6</span>;

<span class="hljs-comment">// 链接颜色</span>
<span class="hljs-variable">$link</span>: <span class="hljs-number">#00a9ff</span>;

<span class="hljs-comment">// 提醒我按钮底色</span>
<span class="hljs-variable">$pop</span>: <span class="hljs-number">#00ce73</span>;

<span class="hljs-comment">// 背景颜色</span>
<span class="hljs-variable">$bg</span>: <span class="hljs-number">#f6f7fb</span>;

<span class="hljs-comment">// 一级文字色值，重要基础icon色值</span>
<span class="hljs-variable">$text1</span>: <span class="hljs-number">#242629</span>;

<span class="hljs-comment">// 二级文字色值</span>
<span class="hljs-variable">$text2</span>: <span class="hljs-number">#818894</span>;

<span class="hljs-comment">// 三级文字色值，搜索框未输入状态提示文字</span>
<span class="hljs-variable">$text3</span>: <span class="hljs-number">#b3b8bf</span>;

<span class="hljs-comment">// 二级基础控件icon色值</span>
<span class="hljs-variable">$icon1</span>: <span class="hljs-number">#567</span>;

<span class="hljs-comment">// 三级基础控件icon色值，选择框icon，输入框删除icon，普通内容卡片跳转箭头</span>
<span class="hljs-variable">$icon2</span>: <span class="hljs-number">#99a3ad</span>;

<span class="hljs-comment">// 四级基础控件icon色值，最弱层级</span>
<span class="hljs-variable">$icon3</span>: <span class="hljs-number">#ccd1d6</span>;

<span class="hljs-comment">// toast 颜色</span>
<span class="hljs-variable">$toastBg</span>: rgba(<span class="hljs-number">0</span> , <span class="hljs-number">0</span> , <span class="hljs-number">0</span> , <span class="hljs-number">0.7</span>);

<span class="hljs-comment">// 遮罩层颜色</span>
<span class="hljs-variable">$mask</span>: rgba(<span class="hljs-number">0</span> , <span class="hljs-number">0</span> , <span class="hljs-number">0</span> , <span class="hljs-number">0.7</span>);

<span class="hljs-comment">// 层级</span>
<span class="hljs-variable">$portalIndex</span>: <span class="hljs-number">900</span>;
<span class="hljs-variable">$maskIndex</span>: <span class="hljs-number">900</span>;
<span class="hljs-variable">$SlidInIndex</span>: <span class="hljs-number">901</span>;

<span class="hljs-comment">// 角度</span>
<span class="hljs-variable">$radius</span>: <span class="hljs-number">15px</span>;
</code></pre>
<h2>按需引入样式</h2>
<pre><code class="hljs language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@xrkmm/ui-h5/styles/components/Button.scss&#x27;</span>
</code></pre>
`,
      }}
    />
  )
}

export default Page
