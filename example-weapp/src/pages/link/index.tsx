import { View } from '@tarojs/components'
import { Link, Cell, Toast, Card, Tooltip, Button } from '@xrkmm/ui-taro'

const LinkPgae: React.FC = () => {
  return (
    <View style={{ backgroundColor: 'rgba(240,240,240,1)' }}>
      <Link to='/pages/index/index' >首页</Link>
      <Cell label="限时奖励" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换" to="/home" suffix="重选" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" to="/home" suffix="重选" arrow disabled />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换"suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
      <View style={{ height: 40 }} />
      <Cell.List line>
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" to="/home" suffix="重选" arrow disabled />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="立即兑换"suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
      </Cell.List>
      <Card>Card</Card>
      <Tooltip
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
      <Link to='/pages/index/index' >首页</Link>
      <Cell label="限时奖励" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换" to="/home" suffix="重选" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" to="/home" suffix="重选" arrow disabled />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换"suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
      <View style={{ height: 40 }} />
      <Cell.List line>
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" to="/home" suffix="重选" arrow disabled />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="立即兑换"suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
      </Cell.List>
      <Card>Card</Card>
      <Link to='/pages/index/index' >首页</Link>
      <Cell label="限时奖励" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换" to="/home" suffix="重选" arrow />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" to="/home" suffix="重选" arrow disabled />
      <Cell label="限时奖励" placeholder="请选择奖励类型" value="前往兑换"suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
      <View style={{ height: 40 }} />
      <Cell.List line>
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="葵花籽" suffix="重选" arrow />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="无效兑换" to="/home" suffix="重选" arrow disabled />
        <Cell label="限时奖励" placeholder="请选择奖励类型" value="立即兑换"suffix="重选" arrow onClick={() => Toast.show('骗你的')} />
      </Cell.List>
      <Card>Card</Card>
    </View>
  )
}

export default LinkPgae
