/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-09 15:04:03
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 16:35:14
 */
import { Button, Toast } from '@xrkmm/ui'
import '../../dist/xrkmm.mini.css'
import '../../node_modules/@tarojs/components-react/dist/index.css'

function App() {
  const onClick = () => alert(1)

  return (
    <div className="App">
      <div>
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
        <Button onClick={onClick}>向日葵妈妈UI</Button>
        <Button onClick={onClick} disabled >向日葵妈妈UI</Button>
        <Button onClick={() => Toast.show({ title: '我是toast', icon: 'success'})}>点击出现taost</Button>
      </div>

    </div>
  )
}

export default App;
