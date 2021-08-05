/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { View } from '@tarojs/components'
import HostManager from '../manager'
import Host from '../host'


describe('HostManager', () => {

  test('add', async () => {
    const screen = render(<Host />)
    let id = 0

    HostManager.status = true
    await act(async () => {
      id = await HostManager.add(<View key="toast">toast</View>)
    })
    await waitFor(() => screen.getByText('toast'))

    await act(async () => new Promise((res) => {
      HostManager.remove(id)

      setTimeout(() => {
        res()

        // eslint-disable-next-line no-magic-numbers
      }, 1000)
    }))

    await waitFor(() => screen.unmount())
  })

})
