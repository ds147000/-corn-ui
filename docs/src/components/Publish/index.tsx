const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<h1>参与代码贡献说明</h1>
<h2>⌨️ 本地开发</h2>
<p>1.clone 项目</p>
<p>2.开发模式
<code><span class="hljs-attribute">yarn dev</span></code></p>
<p>3.启动小程序预览例子
<code><span class="hljs-attribute">yarn</span> pre:weapp</code></p>
<p>4.启动h5例子
<code><span class="hljs-attribute">yarn</span> pre:h<span class="hljs-number">5</span></code></p>
<p>5.编译结果
<code>yarn buidl:<span class="hljs-keyword">all</span></code></p>
<h2>📁 项目结构说明</h2>
<pre><code class="hljs">xrkmm-cli
├── build
├── <span class="hljs-built_in">example</span>
├── <span class="hljs-built_in">example</span>-react
└── src
    ├── assets
    ├── <span class="hljs-built_in">components</span>
    |     └── <span class="hljs-built_in">demo</span>
    ├── config
    ├── styles
    └── utils
</code></pre>
<ul>
<li>
<p><code><span class="hljs-attribute">build</span></code> 编译配置文件，rollup的编译h5端,小程序端,css端的配置文件</p>
</li>
<li>
<p><code><span class="hljs-attribute">exapmple-weapp</span></code> 小程序demo，用于实时调试自己编写组件效果</p>
</li>
<li>
<p><code><span class="hljs-attribute">exapmple-react</span></code> 浏览器端demo，用于实时调试编写端组件浏览器效果，是否与小程序端保持一致。</p>
</li>
<li>
<p><code><span class="hljs-attribute">src</span></code> 组件源码</p>
</li>
<li>
<p><code><span class="hljs-attribute">src</span>/assets</code> 静态资源文件夹，组件的媒体组件存放初。注意：组件引用的媒体资源应该尽量使用css引入使用。</p>
</li>
<li>
<p><code><span class="hljs-attribute">src</span>/components</code> 组件源码，注意此处只能存放js源码，scss样式文件应该在<code><span class="hljs-attribute">styles</span></code>中</p>
</li>
<li>
<p><code>src<span class="hljs-regexp">/components/</span>demo</code> 组件的使用说明文件，markdown语法。用于生成在线文档。</p>
</li>
<li>
<p><code>src/config</code> 配置</p>
</li>
<li>
<p><code><span class="hljs-attribute">src</span>/styles</code> 组件样式文件，为了方便外部主题的修改和css按需使用。所有的组件样式都是存放在此</p>
</li>
<li>
<p><code><span class="hljs-attribute">src</span>/utils</code> 工具模块</p>
</li>
</ul>
<h2>📖 组件开发规范</h2>
<ul>
<li>每个文件中只能存在一个组件（包括状态和无状态）</li>
<li>组件目录必须存在<code><span class="hljs-attribute">demo</span></code>文件夹，存放组件使用说明的<code><span class="hljs-built_in">md</span></code>文件。<a href="/md">组件md文件编写规范</a></li>
</ul>
<pre><code class="hljs language-tsx"><span class="hljs-comment">// 组件目录说明</span>
Card
├── demo
      ├── props.md <span class="hljs-comment">// 组件属性说明文件</span>
      └── basis.md <span class="hljs-comment">// 组件演示离职文件</span>
├── index.tsx
</code></pre>
<h2>🔨 使用条件编译代码</h2>
<pre><code class="hljs language-js">  <span class="hljs-comment">// #if _APP === &#x27;weapp&#x27;</span>
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;我是taro环境&#x27;</span>)
  <span class="hljs-comment">// #else</span>
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;我是纯h5环境&#x27;</span>)
  <span class="hljs-comment">// #endif</span>
</code></pre>
<h2>PR标准</h2>
<ul>
<li>🚗 单元测试覆盖率必须 100%</li>
<li>🕹 必须满足<code><span class="hljs-attribute">eslint</span></code>，<code><span class="hljs-attribute">stylelint</span></code>检测</li>
<li>🏍 所有组件必须存在<code><span class="hljs-built_in">md</span>使用说明文件</code>和<code><span class="hljs-attribute">props</span></code>注释说明。因为后续我们将生成在线文档站点</li>
</ul>
`,
      }}
    />
  )
}

export default Page
