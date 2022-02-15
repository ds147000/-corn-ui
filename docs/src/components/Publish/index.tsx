const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<h1>参与代码贡献说明</h1>
<h2>⌨️ 本地开发</h2>
<p>h5预览开发模式</p>
<pre><code class="hljs language-bash">yarn dev:h5
</code></pre>
<p>Taro预览开发模式</p>
<pre><code class="hljs language-bash">yarn dev:taro
</code></pre>
<p>编译Icon库</p>
<pre><code class="hljs language-bash">yarn dev:icon
</code></pre>
<p>文档开发模式</p>
<pre><code class="hljs language-bash">yarn dev:doc
</code></pre>
<p>编译构建UI库和UI文档</p>
<pre><code class="hljs language-bash">yarn buidl:all
</code></pre>
<p>一键发布组件库</p>
<pre><code class="hljs language-bash">yarn pub
<span class="hljs-comment"># or</span>
npm run pub
</code></pre>
<br />
<br />
<h2>📁 项目结构说明</h2>
<pre><code class="hljs">XRKMM_UI
├── build
├── docs
├── <span class="hljs-built_in">example</span>-weapp
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
<p><code><span class="hljs-attribute">build</span></code> rollup编译配置文件，rollup的编译h5端,小程序端,css端的配置文件</p>
</li>
<li>
<p><code><span class="hljs-attribute">exapmple-weapp</span></code> 小程序预览demo，用于实时调试自己编写组件效果</p>
</li>
<li>
<p><code><span class="hljs-attribute">exapmple-react</span></code> 浏览器端预览demo，用于实时调试编写端组件浏览器效果，是否与小程序端保持一致。</p>
</li>
<li>
<p><code>src/assets</code> UI静态资源文件夹，组件的媒体组件存放。注意：组件引用的媒体资源应该尽量使用css引入使用。</p>
</li>
<li>
<p><code>src/components</code> 组件源码，注意此处只能存放js源码，scss样式文件应该在<code><span class="hljs-attribute">styles</span></code>中</p>
</li>
<li>
<p><code>src<span class="hljs-regexp">/components/</span>demo</code> 组件的使用说明文件，markdown语法。用于生成在线文档。</p>
</li>
<li>
<p><code>src/styles</code> 组件样式文件，为了方便外部主题的修改和css按需使用。所有的组件样式都是存放在此</p>
</li>
<li>
<p><code>src/config</code> 公共变量配置</p>
</li>
<li>
<p><code>src/utils</code> 工具模块</p>
</li>
</ul>
<br />
<br />
<h2>📖 组件开发规范</h2>
<ul>
<li>每个文件中只能存在一个组件（包括状态和无状态）</li>
<li>组件目录必须存在<code><span class="hljs-attribute">demo</span></code>文件夹，存放组件说明的<code><span class="hljs-built_in">md</span></code>文件。<a href="./COMPONENT.md">组件md文件编写规范</a>。用于生产UI在线说明文档。</li>
</ul>
<pre><code class="hljs language-tsx"><span class="hljs-comment">// 组件目录说明</span>
<span class="hljs-title class_">Card</span>
├── demo
|    ├── props.<span class="hljs-property">md</span> <span class="hljs-comment">// 组件属性说明文件</span>
|    └── basis.<span class="hljs-property">md</span> <span class="hljs-comment">// 组件使用例子文件</span>
├── index.<span class="hljs-property">tsx</span>
</code></pre>
<pre><code class="hljs language-css"><span class="hljs-comment">/** 对应Card组件样式文件 */</span>
styles
├── Card
|    └── style<span class="hljs-selector-class">.scss</span>
</code></pre>
<br />
<br />
<h2>🔨 使用条件代码</h2>
<p>因为UI库会同时编译成<code><span class="hljs-attribute">Taro</span></code>端、<code><span class="hljs-attribute">React</span></code>端两端代码，所以部分API需要做环境兼容处理，我们可以通过注释方式来做条件编译。</p>
<pre><code class="hljs language-js">  <span class="hljs-comment">// #if _APP === &#x27;weapp&#x27;</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;只会打包在Taro端代码包中&#x27;</span>)
  <span class="hljs-comment">// #else</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;只会打包在React端代码包中&#x27;</span>)
  <span class="hljs-comment">// #endif</span>
</code></pre>
<br />
<br />
<h2>🐼 @xrkmm/icons 图标库开发</h2>
<p>新增图标只有放入 <code>src<span class="hljs-regexp">/assets/i</span>cons</code> 文件夹中即可，编译命令<code>yarn <span class="hljs-keyword">build</span>:<span class="hljs-keyword">all</span></code> 会自动生成icons库</p>
<br />
<br />
<h2>PR标准</h2>
<ul>
<li>🚗 单元测试覆盖率必须 100%</li>
<li>🕹 必须满足<code><span class="hljs-attribute">eslint</span></code>，<code><span class="hljs-attribute">stylelint</span></code>检测</li>
<li>🏍 所有组件必须存在<code><span class="hljs-built_in">md</span>使用说明文件</code>和<code><span class="hljs-attribute">props</span></code>注释说明。</li>
</ul>
<br />
<br />
<h2>编译结果说明</h2>
<pre><code class="hljs language-bash">XRKMM_UI
├── package-h5      <span class="hljs-comment"># @xrkmm/ui-h5 编译结果</span>
├── package-weapp   <span class="hljs-comment"># @xrkmm/ui-taro 编译结果</span>
├── package-icons   <span class="hljs-comment"># @xrkmm/icons 编译结果</span>
└── docs/build      <span class="hljs-comment"># 在线文档编译结果</span>
</code></pre>
`,
      }}
    />
  )
}

export default Page
