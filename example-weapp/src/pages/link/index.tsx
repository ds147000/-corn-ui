import { View } from '@tarojs/components'
import { Link, Cell, Toast, Card } from '@xrkmm/ui-taro'

const LinkPgae: React.FC = () => {
  return (
    <View style={{ backgroundColor: 'rgba(240,240,240,1)' }}>
      <Link to='/pages/index/index' >首页</Link>
      <Cell label="限时奖励" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换" href="/home" suffix="重选" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" href="/home" suffix="重选" arrow disable />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换"suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
      <View style={{ height: 40 }} />
      <Cell.List line>
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" href="/home" suffix="重选" arrow disable />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="立即兑换"suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
      </Cell.List>
      <Card>Card</Card>
    </View>
  )
}

export default LinkPgae
