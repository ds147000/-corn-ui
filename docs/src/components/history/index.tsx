const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<h1>0.0.13</h1>
<ul>
<li>添加 <code><span class="hljs-attribute">Tgb</span></code></li>
</ul>
<h1>0.0.12</h1>
<ul>
<li>添加 <code><span class="hljs-literal">Tab</span></code></li>
</ul>
<h1>0.0.11</h1>
<ul>
<li>添加 <code><span class="hljs-attribute">Money</span></code></li>
<li>添加 <code><span class="hljs-attribute">Image</span></code></li>
<li>添加 <code><span class="hljs-attribute">previewImage</span></code></li>
</ul>
<h1>0.0.9</h1>
<ul>
<li>添加 <code><span class="hljs-attribute">Empty</span></code></li>
</ul>
<h1>0.0.8</h1>
<ul>
<li>添加 <code><span class="hljs-attribute">Icon</span></code></li>
</ul>
<h1>0.0.6</h1>
<ul>
<li>添加 <code><span class="hljs-attribute">Modal</span></code></li>
</ul>
<h1>0.0.5-alpha2</h1>
<ul>
<li>添加 <code><span class="hljs-selector-tag">Button</span></code></li>
<li>添加 <code><span class="hljs-attribute">Actionsheet</span></code></li>
<li>添加 <code><span class="hljs-attribute">Drawer</span></code></li>
<li>添加 <code><span class="hljs-attribute">Toast</span></code></li>
<li>优化构建，支持webpack自动化esm构建引入。优化依赖树，实现按需编译组件</li>
</ul>
`,
      }}
    />
  )
}

export default Page
