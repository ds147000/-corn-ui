const MAX_WINDOW_WEITDH = 640
const UI_WIDTH = 750

export function getScale(value: number): number {
  if (typeof window === 'undefined') return value
  const maxWidth = (window.innerWidth > MAX_WINDOW_WEITDH ? MAX_WINDOW_WEITDH : window.innerWidth)
  return maxWidth / UI_WIDTH * value
}
