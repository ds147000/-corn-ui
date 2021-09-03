/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 16:24:31
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 15:34:25
 */
import { Component } from 'react'
import { View } from '@tarojs/components'
import { TabItemPorps } from '@xrkmm/ui-taro/components/Tab'
import { Button, Toast, Drawer, showActionSheet, showModal, Modal, Icon, Image, Tab, Affix, Timer, Link } from '@xrkmm/ui-taro'
import './index.scss'

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
      return <View>{number}天:</View>

    case 'hous':
      return <View>{number}小时:</View>

    case 'min':
      return <View>{number}分钟:</View>

    default:
      return <View>{number}秒</View>
  }
}

export default class Index extends Component {

  state = {
    show: false,
    mShow: false,
    current: 0
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClick() {
    Toast.show('taost')
  }

  onClose = () => {
    this.setState({ show: false })
  }

  render () {
    return (
      <View className='index'>
        {/* <Affix> */}
          <Tab
            options={TabOption}
            currenIndex={this.state.current}
            onChange={(index) => this.setState({ current: index })}
          />
        {/* </Affix> */}
        <Link to='/pages/link/index' >【Link跳转】</Link>
        <Link to='/pages/link/index' replace >【Link原地跳转】</Link>
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
        <Button size='max' icon={<Icon name='service' />}>图标按钮</Button>
        <Button size='big'>向日葵妈妈UI</Button>
        <Button size='large'>向日葵妈妈UI</Button>
        <Button size='middle'>向日葵妈妈UI</Button>
        <Button size='small'>向日葵妈妈UI</Button>
        <Button size='mini'>向日葵妈妈UI</Button>
        <Button type='error'>向日葵妈妈UI</Button>
        <Button type='link'>向日葵妈妈UI</Button>
        <Button type='pop'>向日葵妈妈UI</Button>
        <Button type='primary'>向日葵妈妈UI</Button>
        <Button type='warn'>向日葵妈妈UI</Button>
        <Button block type='error' >向日葵妈妈UI</Button>
        <Button block type='link' >向日葵妈妈UI</Button>
        <Button block type='pop' >向日葵妈妈UI</Button>
        <Button block type='primary' >向日葵妈妈UI</Button>
        <Button block type='warn' >向日葵妈妈UI</Button>
        <Button ghost type='error' >向日葵妈妈UI</Button>
        <Button ghost type='link' >向日葵妈妈UI</Button>
        <Button ghost type='pop' >向日葵妈妈UI</Button>
        <Button ghost type='primary' >向日葵妈妈UI</Button>
        <Button ghost type='warn' >向日葵妈妈UI</Button>
        <Button onClick={this.onClick}>向日葵妈妈UI</Button>
        <Button onClick={this.onClick} disabled >向日葵妈妈UI</Button>
        <Drawer visible={this.state.show} onClose={this.onClose}>
          <View className='si-button'></View>
        </Drawer>
        <Button
          onClick={() => {
            showActionSheet({ list: asList })
              .then(console.log)
              .catch(console.error)
          }}
        >
          API 唤起
        </Button>

        <Button
          onClick={() => {
            showModal({ title: 'API 唤起 Modal' })
              .then(console.log)
              .catch(console.error)
          }}
        >
          API 唤起 Modal
        </Button>
        <Modal
          visible={this.state.mShow}
          title='这是标题'
          content='这是文案这是文案这是文案这是文案'
          button={[
            { text: '取消', style: 'cancel' },
            { text: '继续看' },
            { text: '确定' }
          ]}
          onButtonClick={() => this.setState({ mShow: false })}
        />
        <Image src='https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF'  />
        <Image src='https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF' lazyLoad />
        <Affix position='bottom'>
          <Button size='max' icon={<Icon name='service' />}>图标按钮</Button>
        </Affix>
      </View>
    )
  }
}
