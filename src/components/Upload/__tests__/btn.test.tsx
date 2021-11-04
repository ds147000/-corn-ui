import React from 'react'
import { render } from '@testing-library/react'
import { UploadDefaultBtn } from '../btn'

jest.mock('../inputMask')
jest.mock('../../Toast')

test('UploadDefaultBtn', () => {
  const screen = render(<UploadDefaultBtn type="all" multiple onChange={jest.fn()} />)
  expect(screen.container).toMatchSnapshot()
})
