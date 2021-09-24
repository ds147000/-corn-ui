/* eslint-disable no-magic-numbers */
import { parseUrl } from '../../utils/url'

export const OpenHostSuffix = 'openmp://'

export function checkOpenMp(url: string): boolean {
  return url.indexOf(OpenHostSuffix) === 0
}

export function checkExtendsDomain(url: string): boolean {
  if (url.indexOf('http') !== 0) return false

  const { hostname } = parseUrl(url)
  return hostname !== window.location.hostname
}
