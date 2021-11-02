/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import Tab, { TAB } from '../index'

jest.mock('../hook', () => ({
  useTabScroll: jest.requireActual('../hook/mounted.h5.tsx').default
}))

jest.mock('../../../utils', () => ({
  getRanDomId: () => '123'
}))


test('option', () => {
  const options: TAB.Item[] = [
    { title: 'item1' },
    { title: 'item2' },
    { title: 'item4' }
  ]

  const screen = render(<Tab options={options} currenIndex={1} />)
  options.map((item) => screen.getByText(item.title as string))
  expect(screen.container).toMatchSnapshot()
})

test('option middle', () => {
  const options: TAB.Item[] = [
    { title: 'item1' },
    { title: 'item2' },
    { title: 'item4' }
  ]

  const screen = render(<Tab options={options} currenIndex={1} size="middle" />)
  options.map((item) => screen.getByText(item.title as string))
  expect(screen.container).toMatchSnapshot()
})


test('option of id', () => {
  const options: TAB.Item[] = [
    { title: 'item1', id: '03' },
    { title: 'item1', id: '02' },
    { title: 'item1', id: '01' },
    { title: 'item22121' }
  ]

  const screen = render(<Tab options={options} currenIndex={1} />)
  expect(screen.container).toMatchSnapshot()
})


test('option of button', () => {
  const options: TAB.Item[] = [
    { title: 'item1' },
    { title: 'item2' },
    { title: 'item4' }
  ]

  const screen = render(<Tab options={options} currenIndex={1} type="button" />)
  options.map((item) => screen.getByText(item.title as string))
  expect(screen.container).toMatchSnapshot()
})

test('active', () => {
  const options: TAB.Item[] = [
    { title: 'item1' },
    { title: 'item2' },
    { title: 'item4' }
  ]

  const screen = render(<Tab options={options} currenIndex={1} />)
  options.map((item) => screen.getByText(item.title as string))
  expect(screen.getByText('item2').parentElement?.className.indexOf('active')).not.toBe(-1)
})

test('onChange', async () => {
  const options: TAB.Item[] = [
    { title: 'item1' },
    { title: 'item2' },
    { title: 'item4' }
  ]

  const App: React.FC<unknown> = () => {
    const [ current, setCurrent ] = useState(0)

    const onChange = (index: number): void => setCurrent(index)
    return (
      <Tab options={options} currenIndex={current} onChange={onChange} />
    )
  }

  const screen = render(<App />)
  expect(screen.getByText('item1').parentElement?.className.indexOf('active')).not.toBe(-1)
  fireEvent.click(screen.getByText('item2'))
  await waitFor(() => expect(screen.getByText('item2').parentElement?.className.indexOf('active')).not.toBe(-1))
})

test('onChange of ios', async () => {
  const options: TAB.Item[] = [
    { title: 'item1' },
    { title: 'item2' },
    { title: 'item4' }
  ]

  const App: React.FC<unknown> = () => {
    const [ current, setCurrent ] = useState(0)

    const onChange = (index: number): void => setCurrent(index)
    return (
      <Tab options={options} currenIndex={current} onChange={onChange} />
    )
  }

  const screen = render(<App />)
  // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-explicit-any
  screen.getByTestId('tab').scrollTo = (options: unknown): any => {
    if (typeof options === 'object') throw 'error'
    return options
  }
  expect(screen.getByText('item1').parentElement?.className.indexOf('active')).not.toBe(-1)
  fireEvent.click(screen.getByText('item2'))
  await waitFor(() => expect(screen.getByText('item2').parentElement?.className.indexOf('active')).not.toBe(-1))
})

test('onChange of button', async () => {
  const options: TAB.Item[] = [
    { title: 'item1' },
    { title: 'item2' },
    { title: 'item4' }
  ]

  const App: React.FC<unknown> = () => {
    const [ current, setCurrent ] = useState(0)

    const onChange = (index: number): void => setCurrent(index)
    return (
      <Tab options={options} currenIndex={current} onChange={onChange} type="button" />
    )
  }

  const screen = render(<App />)

  fireEvent.click(screen.getByText('item2'))
})

test('onChange of error index', async () => {
  const options: TAB.Item[] = [
    { title: 'item1' },
    { title: 'item2' },
    { title: 'item4' }
  ]

  const App: React.FC<unknown> = () => {
    const [ current, setCurrent ] = useState(0)

    const onChange = (): void => setCurrent(100)
    return (
      <Tab options={options} currenIndex={current} onChange={onChange} />
    )
  }

  const screen = render(<App />)
  fireEvent.click(screen.getByText('item2'))
  await waitFor(() => expect(screen.getByText('item2').parentElement?.className.indexOf('active')).toBe(-1))
})

test('icon', () => {
  const options: TAB.Item[] = [
    { title: 'item1' },
    { title: 'item2' },
    { icon: '2121.png' }
  ]

  const screen = render(<Tab options={options} currenIndex={1} />)
  expect(screen.container).toMatchSnapshot()
})

test('not currenIndex', () => {
  const options: TAB.Item[] = [
    { title: 'item1' },
    { title: 'item2' },
    { icon: '2121.png' }
  ]

  const screen = render(<Tab options={options} currenIndex={-1} />)
  expect(screen.container).toMatchSnapshot()
})
