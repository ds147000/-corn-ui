import { getFileSuffix, checkFileType } from '../utils/suffix'

describe.each([
  ['all', 'video/*,image/*'],
  [null, 'video/*,image/*'],
  ['video', 'video/*'],
  ['image', 'image/*']
])('getFileSuffix', (type: any, expected) => {
  test('', () => {
    expect(getFileSuffix(type)).toBe(expected)
  })
})

describe.each([
  [null, 'all', true],
  [[new File([''], '123.jpg', { type: 'image/jpeg' })], 'image', false],
  [[new File([''], '123.jpg', { type: 'image/jpg' })], 'image', false],
  [[new File([''], '123.jpg', { type: 'image/gif' })], 'image', false],
  [[new File([''], '123.jpg', { type: 'image/png' })], 'image', false],
  [[new File([''], '123.jpg', { type: 'image/bmp' })], 'image', false],
  [[new File([''], '123.mp4', { type: 'video/mp4' })], 'video', false],
  [[new File([''], '123.jpg', { type: 'image/jpeg' })], 'video', true],
  [[new File([''], '123.jpg', { type: 'image/jpg' })], 'video', true],
  [[new File([''], '123.jpg', { type: 'image/gif' })], 'video', true],
  [[new File([''], '123.jpg', { type: 'image/png' })], 'video', true],
  [[new File([''], '123.jpg', { type: 'image/bmp' })], 'video', true],
  [null, 'image', true],
  [{}, 'image', true],
  [null, 'video', true],
  [{}, 'video', true],
  [null, 'all', true],
  [{}, 'all', true],
  [[new File([''], '123.mp4', { type: 'video/mp4' })], 'video', false],
  [[new File([''], '123.mp4', { type: 'video/mp4' })], 'all', false],
  [[new File([''], '123.mp3', { type: 'video/mp3' })], 'video', true],
  [[new File([''], '123.jpg', { type: 'image/jpeg' })], 'all', false],
  [[new File([''], '123.jpg', { type: 'image/jpg' })], 'all', false],
  [[new File([''], '123.jpg', { type: 'image/gif' })], 'all', false],
  [[new File([''], '123.jpg', { type: 'image/png' })], 'all', false],
  [[new File([''], '123.jpg', { type: 'image/bmp' })], 'all', false],
  [[new File([''], '123.mp4', { type: 'video/mp4' })], 'all', false],
  [[new File([''], '123.jpg', { type: 'image/jpeg' }), new File([''], '123.mp4', { type: 'video/mp4' })], 'image', true],
  [[new File([''], '123.jpg', { type: 'image/jpeg' }), new File([''], '123.mp4', { type: 'video/mp4' })], 'all', false],
  [[null], 'all', true]
])('checkFileType', (file: any, type: any, expected) => {
  test(`${file}, ${type}`, () => {
    expect(checkFileType(file, type)).toBe(expected)
  })
})
