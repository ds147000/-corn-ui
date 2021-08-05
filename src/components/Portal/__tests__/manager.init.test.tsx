import React from 'react'
import { View } from '@tarojs/components'
import HostManager from '../manager'

jest.mock('react-dom', () => ({
  render: jest.fn()
}))


describe('HostManager', () => {
  test('init', () => {
    HostManager.status = false
    HostManager.add(<View key="toast">toast</View>)
  })
})
