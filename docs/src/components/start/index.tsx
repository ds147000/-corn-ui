const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<h2>🔨 Taro项目使用示例</h2>
<p>安装依赖</p>
<pre><code class="hljs language-bash">yarn add @xrkmm/ui-taro @xrkmm/icons
</code></pre>
<p>再入口scss文件中，引用样式</p>
<pre><code class="hljs language-css"><span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;~@xrkmm/ui-taro/styles/index&#x27;</span>;
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;~@xrkmm/icons/style&#x27;</span>;
</code></pre>
<p>使用组件</p>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@xrkmm/ui-taro&#x27;</span>

<span class="hljs-keyword">const</span> <span class="hljs-title function_">App</span> = (<span class="hljs-params"></span>) =&gt; (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span></span>
)
</code></pre>
<br />
<br />
<br />
<h2>🔨 React项目中使用示例</h2>
<p>安装依赖</p>
<pre><code class="hljs language-bash">yarn add @xrkmm/ui-h5 @xrkmm/icons
</code></pre>
<p>使用组件</p>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@xrkmm/ui-h5&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@xrkmm/ui-h5/dist/styles/base.css&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@xrkmm/ui-h5/dist/styles/index.mini.css&#x27;</span>

<span class="hljs-keyword">const</span> <span class="hljs-title function_">App</span> = (<span class="hljs-params"></span>) =&gt; (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span></span>
)
</code></pre>
`,
      }}
    />
  )
}

export default Page
