export const OpenHostSuffix = 'openmp://'

export function checkOpenMp(url: string): boolean {
  // eslint-disable-next-line no-magic-numbers
  return url.indexOf(OpenHostSuffix) === 0
}
