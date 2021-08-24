import React from 'react'
import { useContext } from 'react'
import DemoRoutes from '../../router/demo'

export const IphoneContext = React.createContext({
  url: '',
  changeUrl: (url: string) => {
    console.log(url)
  }
})

export const Iphone: React.FC = () => {
  const url = useContext(IphoneContext).url
  const title = DemoRoutes.find((item) => item.path === url)?.title || ''

  return (
    <div className="iphone">
      <div className="preview-title">{title}</div>
      <iframe className="iframe" src={url} />
    </div>
  )
}
