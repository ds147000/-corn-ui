/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-09 15:04:03
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 16:35:14
 */
import {
  Button, Toast, Drawer, ActionSheet, showActionSheet,
  Modal, showModal, Icon, Empty, Image, Tab, Tag, Affix, Timer, Link
} from '@xrkmm/ui-h5'
import { useState } from 'react'
import { TabItemPorps } from '../../package-h5/dist/components/Tab'
import '../../package-h5/dist/styles/base.css'
import '../../package-h5/dist/styles/index.css'
import '../../package-h5/icons/style.scss'
import './App.scss'

const asList = [
  '广州',
  '深圳'
]

const TabOption: TabItemPorps[] = [
  { title: '我是选项1' },
  { title: '我是选项2' },
  { title: '我是选项3' },
  { title: '我是选项4' },
  { title: '我是选项5' }
]

const renderItem = (type: string, number: string): JSX.Element => {
  switch(type) {
    case 'day':
      return <div>{number}天:</div>

    case 'hous':
      return <div>{number}小时:</div>

    case 'min':
      return <div>{number}分钟:</div>

    default:
      return <div>{number}秒</div>
  }
}

function App() {
  const [current, setCurrent] = useState(-1)
  const [show, setShow] = useState(false)
  const [aShow, setAshow] = useState(false)
  const [cShow, setCshow] = useState(false)
  const [mShow, setMshow] = useState(false)

  const onClick = () => alert(1)

  const onChange = (fixed: boolean) => {
    console.log(fixed)
  }

  return (
    <div className="App">
      {/* <Affix> */}
        <Tab
          options={TabOption}
          currenIndex={current}
          onChange={(index) => setCurrent(index)}
        />
      {/* </Affix> */}
      <Link to='/pages/link/index'>【Link跳转】</Link>
      <Link to='/pages/link/index' replace >【Link原地跳转】</Link>
      <Link to='/pages/link/index' replace >【替换跳转】</Link>
      <Link to='openmp:///pages/link/index'  >【打开小程序】</Link>
      <Link to='/pages/link/index' type="primary" >primary</Link>
      <Link to='/pages/link/index' type="warn" >warn</Link>
      <Link to='/pages/link/index' type="error" >error</Link>
      <Link to='/pages/link/index' type="link" >link</Link>
      <Link to='/pages/link/index' type="pop" >pop</Link>
      <Button>
        <Timer startTime={1500000000} endTime={1500000000 + 240000} />
      </Button>
      <Button>
        <Timer startTime={1500000000} endTime={1500000000 + 240000000} />
      </Button>
      <Timer startTime={1500000000} endTime={1500000000 + 240000} fill />
      <Timer startTime={1500000000} endTime={1500000000 + 240000000} fill />
      <Timer startTime={1500000000} endTime={1500000000 + 240000000} renderItem={renderItem} />
      <Tag size="middle">3-9岁</Tag>
      <Tag size="small">3-9岁</Tag>
      <Tag type="error">3-9岁</Tag>
      <Tag type="link">3-9岁</Tag>
      <Tag type="pop">3-9岁</Tag>
      <Tag type="primary">3-9岁</Tag>
      <Tag type="warn">3-9岁</Tag>

      <Tag type="error" ghost>3-9岁</Tag>
      <Tag type="link" ghost>3-9岁</Tag>
      <Tag type="pop" ghost>3-9岁</Tag>
      <Tag type="primary" ghost>3-9岁</Tag>
      <Tag type="warn" ghost>3-9岁</Tag>
      <Button size="big" icon={<Icon name="service" />}>向日葵妈妈UI</Button>
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
      <Button onClick={() => Toast.show({ title: '我是toast', icon: 'success' })}>点击出现taost</Button>
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
      <ActionSheet
        closable
        visible={aShow}
        title="我是大标题"
        subTitle="我是副标题"
        onClose={() => setAshow(false)}
        showCancel={true}
        showOk={true}
        titleAlign="center"
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
      <Empty text="暂无内容哦" size="large" />
      <Empty text="暂无内容哦" >
        <Button>返回首页</Button>
      </Empty>

      <Empty text="暂无内容哦" size="small" />
      <Image src="https://t7.baidu.com/it/u=124476473,2583135375&fm=193&f=GIFF" previewImage />
      <Image src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" lazyLoad />
      <Affix onChange={onChange} position="bottom">
        <Button size="max">向日葵妈妈UI</Button>
      </Affix>
    </div>
  )
}

export default App;
