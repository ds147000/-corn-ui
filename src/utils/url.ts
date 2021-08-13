/* eslint-disable no-magic-numbers */
import qs from 'qs'

type ParseResult = {
  href: string
  protocol: string
  hostname: string
  port: string
  pathname: string
  search: string
  hash: string
  host: string
  origin: string
}
/**
 * 解析url
 * @param url
 * @returns
 */
export function parseUrl(url: string): ParseResult {
  if (typeof url !== 'string') url = String(url)

  const obj: ParseResult = {
    href: '',
    protocol: '',
    hostname: '',
    port: '',
    pathname: '',
    search: '',
    hash: '',
    host: '',
    origin: ''
  }

  const match = url.match(/(\w+:)?(\/\/([^:/?#]*))?(:(\d*))?([^?#]*)?(\?[^#]*)?(#.*)?/) as string[]

  obj.href = url
  obj.protocol = match[1] || ''
  obj.hostname = match[3] || ''
  obj.port = match[5] || ''
  obj.pathname = match[6] || ''
  obj.search = match[7] || ''
  obj.hash = match[8] || ''
  obj.host = `${obj.hostname}${obj.port ? ':' + obj.port : ''}`
  obj.origin = `${obj.protocol}${obj.host ? '//' + obj.host : ''}`
  return obj
}

/**
 * 修改url参数
 * @param {string} url
 * @param {object} searchParams ?后面的参数
 * @param {object} hashParams #后面的参数
 */
export function deckUrl(
  url: string,
  searchParams?: Record<string, unknown>,
  hashParams?: Record<string, unknown>
): string {
  const parseResult = parseUrl(url)
  const { origin, pathname, search, hash } = parseResult
  const _urlParams = qs.stringify(Object.assign(qs.parse(search.slice(1)), searchParams))
  const _hashParams = qs.stringify(Object.assign(qs.parse(hash.slice(1)), hashParams))

  const newSearch = _urlParams ? '?' + _urlParams : ''
  const newHash = _hashParams ? '#' + _hashParams : ''

  return origin + pathname + newSearch + newHash
}

export type formatImgOption = {
  /** 阿里云OSS格式化的参数 */
  w?: string
  /** 阿里云OSS格式化的参数 */
  h?: string
  /** 阿里云OSS格式化的参数 */
  m?: string
  /** 阿里云OSS格式化的参数 */
  l?: string
  /** 阿里云OSS格式化的参数 */
  s?: string
  /** 阿里云OSS格式化的参数 */
  format?: string
  /** 阿里云OSS格式化的参数 */
  limit?: string
}

const OssImgResizeParams: Array<keyof formatImgOption> = [ 'm', 'w', 'h', 'l', 's', 'limit' ]
/**
 * 格式化图片链接
 * @param url
 * @param options
 * @returns
 */
export function formatImg(url: string, options?: formatImgOption): string {

  if (!url) return ''

  if (typeof url !== 'string') url = String(url)

  if (url.indexOf('data:') === 0) return url

  if (url.indexOf('//assets.xrkmm.cn') === -1 && url.indexOf('//xrk-') === -1)
    return url

  if (options) {

    let process = ''

    OssImgResizeParams.forEach((key) => {
      if (options[key] !== undefined) {
        process += `,${key}_${options[key]}`
      }
    })

    if (process) process = '/resize' + process

    if (options.format) process += '/format,' + options.format

    if (process) {
      url = deckUrl(url, { 'x-oss-process': undefined })

      url += (url.indexOf('?') !== -1 ? '&' : '?') + 'x-oss-process=image' + process
    }
  }

  return url
}
