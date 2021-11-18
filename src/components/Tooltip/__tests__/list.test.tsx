import { getArrowPosition, getListPosition } from '../list'
import { getScale } from '../utils'

describe.each([
  [{ width: 100, height: 40, offsetTop: 100, offsetLeft: 0 }, 'bottom', { top: 140, left: 50 },],
  [{ width: 50, height: 40, offsetTop: 240, offsetLeft: 100 }, 'bottom', { top: 280, left: 125 }],
  [{ width: 30, height: 40, offsetTop: 240, offsetLeft: 0 }, 'bottom', { top: 280, left: 15 }],
  [{ width: 30, height: 40, offsetTop: 240, offsetLeft: 350 }, 'bottom', { top: 280, left: 365 }],
  [{ width: 100, height: 40, offsetTop: 100, offsetLeft: 0 }, 'top', { top: 100, left: 50 }],
  [{ width: 50, height: 40, offsetTop: 240, offsetLeft: 100 }, 'top', { top: 240, left: 125 }],
  [{ width: 30, height: 40, offsetTop: 240, offsetLeft: 0 }, 'top', { top: 240, left: 15 }],
  [{ width: 30, height: 40, offsetTop: 240, offsetLeft: 350 }, 'top', { top: 240, left: 365 }],
  [{ width: 0, height: 40, offsetTop: 240, offsetLeft: 0 }, 'top', { top: 240, left: 0 }]
])('getArrowPosition(%s, %s): %s', (rect: any, align: any, expected) => {
  test(`run`, () => {
    expect(getArrowPosition(rect, align)).toEqual(expected)
  })
})

describe.each([
  [{ width: 100, height: 40, offsetTop: 100, offsetLeft: 0 }, 'bottom', { top: 145, left: 5 }],
  [{ width: 50, height: 40, offsetTop: 240, offsetLeft: 100 }, 'bottom', { top: 285, left: 80 }],
  [{ width: 30, height: 40, offsetTop: 240, offsetLeft: 0 }, 'bottom', { top: 285, left: -30 }],
  [{ width: 30, height: 40, offsetTop: 240, offsetLeft: 350 }, 'bottom', { top: 285, left: 320 }],
  [{ width: 100, height: 40, offsetTop: 100, offsetLeft: 0 }, 'top', { top: 100, left: 5 }],
  [{ width: 50, height: 40, offsetTop: 240, offsetLeft: 100 }, 'top', { top: 240, left: 80 }],
  [{ width: 30, height: 40, offsetTop: 240, offsetLeft: 0 }, 'top', { top: 240, left: -30 }],
  [{ width: 30, height: 40, offsetTop: 240, offsetLeft: 350 }, 'top', { top: 240, left: 320 }],
  [{ width: 0, height: 40, offsetTop: 240, offsetLeft: 0 }, 'top', { top: 240, left: -45 }]
])('getListPosition(%s, %s, %s): %s', (rect: any, align: any, expected) => {
  (window as any).innerWidth = 375
  test(`run`, () => {
    expect(getListPosition(rect, align)).toEqual(expected)
  })
})

test('getScale sap', () => {
  const width = (window.innerWidth || 375)
  expect(getScale(100)).toBe((width > 640 ? 640 : width) / 750 * 100)
})


test('getScale sap to max', () => {
  (window as any).innerWidth = 1000
  expect(getScale(100)).toBe(640 / 750 * 100)
})

test('getScale sap to min', () => {
  (window as any).innerWidth = 400
  expect(getScale(100)).toBe(400 / 750 * 100)
})


