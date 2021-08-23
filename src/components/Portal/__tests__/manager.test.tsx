/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { View } from '@tarojs/components'
import HostManager from '../manager'
import Host from '../host'


describe('HostManager', () => {

  test('add', async () => {
    const screen = render(<Host />)

    HostManager.status = true
    await act(async () => {
      const Comps: React.FC<{ onDestory(): void }> = ({ onDestory }) => {

        useEffect(() => {
          // eslint-disable-next-line no-magic-numbers
          setTimeout(onDestory, 100)
        }, [ onDestory ])

        return (<View key="toast">toast</View>)
      }
      await HostManager.add(Comps)
    })
    await waitFor(() => screen.getByText('toast'))

    await act(async () => new Promise((res) => {
      // eslint-disable-next-line no-magic-numbers
      setTimeout(res, 200)
    }))
    await waitFor(() => expect(screen.queryByText('toast')).toBeNull())
    await waitFor(() => screen.unmount())
  })

})
