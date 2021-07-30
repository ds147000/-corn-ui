/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-09 15:04:03
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 16:35:14
 */
import { Card } from '@xrkmm/ui'
import './App.css'
import '../../dist/xrkmm.mini.css'

function App() {
  return (
    <div className="App">
      <Card onClick={() => alert(1)} />
    </div>
  )
}

export default App;
