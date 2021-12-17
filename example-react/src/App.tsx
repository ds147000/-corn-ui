/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-09 15:04:03
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 16:35:14
 */
import {
  Button, Toast, Drawer, ActionSheet, showActionSheet,
  Modal, showModal, Empty, Image, Tab, Tag, Affix, Timer, Link,
  Cell, Card, Checkbox, CheckboxGroup, previewImage, Input, Form,
  Textarea, Skeleton, Search, Icon, Upload, Alert, Popover, Tooltip,
  showXiaokuiModal
} from '@xrkmm/ui-h5'
import React, { useRef, useState } from 'react'
import 'swiper/swiper.scss'
import { TAB } from '../../package-h5/components/Tab'
import '../../package-h5/styles/base.css'
import '../../package-h5/styles/index.mini.css'
import '../../package-icons/style.css'
import './App.scss'

const asList = [
  '广州',
  '深圳'
]

const TabOption: TAB.Item[] = [
  { title: '我是选项1' },
  { title: '我是选项2', message: true },
  { title: '我是选项3', message: true },
  { title: '我是选项4' },
  { title: '我是选项5' }
]

const TabUrlOption: TAB.Item[] = [
  { title: '我是选项1', url: '/home' },
  { title: '我是选项2', url: '/', icon: 'https://assets.xrkmm.cn/u-test/4000000196122028/49b28023-3cbd-4604-b165-9850fd6f99b8.png' },
  { title: '我是选项3', url: '/home' },
  { title: '我是选项4', url: '/' },
  { title: '我是选项5', url: '/home' }
]

const renderItem = (type: string, number: string): JSX.Element => {
  switch (type) {
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
  const checkGroupRef = useRef<CheckboxGroup>()
  const form = useRef<Form>()
  const [time, setTime] = useState(0)
  const [current, setCurrent] = useState(1)
  const [show, setShow] = useState(false)
  const [aShow, setAshow] = useState(false)
  const [cShow, setCshow] = useState(false)
  const [mShow, setMshow] = useState(false)
  const [search, setSearch] = useState('')
  const [obj, setObj] = useState({ a: '1' })

  const onClick = () => alert(1)

  const onChange = (fixed: boolean) => {
    console.log(fixed)
  }

  const onChangeInput = () => {
    form.current?.setValue({ shop1: true, name: '1233', liuyan: '0000' })
  }

  const onSetTime = () => setTime(1000)

  const onChangeTime = () => {
    if (obj.a === '100') return
    setObj({...obj, a: '100'})
  }

  const cs = 'h5'

  return (
    <div className="App" >
      <Alert onClick={() => showXiaokuiModal({
        btn: [
          { text: '炫耀一下' },
          { text: '解锁更多', type: 'error', ghost: true }
        ],
        content: <div>我是挑剔</div>
      }).then((res) => console.log(res))} >
        您发表的【商品名称】内容审核不通过，具体原因如下：文案文字，这里有可能有很多文字，允许多行显示
      </Alert>
      {cs && <div>{cs}</div>}
      <Popover
        content={(rect) => (
          <div style={{ backgroundColor: '#fff', borderRadius: 10, width: 200 }} >
            <CheckboxGroup name="shop100" radio >
              <Checkbox value="1" >单选模式1</Checkbox>
              <Checkbox value="2" >单选模式2</Checkbox>
              <Checkbox value="3" >单选模式3</Checkbox>
              <Checkbox value="4" >单选模式4</Checkbox>
            </CheckboxGroup>
          </div>
        )}
      >
        <Button>选择类型</Button>
      </Popover>
      <Timer startTime={0} endTime={60000} onChange={onChangeTime} />
      <Search />
      <Search back onBack={() => console.log('返回')} />
      <Search back onBack={() => console.log('返回')} onClick={() => console.log('点击搜索')} />
      <Search back onBack={() => console.log('返回')} openInput onSearch={(e) => console.log(e)} />
      <Search back onBack={() => console.log('返回')} placeholder={['向日葵妈妈', '常青藤爸爸', '小熊', '二逼']} openInput onSearch={(e) => console.log(e)} suffix={<Icon name="camera" />} />
      <Search type="light" />
      <Search back type="light" placeholder="输入关键词" />
      <Search back openInput type="light" placeholder={['向日葵妈妈', '常青藤爸爸', '小熊', '二逼']} onSearch={(e) => console.log(e)} />
      <Search
        back
        placeholder={['向日葵妈妈', '常青藤爸爸', '小熊', '二逼']}
        type="light"
        onBack={() => console.log('返回')}
        openInput
        onSearch={(e) => console.log(e)}
        value={search}
        onChange={(e) => setSearch(e)}
      />
      <Tooltip
        align="top"
        list={[
          { text: 'VIP妈妈', type: 'active' },
          { text: '明星妈妈' },
          { text: '平民' },
          { text: '新人' }
        ]}
        onClick={(item) => Toast.show(item.text)}
      >
        <Button>会员等级</Button>
      </Tooltip>
      <Skeleton>
        <Skeleton.Item height={690} width={690} top={15} bottom={15} left={30} right={300} />
        <Skeleton.Item height={106} top={15} bottom={15} left={30} right={30} />
        <Skeleton.Item height={46} top={15} bottom={15} left={30} right={30} />
        <Skeleton.Item />
      </Skeleton>
      <Form
        onSubmit={(data) => console.log(data)}
        ref={form as React.LegacyRef<Form>}
        defaultValue={{ name: '我是小米', shop1: false }}
      >
        <Card>
          <Upload name="img" count={2} />
        </Card>
        <Card>
          <Upload name="img2" handelUpload={() => Promise.reject(new Error('上传失败'))} />
        </Card>
        <Card>
          <Upload layout="square" name="img3" />
        </Card>
        <Input name="name" />
        <Textarea name="liuyan" />
        <Checkbox name="shop1">商品链接</Checkbox>
        <Checkbox check name="shop2" >商品链接</Checkbox>
        <Checkbox check disabled name="shop3" >商品链接</Checkbox>
        <Checkbox disabled name="shop4" >商品链接</Checkbox>
        <Checkbox type="button" name="shop5" >商品链接</Checkbox>
        <Tab
          options={TabOption}
          currenIndex={current}
          onChange={(index) => setCurrent(index)}
          size="large"
        />
        <Tab
          options={TabUrlOption}
          currenIndex={current}
          onChange={(index) => setCurrent(index)}
          size="large"
        />
        <Tab
          options={TabOption}
          currenIndex={current}
          onChange={(index) => setCurrent(index)}
        />
        <Tab
          options={TabOption}
          currenIndex={current}
          onChange={(index) => setCurrent(index)}
          type="button"
        />
        <Card>
          <CheckboxGroup name="shop6" >
            <Checkbox value="1">联合复选框1</Checkbox>
            <Checkbox value="2">联合复选框4</Checkbox>
            <Checkbox value="3">联合复选框3</Checkbox>
            <Checkbox value="4">联合复选框2</Checkbox>
          </CheckboxGroup>
        </Card>
        <Card>
          <CheckboxGroup name="shop7" radio >
            <Checkbox value="1" >单选模式1</Checkbox>
            <Checkbox value="2" >单选模式2</Checkbox>
            <Checkbox value="3" >单选模式3</Checkbox>
            <Checkbox value="4" >单选模式4</Checkbox>
          </CheckboxGroup>
        </Card>
        <Card>
          <CheckboxGroup name="shop8" radio >
            <Checkbox value="1" type="button" >单选模式1</Checkbox>
            <Checkbox value="2" type="button" >单选模式2</Checkbox>
            <Checkbox value="3" type="button" >单选模式3</Checkbox>
            <Checkbox value="4" type="button" >单选模式4</Checkbox>
          </CheckboxGroup>
        </Card>
        <Card>
          <CheckboxGroup name="shop9" radio >
            <Checkbox value="1" type="button" buttonType="error" ghost >单选模式1</Checkbox>
            <Checkbox value="2" type="button" ghost >单选模式2</Checkbox>
            <Checkbox value="3" type="button" ghost >单选模式3</Checkbox>
            <Checkbox value="4" type="button" ghost >单选模式4</Checkbox>
          </CheckboxGroup>
        </Card>
        <Card>
          <CheckboxGroup name="shop10" ref={checkGroupRef as React.LegacyRef<CheckboxGroup>} >
            <Checkbox value="1">单选模式1</Checkbox>
            <Checkbox value="2">单选模式2</Checkbox>
            <Checkbox value="3">单选模式3</Checkbox>
            <Checkbox value="4">单选模式4</Checkbox>
          </CheckboxGroup>
          <Button onClick={() => checkGroupRef.current?.selectAll()} >全选</Button>
          <Button onClick={() => checkGroupRef.current?.reset()} >取消选中</Button>
        </Card>
        <Link to='https://baidu.com'>baidu1</Link>
        <Link to='http://baidu.com'>baidu1</Link>
        <Link to='//baidu.com'>baidu1</Link>
        <Link to='/pages/link/index'>【Link跳转】</Link>
        <Link to='/pages/link/index' replace >【Link原地跳转】</Link>
        <Link to='/pages/link/index' replace >【替换跳转】</Link>
        <Link to='openmp:///pages/link/index'  >【打开小程序】</Link>
        <Link to='/pages/link/index' type="primary" >primary</Link>
        <Link to='/pages/link/index' type="warn" >warn</Link>
        <Link to='/pages/link/index' type="error" >error</Link>
        <Link to='/pages/link/index' type="link" >link</Link>
        <Link to='/pages/link/index' type="pop" >pop</Link>
        <Affix onChange={onChange} position="top">
          <Button auto onClick={onSetTime} formType="submit" > 提交</Button>
          <Button type='error' auto onClick={onSetTime} formType="reset" > 重置</Button>
          <Button type='pop' auto onClick={onChangeInput} > 变更</Button>
          <Button type='link' auto onClick={() => form.current?.reset()} > 实例重置</Button>
        </Affix>
        <Button>
          <Timer startTime={0} endTime={time} />
        </Button>
        <Button>
          <Timer startTime={0} endTime={240000000} />
        </Button>
        <Timer startTime={1500000000} endTime={1500000000 + 240000} fill />
        <Timer startTime={1500000000} endTime={1500000000 + 240000000} fill />
        <Timer startTime={1500000000} endTime={1500000000 + 240000000} renderItem={renderItem} />
        <Tag size="large">3-9岁</Tag>
        <Tag size="middle">3-9岁</Tag>
        <Tag size="small">3-9岁</Tag>
        <Tag type="error">3-9岁</Tag>
        <Tag type="link">3-9岁</Tag>
        <Tag type="pop">3-9岁</Tag>
        <Tag type="primary">3-9岁</Tag>
        <Tag type="warn">3-9岁</Tag>
        <Tag type="urgent">3-9岁</Tag>
        <Tag type="error" ghost>3-9岁</Tag>
        <Tag type="link" ghost>3-9岁</Tag>
        <Tag type="pop" ghost>3-9岁</Tag>
        <Tag type="primary" ghost>3-9岁</Tag>
        <Tag type="warn" ghost>3-9岁</Tag>
        <Tag type="warn" ghost>3-9岁</Tag>
        <Tag type="urgent" ghost >3-9岁</Tag>
        <Tag type="activity" ghost >3-9岁</Tag>
        <Cell label="限时奖励" />
        <Cell label="限时奖励" placeholder="请选择奖励类型" />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" arrow />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换" to="/home" suffix="重选" arrow />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" to="/home" suffix="重选" arrow disabled />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换前往兑换前往兑换前往兑换前往兑换前往兑换前往兑换前往兑换前往兑换前往兑换前往兑换" suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
        <br />
        <Cell.List line>
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" to="/home" suffix="重选" arrow disabled />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="立即兑换" suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
        </Cell.List>
        <Cell label="限时奖励" >
          <Empty />
        </Cell>
        <br />
        <Button size="max" onClick={() => previewImage({
          current: 'https://t7.baidu.com/it/u=3713375227,571533122&fm=193&f=GIF',
          urls: [
            'https://t7.baidu.com/it/u=3713375227,571533122&fm=193&f=GIF',
            'https://t7.baidu.com/it/u=2235903830,1856743055&fm=193&f=GIF',
            'https://t7.baidu.com/it/u=1635608122,693552335&fm=193&f=GIF'
          ]
        })} >预览图片</Button>
        <Button size="max">向日葵妈妈UI</Button>
        <Button size="big">向日葵妈妈UI</Button>
        <Button size="large" to="/123" >向日葵妈妈UI</Button>
        <Button size="large" >向日葵妈妈UI</Button>
        <Button size="middle">向日葵妈妈UI</Button>
        <Button size="small">向日葵妈妈UI</Button>
        <Button size="mini">向日葵妈妈UI</Button>
        <Button size="max" auto>向日葵妈妈UI</Button>
        <Button size="big" auto>向日葵妈妈UI</Button>
        <Button size="large" auto >向日葵妈妈UI</Button>
        <Button size="middle" auto >向日葵妈妈UI</Button>
        <Button size="small" auto>向日葵妈妈UI</Button>
        <Button size="mini" auto>向日葵妈妈UI</Button>
        <Button type="error">向日葵妈妈UI</Button>
        <Button type="link">向日葵妈妈UI</Button>
        <Button type="pop">向日葵妈妈UI</Button>
        <Button type="primary">向日葵妈妈UI</Button>
        <Button type="primary" to="/home">跳转首页</Button>
        <Button type="warn">向日葵妈妈UI</Button>
        <Button type="stop">stop</Button>
        <Button type="error" disabled>向日葵妈妈UI(disable)</Button>
        <Button type="link" disabled>向日葵妈妈UI（disable）</Button>
        <Button type="pop" disabled>向日葵妈妈UI（disable）</Button>
        <Button type="primary" disabled>向日葵妈妈UI（disable）</Button>
        <Button type="default" disabled>向日葵妈妈UI（disable）</Button>
        <Button type="warn" disabled>向日葵妈妈UI(disable)</Button>
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
        <Button ghost type="warn" >向日葵妈妈UI</Button>
        <Button onClick={onClick} disabled >向日葵妈妈UI</Button>
        <Button onClick={onClick} type="default" >向日葵妈妈UI</Button>
        <Button onClick={() => Toast.show({ title: '我是toast' + Math.random(), icon: 'success' })}>点击出现taost</Button>
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
          <Cell label="限时奖励" onClick={() => setMshow(true)} />
          <Cell label="限时奖励" placeholder="请选择奖励类型" />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" arrow />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换" to="/home" suffix="重选" arrow />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" to="/home" suffix="重选" arrow disabled />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换" suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
          <Cell label="限时奖励" />
          <Cell label="限时奖励" placeholder="请选择奖励类型" />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" arrow />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换" to="/home" suffix="重选" arrow />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" to="/home" suffix="重选" arrow disabled />
          <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换" suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
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
        <Empty text="暂无内容哦" direction="快去已经购买的商品写下您的实测评价吧~" size="large" />
        <Empty text="暂无内容哦" >
          <Button>返回首页</Button>
        </Empty>

        <Empty text="暂无内容哦" size="small" />
        <Image src="https://t7.baidu.com/it/u=124476473,2583135375&fm=193&f=GIFF" previewImage />
        <Image src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" lazyLoad />
        <Card onClick={() => previewImage({
          current: 'https://t7.baidu.com/it/u=2291349828,4144427007&fm=193&f=GIF',
          urls: ['https://t7.baidu.com/it/u=2291349828,4144427007&fm=193&f=GIF', 'https://t7.baidu.com/it/u=124476473,2583135375&fm=193&f=GIFF']
        })} >Card</Card>

        <Card onClick={() => previewImage({
          current: 'https://t7.baidu.com/it/u=2291349828,4144427007&fm=193&f=GIF',
          urls: ['https://t7.baidu.com/it/u=2291349828,4144427007&fm=193&f=GIF', 'https://t7.baidu.com/it/u=124476473,2583135375&fm=193&f=GIFF']
        })} >Card</Card>
      </Form>
    </div>
  )
}

export default App;
