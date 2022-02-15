const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<h1>组件md文件编写规范</h1>
<h3>命名规范</h3>
<p>必须是英文开头，小驼峰。使用markdown语法</p>
<h3>系统命名</h3>
<ul>
<li><a href="http://props.md">props.md</a> 组件的属性说明文件，如果组件存在演示例子，在 <a href="http://props.md">props.md</a> 内容中需要使用 <code><span class="hljs-section">&lt;demo/&gt;</span></code>插入演示内容。</li>
</ul>
<h3>例子</h3>
<pre><code class="hljs language-tsx"><span class="hljs-comment">// 目录</span>
demo
├── props.<span class="hljs-property">md</span> <span class="hljs-comment">// 组件属性说明文件</span>
└── basis.<span class="hljs-property">md</span> <span class="hljs-comment">// 组件演示离职文件</span>
</code></pre>
<p><a href="http://props.md">props.md</a></p>
<pre><code class="hljs"><span class="hljs-comment"># 测试卡片组件 Card</span>
// 注意：props.md 第一个标题将用于文档菜单名称

<span class="hljs-variable">&lt;demo&gt;</span>
// 注意：<span class="hljs-variable">&lt;demo&gt;</span>用来插入演示组件例子代码

<span class="hljs-comment">## Props</span>
|<span class="hljs-string"> 属性 </span>|<span class="hljs-string"> 说明 </span>|<span class="hljs-string"> 类型 </span>|<span class="hljs-string"> 默认值
</span>|<span class="hljs-string"> --- </span>|<span class="hljs-string"> --- </span>|<span class="hljs-string"> --- </span>|<span class="hljs-string"> --- </span>|
|<span class="hljs-string"> title</span>|<span class="hljs-string"> 标题 </span>|<span class="hljs-string"> \`string\` </span>|<span class="hljs-string"> </span>|


<span class="hljs-comment"># Event</span>
|<span class="hljs-string"> 属性 </span>|<span class="hljs-string"> 说明 </span>|<span class="hljs-string"> 类型 </span>|<span class="hljs-string"> 默认值 </span>|
|<span class="hljs-string"> --- </span>|<span class="hljs-string"> --- </span>|<span class="hljs-string"> --- </span>|<span class="hljs-string"> --- </span>|
|<span class="hljs-string"> onClick </span>|<span class="hljs-string"> 点击事件 </span>|<span class="hljs-string"> null </span>|<span class="hljs-string"> </span>|

</code></pre>
<p><a href="http://basis.md">basis.md</a></p>
<pre><code class="hljs"><span class="hljs-comment">## 基本用法</span>

\\\`\`\`<span class="language-javascript">tsx
<span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Card</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@xrkmm/ui&#x27;</span>

<span class="hljs-keyword">const</span> <span class="hljs-title class_">CardDemo</span>: <span class="hljs-title class_">React</span>.<span class="hljs-property">FC</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [title, setTitle] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;我是卡片&#x27;</span>)

  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setTitle</span>(<span class="hljs-string">&#x27;我是卡片&#x27;</span> + <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>())
  }

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span> /&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">CardDemo</span>
\\</span>\`\`\`

这是一个普通的卡片，具有标题和点击事件
</code></pre>
<h3>生成文档预览</h3>
<img style="width:100%" src="https://assets.xrkmm.cn/u/4000002499670412/bbbe7e74-8a6d-4348-a742-cf26559999b2.png">
`,
      }}
    />
  )
}

export default Page
