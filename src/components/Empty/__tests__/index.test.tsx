import React from 'react'
import { View } from '@tarojs/components'
import { render } from '@testing-library/react'
import Empty from '../index'

describe('Empty', () => {

  test('basis', () => {
    const screen = render(<Empty />)
    expect(screen).toMatchSnapshot()
  })

  test('text', () => {
    const screen = render(<Empty text="暂停服务..." />)
    screen.getByText('暂停服务...')
    expect(screen).toMatchSnapshot()
  })

  test('children', () => {
    const screen = render(
      <Empty>
        <View>我是子对象</View>
      </Empty>
    )
    screen.getByText('我是子对象')
    expect(screen).toMatchSnapshot()
  })

  test('img', () => {
    const screen = render(<Empty src="https://t7.baidu.com/it/u=1831997705,836992814&fm=193&f=GIF" />)
    expect(screen).toMatchSnapshot()
  })

  test('wrapperTop', () => {
    const screen = render(<Empty wrapperTop={100} />)
    expect(screen.getByTestId('empty').style.paddingTop).toBe('1.33rem')
    expect(screen).toMatchSnapshot()
  })

  test('wrapperTop to string', () => {
    const screen = render(<Empty wrapperTop="100px" />)
    expect(screen.getByTestId('empty').style.paddingTop).toBe('100px')
    expect(screen).toMatchSnapshot()
  })

  test('wrapperBottom', () => {
    const screen = render(<Empty wrapperBottom={100} />)
    expect(screen.getByTestId('empty').style.paddingBottom).toBe('1.33rem')
    expect(screen).toMatchSnapshot()
  })

  test('wrapperBottom ot string', () => {
    const screen = render(<Empty wrapperBottom="100px" />)
    expect(screen.getByTestId('empty').style.paddingBottom).toBe('100px')
    expect(screen).toMatchSnapshot()
  })
})
