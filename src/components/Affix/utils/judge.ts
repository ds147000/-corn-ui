const HIDE_VALUE = 0

export const judge = (rect: DOMRect, position: string, offset: number): boolean => {
  if (!rect) return false

  switch(position) {
    case 'top':
      return (rect.top - offset) < HIDE_VALUE

    case 'bottom':
      return (rect.bottom - offset) < HIDE_VALUE

    case 'left':
      return (rect.left - offset) < HIDE_VALUE

    default:
      return (rect.right - offset) < HIDE_VALUE
  }
}
