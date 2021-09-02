/* eslint-disable no-magic-numbers */
import React from 'react'
import { fireEvent, render, waitFor, createEvent } from '@testing-library/react'
import { View } from '@tarojs/components'
import { OpenMpLink } from '../openmp'

describe('openmp', () => {

  test('基础', async () => {
    const onClick = jest.fn()
    const screen = render(
      <OpenMpLink target="Text" appId="gh_sas1" path="/" onClick={onClick}>
        <View>我是按钮</View>
      </OpenMpLink>
    )

    const el = await waitFor(() => screen.container.querySelector('wx-open-launch-weapp')) as HTMLDivElement
    expect(el).not.toBeNull()
    await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('username'))
      .toBe('gh_sas1'))

    await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('path'))
      .toBe('/'))

    fireEvent(el, createEvent('launch', el))
    expect(onClick).toHaveBeenCalledTimes(1)

    screen.getByText('我是按钮')
  })

  test('基础 - View', async () => {
    const onClick = jest.fn()
    const screen = render(
      <OpenMpLink target="View" appId="gh_sas1" path="/" onClick={onClick}>
        <View>我是按钮</View>
      </OpenMpLink>
    )
    const el = await waitFor(() => screen.container.querySelector('wx-open-launch-weapp')) as HTMLDivElement
    expect(el).not.toBeNull()
    await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('username'))
      .toBe('gh_sas1'))

    await waitFor(() => expect(screen.container.querySelector('wx-open-launch-weapp')?.getAttribute('path'))
      .toBe('/'))

    fireEvent(el, createEvent('launch', el))
    expect(onClick).toHaveBeenCalledTimes(1)

    screen.getByText('我是按钮')
  })

  test('Text', async () => {
    const onClick = jest.fn()
    const screen = render(
      <OpenMpLink target="Text" appId="gh_sas1" path="/" onClick={onClick}>
        <View>我是按钮</View>
      </OpenMpLink>
    )

    const el = await waitFor(() => screen.container.querySelector('wx-open-launch-weapp')) as HTMLDivElement
    expect(el).not.toBeNull()
    await waitFor(() => expect(screen.getByTestId('openmp')?.tagName).toBe('SPAN'))
    fireEvent(el, createEvent('launch', el))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('View', async () => {
    const onClick = jest.fn()
    const screen = render(
      <OpenMpLink target="View" appId="gh_sas1" path="/" onClick={onClick}>
        <View>我是按钮</View>
      </OpenMpLink>
    )

    const el = await waitFor(() => screen.container.querySelector('wx-open-launch-weapp')) as HTMLDivElement
    expect(el).not.toBeNull()
    await waitFor(() => expect(screen.getByTestId('openmp')?.tagName).toBe('DIV'))
    fireEvent(el, createEvent('launch', el))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('not Click', async () => {
    const onClick = jest.fn()
    const screen = render(
      <OpenMpLink target="View" appId="gh_sas1" path="/">
        <View>我是按钮</View>
      </OpenMpLink>
    )

    const el = await waitFor(() => screen.container.querySelector('wx-open-launch-weapp')) as HTMLDivElement
    expect(el).not.toBeNull()
    fireEvent(el, createEvent('launch', el))
    expect(onClick).toHaveBeenCalledTimes(0)
  })

  test('render error', async () => {
    document.getElementById = (): null => null

    const screen = render(
      <OpenMpLink target="View" appId="gh_sas1" path="/">
        <View>我是按钮</View>
      </OpenMpLink>
    )

    const el = await waitFor(() => screen.container.querySelector('wx-open-launch-weapp')) as HTMLDivElement
    expect(el).not.toBeNull()
  })
})

