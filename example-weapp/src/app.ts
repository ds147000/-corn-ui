/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 16:24:31
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 15:32:29
 */
import { Component } from 'react'
import '../../package-taro/icons/style.scss'
import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
