const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<h2>🔨 Taro使用示例</h2>
<p>⚠️注意，需要登录公司内部npm才可以拉取安装。</p>
<pre><code class="hljs language-bash">yarn add @xrkmm/ui-taro
</code></pre>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@xrkmm/ui-taro&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@xrkmm/ui-taro/dist/styles/index.scss&#x27;</span>

<span class="hljs-keyword">const</span> App = <span class="hljs-function">() =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span></span>
)
</code></pre>
<br />
<h2>🔨 单纯React项目中使用示例</h2>
<pre><code class="hljs language-bash">yarn add @xrkmm/ui-h5
</code></pre>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@xrkmm/ui-h5&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@xrkmm/ui-h5/dist/styles/base.css&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@xrkmm/ui-h5/dist/styles/index.mini.css&#x27;</span>

<span class="hljs-keyword">const</span> App = <span class="hljs-function">() =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span></span>
)
</code></pre>
<h3>🌈 定制主题和按需加载样式</h3>
<p>参考 <a href="/customize">定制主题</a> 文档。</p>
`,
      }}
    />
  )
}

export default Page
