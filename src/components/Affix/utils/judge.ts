export const judge = (
  rect: DOMRect,
  rootRect: DOMRectReadOnly,
  position: string,
  offset: number
): boolean => {
  if (!rect) return false

  switch(position) {
    case 'top':
      return (rect.top - offset) < rootRect.top

    case 'bottom':
      return (rect.bottom + offset) > rootRect.bottom

    case 'left':
      return (rect.left - offset) < rootRect.left

    default:
      return (rect.right + offset) > rootRect.right
  }
}
