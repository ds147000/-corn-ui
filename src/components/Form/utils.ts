export function transfromInputValue(value: string): unknown {
  if (!value) return value

  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}
