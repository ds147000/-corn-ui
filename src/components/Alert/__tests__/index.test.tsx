import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Alert from '../index'

describe('comps/Alert', () => {
  test('基本样式', () => {
    const screen = render(
      <Alert>
        您发表的【商品名称】内容审核不通过，具体原因如下：文案文字，这里有可能有很多文字，允许多行显示
      </Alert>
    )
    screen.getByText('您发表的【商品名称】内容审核不通过，具体原因如下：文案文字，这里有可能有很多文字，允许多行显示')
    expect(screen).toMatchSnapshot()
  })


  test('事件', () => {
    const onClick = jest.fn()
    const screen = render(
      <Alert onClick={onClick} >
        您发表的【商品名称】内容审核不通过，具体原因如下：文案文字，这里有可能有很多文字，允许多行显示
      </Alert>
    )
    screen.getByText('您发表的【商品名称】内容审核不通过，具体原因如下：文案文字，这里有可能有很多文字，允许多行显示')
    fireEvent.click(screen.getByText('您发表的【商品名称】内容审核不通过，具体原因如下：文案文字，这里有可能有很多文字，允许多行显示'))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen).toMatchSnapshot()
  })
})
