import { parseUrl, deckUrl, formatImg } from '../url'

describe.each([
  [ 'https://baidu.com', {
    href: 'https://baidu.com',
    protocol: 'https:',
    hostname: 'baidu.com',
    port: '',
    pathname: '',
    search: '',
    hash: '',
    host: 'baidu.com',
    origin: 'https://baidu.com'
  }
  ],
  [
    '', {
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
  ],
  [
    'https://baidu.com:8080', {
      href: 'https://baidu.com:8080',
      protocol: 'https:',
      hostname: 'baidu.com',
      port: '8080',
      pathname: '',
      search: '',
      hash: '',
      host: 'baidu.com:8080',
      origin: 'https://baidu.com:8080'
    }
  ],
  [
    'https://baidu.com?a=1', {
      href: 'https://baidu.com?a=1',
      protocol: 'https:',
      hostname: 'baidu.com',
      port: '',
      pathname: '',
      search: '?a=1',
      hash: '',
      host: 'baidu.com',
      origin: 'https://baidu.com'
    }
  ],
  [
    'https://baidu.com?a=1&b=1', {
      href: 'https://baidu.com?a=1&b=1',
      protocol: 'https:',
      hostname: 'baidu.com',
      port: '',
      pathname: '',
      search: '?a=1&b=1',
      hash: '',
      host: 'baidu.com',
      origin: 'https://baidu.com'
    }
  ],
  [
    'https://baidu.com?a=1&b=1#user', {
      href: 'https://baidu.com?a=1&b=1#user',
      protocol: 'https:',
      hostname: 'baidu.com',
      port: '',
      pathname: '',
      search: '?a=1&b=1',
      hash: '#user',
      host: 'baidu.com',
      origin: 'https://baidu.com'
    }
  ],
  [
    'https://baidu.com/search?a=1&b=1#user', {
      href: 'https://baidu.com/search?a=1&b=1#user',
      protocol: 'https:',
      hostname: 'baidu.com',
      port: '',
      pathname: '/search',
      search: '?a=1&b=1',
      hash: '#user',
      host: 'baidu.com',
      origin: 'https://baidu.com'
    }
  ],
  [
    'https://baidu.com:9000/search?a=1&b=1#user', {
      href: 'https://baidu.com:9000/search?a=1&b=1#user',
      protocol: 'https:',
      hostname: 'baidu.com',
      port: '9000',
      pathname: '/search',
      search: '?a=1&b=1',
      hash: '#user',
      host: 'baidu.com:9000',
      origin: 'https://baidu.com:9000'
    }
  ],
  [
    'http://baidu.com:9000/search?a=1&b=1#user', {
      href: 'http://baidu.com:9000/search?a=1&b=1#user',
      protocol: 'http:',
      hostname: 'baidu.com',
      port: '9000',
      pathname: '/search',
      search: '?a=1&b=1',
      hash: '#user',
      host: 'baidu.com:9000',
      origin: 'http://baidu.com:9000'
    }
  ],
  [
    'sabsaca', {
      href: 'sabsaca',
      protocol: '',
      hostname: '',
      port: '',
      pathname: 'sabsaca',
      search: '',
      hash: '',
      host: '',
      origin: ''
    }
  ]
])('parseUrl', (value, expected) => {

  test(value, () => {
    expect(parseUrl(value)).toEqual(expected)
  })
})

test('empty', () => {
  expect(parseUrl(null as unknown as string)).toEqual({
    href: 'null',
    protocol: '',
    hostname: '',
    port: '',
    pathname: 'null',
    search: '',
    hash: '',
    host: '',
    origin: ''
  })
})

describe.each([
  [ 'https://baidu.com', undefined, undefined, 'https://baidu.com' ],
  [ 'https://baidu.com', {}, undefined, 'https://baidu.com' ],
  [ 'https://baidu.com', {}, {}, 'https://baidu.com' ],
  [ 'https://baidu.com', { a: undefined }, {}, 'https://baidu.com' ],
  [ 'https://baidu.com?user=1', undefined, undefined, 'https://baidu.com?user=1' ],
  [ 'https://baidu.com#user=hash', undefined, undefined, 'https://baidu.com#user=hash' ],
  [ 'https://baidu.com?tt=1#user=hash', undefined, undefined, 'https://baidu.com?tt=1#user=hash' ],
  [ 'https://baidu.com', { a: 1 }, undefined, 'https://baidu.com?a=1' ],
  [ 'https://baidu.com', { a: 1, b: 2, c: 3 }, undefined, 'https://baidu.com?a=1&b=2&c=3' ],
  [ 'https://baidu.com', undefined, { user:1 }, 'https://baidu.com#user=1' ],
  [ 'https://baidu.com', { a: 1, b: 2, c: 3 }, { user: 1 }, 'https://baidu.com?a=1&b=2&c=3#user=1' ],
  [ 'https://baidu.com?tt=1#user=hash', { a: 1, b: 2, c: 3 },
    undefined,
    'https://baidu.com?tt=1&a=1&b=2&c=3#user=hash'
  ],
  [ 'https://baidu.com?tt=1#user=hash', { a: 1, b: 2, c: 3 },
    { name: 100 },
    'https://baidu.com?tt=1&a=1&b=2&c=3#user=hash&name=100'
  ],

])('deckUrl', (url, search, hash, expected) => {

  test(` => ${url}, ${search}, ${hash}`, () => {
    expect(deckUrl(url, search, hash)).toBe(expected)
  })
})

describe.each([
  [ '', undefined, '' ],
  [ true, undefined, 'true' ],
  [ 'https://baiduc.com', undefined, 'https://baiduc.com' ],
  [ 'data:sasa', undefined, 'data:sasa' ],
  [ 'data:sasa', { w: '1' }, 'data:sasa' ],
  [ 'https://baiduc.com', { w: '100' }, 'https://baiduc.com' ],
  [ 'https://assets.xrkmm.cn/logo.jpg', undefined, 'https://assets.xrkmm.cn/logo.jpg' ],
  [ 'https://assets.xrkmm.cn/logo.jpg',
    { w: '100' },
    'https://assets.xrkmm.cn/logo.jpg?x-oss-process=image/resize,w_100'
  ],
  [ 'https://assets.xrkmm.cn/logo.jpg',
    { h: '100' },
    'https://assets.xrkmm.cn/logo.jpg?x-oss-process=image/resize,h_100'
  ],
  [ 'https://assets.xrkmm.cn/logo.jpg',
    { l: '100' },
    'https://assets.xrkmm.cn/logo.jpg?x-oss-process=image/resize,l_100'
  ],
  [ 'https://assets.xrkmm.cn/logo.jpg',
    { s: '100' },
    'https://assets.xrkmm.cn/logo.jpg?x-oss-process=image/resize,s_100'
  ],
  [ 'https://assets.xrkmm.cn/logo.jpg',
    { m: 'fill' },
    'https://assets.xrkmm.cn/logo.jpg?x-oss-process=image/resize,m_fill'
  ],
  [ 'https://assets.xrkmm.cn/logo.jpg',
    { limit: '20000' },
    'https://assets.xrkmm.cn/logo.jpg?x-oss-process=image/resize,limit_20000'
  ],
  [ 'https://assets.xrkmm.cn/logo.jpg',
    { },
    'https://assets.xrkmm.cn/logo.jpg'
  ],
  [ 'https://assets.xrkmm.cn/logo.jpg',
    { format: 'webp' },
    'https://assets.xrkmm.cn/logo.jpg?x-oss-process=image/format,webp'
  ],
  [ 'https://assets.xrkmm.cn/logo.jpg?time=100',
    { format: 'webp' },
    'https://assets.xrkmm.cn/logo.jpg?time=100&x-oss-process=image/format,webp'
  ]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
])('formatImg', (value: any, options, expected) => {

  test(`=> ${value} ${options}`, () => {
    expect(formatImg(value, options)).toBe(expected)
  })
})
