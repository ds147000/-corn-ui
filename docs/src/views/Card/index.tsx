/* eslint-disabled */
//
import { useState } from 'react'
import { Divider, Tooltip, Button } from 'antd'
import { CodeSandboxOutlined, CopyOutlined } from '@ant-design/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import BASIS from './demo/BASIS'

const Pgae: React.FC = () => {
  const [_BASIS, _setBASIS] = useState(false)

  return (
    <div>
      <h1>测试卡片组件</h1>

      <div className="demo-box">
        <h2>基本用法</h2>

        <div className="demo">
          <BASIS />
          <Divider orientation="left">描述</Divider>
          <p>这是一个普通的卡片，具有标题和点击事件</p>

          <div className="action-cell">
            <Tooltip title="复制代码">
              <CopyToClipboard
                text={`
import { useState } from 'react'
import { Card } from '@xrkmm/ui'

const CardDemo: React.FC = () => {
  const [title, setTitle] = useState('我是卡片')

  const onClick = () => {
    setTitle('我是卡片' + Date.now())
  }

  return (
    <Card title={title} onClick={onClick} />
  )
}

export default CardDemo
`}
              >
                <Button shape="circle" icon={<CopyOutlined />} size="small" />
              </CopyToClipboard>
            </Tooltip>
            <Tooltip title="查看代码">
              <Button
                shape="circle"
                icon={<CodeSandboxOutlined />}
                size="small"
                onClick={() => _setBASIS(!_BASIS)}
              />
            </Tooltip>
          </div>
          {_BASIS && (
            <div
              dangerouslySetInnerHTML={{
                __html: `<pre><code class="hljs language-tsx"><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> { Card } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@xrkmm/ui&#x27;</span>

<span class="hljs-keyword">const</span> CardDemo: React.FC = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [title, setTitle] = useState(<span class="hljs-string">&#x27;我是卡片&#x27;</span>)

  <span class="hljs-keyword">const</span> onClick = <span class="hljs-function">() =&gt;</span> {
    setTitle(<span class="hljs-string">&#x27;我是卡片&#x27;</span> + <span class="hljs-built_in">Date</span>.now())
  }

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span> /&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> CardDemo
</code></pre>
`,
              }}
            />
          )}
        </div>
      </div>
      <br />

      <h2>Props</h2>
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>标题</td>
            <td>
              <code>
                <span className="hljs-built_in">string</span>
              </code>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h1>Event</h1>
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>onClick</td>
            <td>点击事件</td>
            <td>null</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Pgae
