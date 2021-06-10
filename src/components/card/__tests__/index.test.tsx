/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-10 18:39:54
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 18:52:39
 */
import React from 'react'
import Card from '../index'
import { Text } from '@tarojs/components'
import { render, fireEvent } from '@testing-library/react'

describe('components/card', () => {

  test('正常快照', () => {
    const screen = render(<Card />)
    expect(screen.container).toMatchSnapshot()
  })

  test('标题快照', () => {
    const screen = render(<Card title="我是卡片" />)
    screen.getByText('我是卡片')
    expect(screen.container).toMatchSnapshot()
  })

  test('子节点快照', () => {
    const screen = render(
        <Card>
          <Text>内容</Text>
        </Card>
      )
    screen.getByText('内容')
    expect(screen.container).toMatchSnapshot()
  })

  test('点击回调', () => {
    const fn = jest.fn()
    const screen = render(<Card title="我是卡片" onClick={fn} />)
    fireEvent.click(screen.getByText('我是卡片'))
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('无点击回调', () => {
    const screen = render(<Card title="我是卡片" />)
    fireEvent.click(screen.getByText('我是卡片'))

  })

})
