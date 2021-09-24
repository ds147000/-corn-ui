import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Text } from '@tarojs/components'
import Cell from '../index'

describe('Cell', () => {

  test('basis', () => {
    const screen = render(<Cell label="限时奖励" value="六月阶梯奖励活动" arrow />)
    screen.getByText('限时奖励')
    screen.getByText('六月阶梯奖励活动')
    screen.getByTestId('arrow')
    expect(screen.container).toMatchSnapshot()
  })


  test('children', () => {
    const screen = render(
      <Cell label="限时奖励" arrow >
        <Text>六月阶梯奖励活动</Text>
      </Cell>
    )
    screen.getByText('限时奖励')
    screen.getByText('六月阶梯奖励活动')
    screen.getByTestId('arrow')
    expect(screen.container).toMatchSnapshot()
  })

  test('click', () => {
    const click = jest.fn()
    const screen = render(<Cell label="限时奖励" value="六月阶梯奖励活动" arrow onClick={click} />)
    fireEvent.click(screen.getByText('限时奖励'))
    expect(click).toHaveBeenCalledTimes(1)
  })

  test('click 2 ', () => {
    const click = jest.fn()
    const screen = render(<Cell label="限时奖励" value="六月阶梯奖励活动" arrow onClick={click} />)
    fireEvent.click(screen.getByText('六月阶梯奖励活动'))
    expect(click).toHaveBeenCalledTimes(1)
  })

  test('click 3', () => {
    const click = jest.fn()
    const screen = render(<Cell label="限时奖励" value="六月阶梯奖励活动" arrow onClick={click} />)
    fireEvent.click(screen.getByTestId('arrow'))
    expect(click).toHaveBeenCalledTimes(1)
  })

  test('disable', () => {
    const click = jest.fn()
    const screen = render(<Cell label="限时奖励" value="六月阶梯奖励活动" arrow disabled onClick={click} />)
    fireEvent.click(screen.getByTestId('arrow'))
    fireEvent.click(screen.getByText('限时奖励'))
    fireEvent.click(screen.getByText('六月阶梯奖励活动'))
    expect(click).toHaveBeenCalledTimes(0)
  })

  test('suffix', () => {
    const screen = render(<Cell label="限时奖励" value="六月阶梯奖励活动" suffix="重选" arrow />)
    screen.getByText('限时奖励')
    screen.getByText('六月阶梯奖励活动')
    screen.getByText('重选')
    screen.getByTestId('arrow')
    expect(screen.container).toMatchSnapshot()
  })

  test('label = ReactNode', () => {
    const screen = render(<Cell label={<Text>自定义标题</Text>} value="六月阶梯奖励活动" suffix="重选" arrow />)
    screen.getByText('自定义标题')
    screen.getByText('六月阶梯奖励活动')
    screen.getByText('重选')
    screen.getByTestId('arrow')
    expect(screen.container).toMatchSnapshot()
  })


  test('value = ReactNode', () => {
    const screen = render(<Cell label="限时奖励" value={<Text>自定义内容</Text>} arrow />)
    screen.getByText('限时奖励')
    screen.getByText('自定义内容')
    screen.getByTestId('arrow')
    expect(screen.container).toMatchSnapshot()
  })


  test('suffix = ReactNode', () => {
    const screen = render(<Cell label="限时奖励" value="六月阶梯奖励活动" suffix={<Text>suffix</Text>} />)
    screen.getByText('限时奖励')
    screen.getByText('六月阶梯奖励活动')
    screen.getByText('suffix')
    expect(screen.container).toMatchSnapshot()
  })

  test('hide arrow', () => {
    const screen = render(<Cell label="限时奖励" value={<Text>自定义内容</Text>} />)
    screen.getByText('限时奖励')
    screen.getByText('自定义内容')
    expect(screen.queryByTestId('arrow')).toBeNull()
    expect(screen.container).toMatchSnapshot()
  })


  test('href', async () => {
    const screen = render(
    <BrowserRouter>
      <Cell label="限时奖励" value="前往查看" to="/home" />
    </BrowserRouter>)
    screen.getByText('限时奖励')
    screen.getByText('前往查看')
    screen.getByTestId('arrow')
    await waitFor(() => expect(screen.container.querySelector('a').href).toBe('http://localhost/home'))
    expect(screen.container).toMatchSnapshot()
  })

  test('href and hide arrow', async () => {
    const screen = render(
      <BrowserRouter>
        <Cell label="限时奖励" value="前往查看" to="/home" arrow={false} />
      </BrowserRouter>
    )
    screen.getByText('限时奖励')
    screen.getByText('前往查看')
    expect(screen.queryByTestId('arrow')).toBeNull()
    await waitFor(() => expect(screen.container.querySelector('a').href).toBe('http://localhost/home'))
    expect(screen.container).toMatchSnapshot()
  })

  test('href and disable', async () => {
    const click = jest.fn()
    const screen = render(
      <BrowserRouter>
        <Cell label="限时奖励" value="前往查看" to="/home" onClick={click} disabled />
      </BrowserRouter>
    )
    fireEvent.click(screen.getByText('限时奖励'))
    expect(click).toHaveBeenCalledTimes(0)
  })

  test('placeholder', () => {
    const screen = render(<Cell label="限时奖励" value="" placeholder="请选择奖励类型" arrow />)
    screen.getByText('限时奖励')
    screen.getByText('请选择奖励类型')
    screen.getByTestId('arrow')
    expect(screen.container).toMatchSnapshot()
  })

  test('placeholder And Value', () => {
    const screen = render(<Cell label="限时奖励" value="123" placeholder="请选择奖励类型" arrow />)
    screen.getByText('限时奖励')
    screen.getByText('123')
    expect(screen.queryByAltText('请选择奖励类型')).toBeNull()
    screen.getByTestId('arrow')
    expect(screen.container).toMatchSnapshot()
  })
})
