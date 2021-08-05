const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://assets.xrkmm.cn/u/3202028/f7ae6e50-7336-4233-aa44-ee9f2d2e83dc.png">
  </a>
</p>
<h1 align="center">向日葵妈妈 UI</h1>
<div align="center">
<p>一套企业级 UI 和 支持React、Taro小程序的组件库。</p>
</div>
<h2>✨ 特性</h2>
<ul>
<li>🌈 提炼自企业级移动端产品的交互语言和视觉风格。</li>
<li>📦 开箱即用的高质量组件。</li>
<li>🛡 使用 TypeScript 开发，提供完整的类型定义文件。</li>
<li>⚙️ 无缝切换支持小程序</li>
<li>🎨 深入每个细节的主题定制能力。</li>
</ul>
<h2>🖥 兼容环境</h2>
<ul>
<li>现代浏览器和 IE11（需要 <a href="https://ant.design/docs/react/getting-started-cn#%E5%85%BC%E5%AE%B9%E6%80%A7">polyfills</a>）。</li>
<li>支持服务端渲染。</li>
</ul>
<table>
<thead>
<tr>
<th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></a><br>IE / Edge</th>
<th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></a><br>Firefox</th>
<th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /></a><br>Chrome</th>
<th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></a><br>Safari</th>
<th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" /></a><br>Electron</th>
</tr>
</thead>
<tbody>
<tr>
<td>IE11, Edge</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
</tr>
</tbody>
</table>
`,
      }}
    />
  )
}

export default Page
