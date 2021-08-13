import getObserver from '../utils/observer'

describe('observer', () => {

  test('setId, getId', () => {
    const observer = getObserver()
    const div = document.createElement('img')
    observer.setId(div, '111')
    expect(observer.getId(div)).toBe('111')
  })

  test('setId, getId', () => {
    const observer = getObserver()
    const div = document.createElement('img')
    expect(observer.getId(div)).toBe('')
  })

  test('call', async () => {
    const onShow = jest.fn()
    const observer = getObserver()
    const div = document.createElement('img')
    observer.add(div, onShow)
    await new Promise((res) => setTimeout(res, 1000))
    expect(onShow).toHaveBeenCalledTimes(1)
  })

  test('destory', async () => {
    const onShow = jest.fn()
    const observer = getObserver()
    const div = document.createElement('img')
    const destory = observer.add(div, onShow)
    if (destory) destory()
    await new Promise((res) => setTimeout(res, 1000))
    expect(onShow).toHaveBeenCalledTimes(0)
  })

  test('error', async () => {
    const onShow = jest.fn()
    const observer = getObserver()
    const div = document.createElement('img')
    observer.add(div, onShow)
    observer.setId(div, '111111')
    await new Promise((res) => setTimeout(res, 1000))
    expect(onShow).toHaveBeenCalledTimes(0)
  })

})
