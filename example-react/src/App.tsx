/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-09 15:04:03
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 16:35:14
 */
import { Button, Toast, Drawer, ActionSheet, showActionSheet, Modal, showModal } from '@xrkmm/ui-h5'
import { useState } from 'react'
import '../../package-h5/dist/index.css'
import '../../package-h5/dist/styles/index.css'
import '../../package-h5/icons/style.scss'
import './App.scss'

const asList = [
  '广州',
  '深圳'
]

function App() {
  const [show, setShow] = useState(false)
  const [aShow, setAshow] = useState(false)
  const [cShow, setCshow] = useState(false)
  const [mShow, setMshow ] = useState(false)

  const onClick = () => alert(1)

  return (
    <div className="App">
      <div>
        <Button size="max">向日葵妈妈UI</Button>
        <Button size="big" icon={<i className="x-icon-gantanhao" />}>向日葵妈妈UI</Button>
        <Button size="large">向日葵妈妈UI</Button>
        <Button size="middle">向日葵妈妈UI</Button>
        <Button size="small">向日葵妈妈UI</Button>
        <Button size="mini">向日葵妈妈UI</Button>
        <Button type="error">向日葵妈妈UI</Button>
        <Button type="link">向日葵妈妈UI</Button>
        <Button type="pop">向日葵妈妈UI</Button>
        <Button type="primary">向日葵妈妈UI</Button>
        <Button type="warn">向日葵妈妈UI</Button>
        <Button icon={<div>我是图标</div>}>向日葵妈妈UI</Button>
        <Button block type="error" >向日葵妈妈UI</Button>
        <Button block type="link" >向日葵妈妈UI</Button>
        <Button block type="pop" >向日葵妈妈UI</Button>
        <Button block type="primary" >向日葵妈妈UI</Button>
        <Button block type="warn" >向日葵妈妈UI</Button>
        <Button ghost type="error" >向日葵妈妈UI</Button>
        <Button ghost type="link" >向日葵妈妈UI</Button>
        <Button ghost type="pop" >向日葵妈妈UI</Button>
        <Button ghost type="primary" >向日葵妈妈UI</Button>
        <Button ghost type="warn" >向日葵妈妈UI</Button>
        <Button onClick={onClick}>向日葵妈妈UI</Button>
        <Button onClick={onClick} disabled >向日葵妈妈UI</Button>
        <Button onClick={() => Toast.show({ title: '我是toast', icon: 'success'})}>点击出现taost</Button>
        <Button onClick={() => setShow(true)}>抽屉</Button>
        <Button onClick={() => setAshow(true)}>ActionSheet</Button>
        <Button onClick={() => setCshow(true)}>自定义ActionSheet</Button>
        <Button onClick={() => {
          showActionSheet({ list: asList })
            .then(console.log)
            .catch(console.error)
        }}>
          API 唤起 Actionsheet
        </Button>
        <Button onClick={() => setMshow(true)} type="pop">自定义Modal</Button>
        <Button onClick={() => {
          showModal({ title: 'API 唤起 Modal' })
            .then(console.log)
            .catch(console.error)
        }}>
          API 唤起 Modal
        </Button>

        <Drawer visible={show} onClose={() => setShow(false)}>
          <div className="si-button"></div>
        </Drawer>
      </div>
      <ActionSheet
        visible={aShow}
        title="我是大标题"
        subTitle="我是副标题"
        onClose={() => setAshow(false)}
        showCancel={true}
        showOk={true}
        titleAlign="right"
      />

      <ActionSheet
        visible={cShow}
        title="我是大标题"
        onClose={() => setCshow(false)}
      >
        <Button onClick={() => setCshow(false)}>我是按钮</Button>
      </ActionSheet>

      <Modal
        visible={mShow}
        title="这是标题"
        content="这是文案这是文案这是文案这是文案"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '继续看' },
          { text: '确定' }
        ]}
        onButtonClick={() => setMshow(false)}
      />
    </div>
  )
}

export default App;
