import { useState } from 'react'
import { Card } from '@xrkmm/ui'

const CardDemo: React.FC = () => {
  const [title, setTitle] = useState('我是卡片')

  const onClick = () => {
    setTitle('我是卡片' + Date.now())
  }

  return <Card title={title} onClick={onClick} />
}

export default CardDemo
