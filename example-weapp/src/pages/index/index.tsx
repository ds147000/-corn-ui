/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 16:24:31
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 15:34:25
 */
import { Component } from 'react'
import { View } from '@tarojs/components'
import { Button, Toast, Drawer } from '@xrkmm/ui'
import './index.scss'

export default class Index extends Component {

  state = {
    show: true
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
        <Button size="max">向日葵妈妈UI</Button>
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
      </View>
    )
  }
}
