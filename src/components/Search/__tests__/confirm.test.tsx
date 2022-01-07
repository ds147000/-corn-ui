import React from 'react'
import { render, waitFor } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import Search from '../index'

jest.mock('../../Form')
jest.mock('../../Input')

describe('Search', () => {
  test('输入值，回车搜索', async () => {
    const onSearch = jest.fn()
    const screen = render(<Search openInput onSearch={onSearch} />)
    const input = screen.getByTestId('input')
    UserEvent.type(input, '喜马拉雅山')
    UserEvent.click(input)

    await waitFor(() => expect(onSearch).toHaveBeenCalledTimes(2))
  })

})
