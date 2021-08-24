import { judge } from '../judge'

describe.each([
  [ { top: 0 }, 'top', 1, true ],
  [ { bottom: 0 }, 'bottom', 1, true ],
  [ { left: 0 }, 'left', 1, true ],
  [ { right: 0 }, 'right', 1, true ],
  [ { top: -40 }, 'top', 0, true ],
  [ { bottom: -40 }, 'bottom', 0, true ],
  [ { right: -40 }, 'right', 0, true ],
  [ { left: -40 }, 'left', 0, true ],
  [ { left: 100 }, 'left', 0, false ],
  [ { top: 100 }, 'top', 0, false ],
  [ { bottom: 100 }, 'bottom', 0, false ],
  [ { right: 100 }, 'right', 0, false ],
  [ null, 'top', 0, false ]
])('judge', (rect: any, position, offset, expected) => {
  test(`${JSON.stringify(rect)}, ${position} ${expected}`, () => {
    expect(judge(rect, position, offset)).toBe(expected)
  })
})
