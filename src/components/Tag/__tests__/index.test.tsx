import React from 'react'
import { render } from '@testing-library/react'
import Tag from '../index'

describe('Tag', () => {
  test('base', () => {
    const screen = render(<Tag>3-9岁</Tag>)
    expect(screen).toMatchSnapshot()
  })

  test('size', () => {
    const screen = render(
      <>
        <Tag size="large">3-9岁</Tag>
        <Tag size="middle">3-9岁</Tag>
        <Tag size="small">3-9岁</Tag>
        <Tag size="mini">3-9岁</Tag>
      </>
    )
    expect(screen).toMatchSnapshot()
  })

  test('type', () => {
    const screen = render(
      <>
        <Tag type="error">3-9岁</Tag>
        <Tag type="link">3-9岁</Tag>
        <Tag type="pop">3-9岁</Tag>
        <Tag type="primary">3-9岁</Tag>
        <Tag type="warn">3-9岁</Tag>
        <Tag type="urgent">3-9岁</Tag>
        <Tag type="activity">3-9岁</Tag>
      </>
    )
    expect(screen).toMatchSnapshot()
  })

  test('type', () => {
    const screen = render(
      <>
        <Tag type="error" ghost>3-9岁</Tag>
        <Tag type="link" ghost>3-9岁</Tag>
        <Tag type="pop" ghost>3-9岁</Tag>
        <Tag type="primary" ghost>3-9岁</Tag>
        <Tag type="warn" ghost>3-9岁</Tag>
        <Tag type="urgent" ghost >3-9岁</Tag>
      </>
    )
    expect(screen).toMatchSnapshot()
  })
})
