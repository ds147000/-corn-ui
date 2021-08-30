/* eslint-disable no-magic-numbers */
import { SecondScheduler } from '../SecondScheduler'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useFakeTimers()
})

describe('comps/SecondScheduler 秒调度',  () => {
  const secApp = new SecondScheduler()

  test('秒内单次调度', async () => {
    const onSec = jest.fn()
    const destory = secApp.add(onSec)
    jest.advanceTimersByTime(1000)

    expect(onSec).toHaveBeenCalledTimes(1)
    expect(onSec.mock.calls[0][0]).toBe(1000)
    destory()
  })

  test('销毁测试', () => {
    const onSec = jest.fn()
    const destory = secApp.add(onSec)
    jest.advanceTimersByTime(1000)

    expect(onSec).toHaveBeenCalledTimes(1)
    expect(onSec.mock.calls[0][0]).toBe(1000)
    destory()
    jest.advanceTimersByTime(1000)
    expect(onSec).toHaveBeenCalledTimes(1)
  })

  test('多次回调注册', () => {
    const onSec = jest.fn()
    const onSec2 = jest.fn()
    const onSec3 = jest.fn()
    const destory = secApp.add(onSec)
    secApp.add(onSec2)
    secApp.add(onSec3)

    jest.advanceTimersByTime(1000)

    expect(onSec).toHaveBeenCalledTimes(1)
    expect(onSec.mock.calls[0][0]).toBe(1000)
    expect(onSec2).toHaveBeenCalledTimes(1)
    expect(onSec2.mock.calls[0][0]).toBe(1000)
    expect(onSec3).toHaveBeenCalledTimes(1)
    expect(onSec3.mock.calls[0][0]).toBe(1000)

    destory()
    jest.advanceTimersByTime(1000)
    expect(onSec).toHaveBeenCalledTimes(1)
    expect(onSec.mock.calls[0][0]).toBe(1000)
    expect(onSec2).toHaveBeenCalledTimes(2)
    expect(onSec2.mock.calls[1][0]).toBe(1000)
    expect(onSec3).toHaveBeenCalledTimes(2)
    expect(onSec3.mock.calls[1][0]).toBe(1000)

  })

  test('误差时间', () => {
    const onSec = jest.fn()
    const destory = secApp.add(onSec)
    jest.advanceTimersByTime(500)

    expect(onSec).toHaveBeenCalledTimes(0)
    destory()
  })
})

describe('comps/SecondScheduler 分钟调度', () => {
  const secApp = new SecondScheduler(60000)

  test('秒内单次调度', () => {
    const onSec = jest.fn()
    const destory = secApp.add(onSec)
    jest.advanceTimersByTime(1000)

    expect(onSec).toHaveBeenCalledTimes(0)
    destory()
  })

  test('销毁测试', () => {
    const onSec = jest.fn()
    const destory = secApp.add(onSec)
    jest.advanceTimersByTime(60000)

    expect(onSec).toHaveBeenCalledTimes(1)
    expect(onSec.mock.calls[0][0]).toBe(60000)
    destory()
    jest.advanceTimersByTime(60000)
    expect(onSec).toHaveBeenCalledTimes(1)
  })

  test('多次回调注册', () => {
    const onSec = jest.fn()
    const onSec2 = jest.fn()
    const onSec3 = jest.fn()
    const destory = secApp.add(onSec)
    secApp.add(onSec2)
    secApp.add(onSec3)

    jest.advanceTimersByTime(60000)

    expect(onSec).toHaveBeenCalledTimes(1)
    expect(onSec.mock.calls[0][0]).toBe(60000)
    expect(onSec2).toHaveBeenCalledTimes(1)
    expect(onSec2.mock.calls[0][0]).toBe(60000)
    expect(onSec3).toHaveBeenCalledTimes(1)
    expect(onSec3.mock.calls[0][0]).toBe(60000)

    destory()
    jest.advanceTimersByTime(60000)
    expect(onSec).toHaveBeenCalledTimes(1)
    expect(onSec.mock.calls[0][0]).toBe(60000)
    expect(onSec2).toHaveBeenCalledTimes(2)
    expect(onSec2.mock.calls[1][0]).toBe(60000)
    expect(onSec3).toHaveBeenCalledTimes(2)
    expect(onSec3.mock.calls[1][0]).toBe(60000)

  })


})

test('直接销毁', () => {
  const app = new SecondScheduler
  app.destory()
})
