const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<h1>1.0.0</h1>
<ul>
<li>发布1.0.0</li>
</ul>
<h1>0.7.22</h1>
<ul>
<li>增加 <code><span class="hljs-keyword">Search</span></code> 组件</li>
</ul>
<h1>0.1.98</h1>
<ul>
<li>增加<code><span class="hljs-selector-tag">Form</span></code>组件</li>
<li>增加<code><span class="hljs-selector-tag">Input</span></code>组件</li>
</ul>
<h1>0.0.48</h1>
<ul>
<li>优化组件包体积和结构</li>
</ul>
<h1>0.0.41</h1>
<ul>
<li>添加checkbox组件</li>
</ul>
<h1>0.0.30</h1>
<ul>
<li>修复部分bug</li>
</ul>
<h1>0.0.19</h1>
<ul>
<li>增加 <code><span class="hljs-attribute">Cell</span></code> 组件</li>
<li>增加 <code><span class="hljs-attribute">Link</span></code> 组件</li>
<li><code><span class="hljs-selector-tag">Button</span></code> 和 <code><span class="hljs-literal">Tab</span></code> 支持 <code><span class="hljs-attribute">href</span></code> 属性</li>
</ul>
<h1>0.0.16</h1>
<ul>
<li>增加 <code><span class="hljs-attribute">Timer</span></code> 组件</li>
<li>增加工具方法 <code><span class="hljs-attribute">fixNumber</span></code> <code><span class="hljs-attribute">DateToTimestamp</span></code></li>
</ul>
<h1>0.0.15</h1>
<ul>
<li>修复 <code><span class="hljs-attribute">Affix</span></code> 小程序端bug</li>
</ul>
<h1>0.0.14</h1>
<ul>
<li>添加 <code><span class="hljs-attribute">Affix</span></code></li>
</ul>
<h1>0.0.13</h1>
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
