import { useHistory, useLocation } from "react-router-dom"
import { Layout, Menu } from 'antd'
import { RouteProps } from 'react-router-dom'
import CompsRoutes from '../../router/components'
import OtherRoutes from '../../router/other'
import StartRoutes from '../../router/start'
import './style.scss'

interface RoutesProps extends RouteProps {
  title: string;
  type: string;
  sort: number;
}

const { Header, Content, Footer, Sider } = Layout

const ShowCompsRoutes: Record<string, RoutesProps[]> = {}

CompsRoutes.map((item) => {
  if (ShowCompsRoutes[item.type])
    ShowCompsRoutes[item.type].push(item)
  else
    ShowCompsRoutes[item.type] = [item]
})

Object.keys(ShowCompsRoutes).map((key) => ShowCompsRoutes[key] = ShowCompsRoutes[key].sort((item, item2) => item.sort - item2.sort))

const View: React.FC = ({ children }) => {
  const location = useLocation()
  const history = useHistory()

  const onClick = (path: string) => history.push(path)

  return (
    <Layout className="layout">
      <Header className="site-layout-background header" >
        <img className="logo" src="https://assets.xrkmm.cn/u/4000002499670412/9ec97723-bf4b-47c4-887b-b8d57805b7ab.jpeg" alt="logo" />
        <h1>@xrkmm/ui</h1>
      </Header>

      <Layout className="site-layout">
        <Sider theme="light">
          <Menu selectedKeys={[location.pathname]} mode="inline">
          <Menu.ItemGroup title="入门">
              <Menu.Divider />
              {StartRoutes.map((item) => (
                <Menu.Item
                  key={item.path as string}
                  onClick={() => onClick(item.path as string)}
                >
                  {item.title}
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
            {Object.keys(ShowCompsRoutes).map((key) => (
              <Menu.ItemGroup title={key + '组件'} key={key}>
                {ShowCompsRoutes[key].map((item) => (
                  <Menu.Item
                    key={item.path as string}
                    onClick={() => onClick(item.path as string)}
                  >
                    {item.title}
                  </Menu.Item>
                ))}
              </Menu.ItemGroup>
            ))}
            <Menu.ItemGroup title="其他">
              <Menu.Divider />
              {OtherRoutes.map((item) => (
                <Menu.Item
                  key={item.path as string}
                  onClick={() => onClick(item.path as string)}
                >
                  {item.title}
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
          </Menu>
        </Sider>

        <Content className="content site-layout-background">
          <div className="solt">
            {children}
          </div>
          <Footer className="floor" >XRKMM-UI ©2021 Created by 向日葵妈妈</Footer>
        </Content>
      </Layout>
    </Layout>
  );
}

export default View
