/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 16:24:31
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 15:34:25
 */
import { Component } from 'react'
import { View } from '@tarojs/components'
import { Button, Toast, Drawer, showActionSheet, showModal, Modal, Icon, Image } from '@xrkmm/ui-taro'
import './index.scss'

const asList = [
  '广州',
  '深圳'
]
export default class Index extends Component {

  state = {
    show: false,
    mShow: true
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
        <Button size="max" icon={<Icon name="service" />}>向日葵妈妈UI</Button>
        <Button size="big">向日葵妈妈UI</Button>
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
        <Button onClick={this.onClick}>向日葵妈妈UI</Button>
        <Button onClick={this.onClick} disabled >向日葵妈妈UI</Button>
        <Drawer visible={this.state.show} onClose={this.onClose}>
          <View className="si-button"></View>
        </Drawer>
        <Button onClick={() => {
          showActionSheet({ list: asList })
            .then(console.log)
            .catch(console.error)
        }}>
          API 唤起
        </Button>

        <Button onClick={() => {
          showModal({ title: 'API 唤起 Modal' })
            .then(console.log)
            .catch(console.error)
        }}>
          API 唤起 Modal
        </Button>


        <Modal
        visible={this.state.mShow}
        title="这是标题"
        content="这是文案这是文案这是文案这是文案"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '继续看' },
          { text: '确定' }
        ]}
        onButtonClick={() => this.setState({ mShow: false })}
        />
        <Image src="https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF"  />
        <Image src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" lazyLoad />
      </View>
    )
  }
}
