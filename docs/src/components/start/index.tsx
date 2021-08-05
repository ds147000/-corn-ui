const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<h3>📦 安装</h3>
<p>因为UI库是基于 <code>tarojs/<span class="hljs-built_in">components</span></code> 的演示开发的，所有也需要安装 <code><span class="hljs-meta">@tarojs</span>/components-react</code>。但是只是简单引入其css表。不会使用其他组件代码。</p>
<pre><code class="hljs language-bash">npm install @xrkmm/ui  @tarojs/components-react
</code></pre>
<pre><code class="hljs language-bash">yarn add @xrkmm/ui @tarojs/components-react
</code></pre>
<h2>引入固定样式文档</h2>
<pre><code class="hljs language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@tarojs/components-react/dist/index.css&#x27;</span>
</code></pre>
<h2>🔨 Taro使用示例</h2>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> { Card } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@xrkmm/ui&#x27;</span>

<span class="hljs-keyword">const</span> App = <span class="hljs-function">() =&gt;</span> (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Card</span> /&gt;</span></span>)
</code></pre>
<p>引入scss样式：</p>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@xrkmm/ui/dist/styles/index.scss&#x27;</span>
</code></pre>
<p>按需引入scss样式：</p>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@xrkmm/ui/dist/styles/components/card.scss&#x27;</span>
</code></pre>
<h2>🔨 单纯React项目中使用示例</h2>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> { Card } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@xrkmm/ui/dist-h5&#x27;</span>

<span class="hljs-keyword">const</span> App = <span class="hljs-function">() =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Card</span> /&gt;</span></span>
)
</code></pre>
<p>引入scss样式：</p>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@xrkmm/ui/dist/styles/index.scss&#x27;</span>
</code></pre>
<p>或者引入css样式（编译后样式文件）：</p>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@xrkmm/ui/dist/xrkmm.mini.css&#x27;</span>
</code></pre>
`,
      }}
    />
  )
}

export default Page
