import { checkOpenMp } from '../utils'

describe.each([
  [ 'openmp://sasacs/sa?sa', true ],
  [ 'openmp//sasacs/sa?sa', false ],
  [ 'openmpsasacs/sa?sa', false ],
  [ 'openmp:sasacs/sa?sa', false ],
  [ 'openmp:/sasacs/sa?sa', false ],
  [ 'openmp//sasacs/sa?sa/openmp://', false ],
  [ '', false ],
])('Link/checkOpenMp', (value, expected) => {
  test(`${value} => ${expected}`, () => {
    expect(checkOpenMp(value)).toBe(expected)
  })
})
