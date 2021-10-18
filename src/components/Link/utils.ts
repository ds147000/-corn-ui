/* eslint-disable no-magic-numbers */
import { parseUrl } from '../../utils/url'

export const OpenHostSuffix = 'openmp://'

export function checkOpenMp(url: string): boolean {
  return url.indexOf(OpenHostSuffix) === 0
}

export function checkExtendsDomain(url: string): boolean {
  if (/^(http|\/\/)/.test(url)) return true

  const { hostname } = parseUrl(url)
  return hostname !== window.location.hostname
}
