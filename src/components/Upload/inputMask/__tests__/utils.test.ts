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
  [[new File([''], '123.jpg', { type: 'image/jpeg' })], 'image', true],
  [[new File([''], '123.jpg', { type: 'image/jpg' })], 'image', true],
  [[new File([''], '123.jpg', { type: 'image/gif' })], 'image', true],
  [[new File([''], '123.jpg', { type: 'image/png' })], 'image', true],
  [[new File([''], '123.jpg', { type: 'image/bmp' })], 'image', true],
  [[new File([''], '123.mp4', { type: 'video/mp4' })], 'video', false],
  [[new File([''], '123.jpg', { type: 'image/jpeg' })], 'video', false],
  [[new File([''], '123.jpg', { type: 'image/jpg' })], 'video', false],
  [[new File([''], '123.jpg', { type: 'image/gif' })], 'video', false],
  [[new File([''], '123.jpg', { type: 'image/png' })], 'video', false],
  [[new File([''], '123.jpg', { type: 'image/bmp' })], 'video', false],
  [null, 'image', false],
  [{}, 'image', false],
  [null, 'video', false],
  [{}, 'video', false],
  [null, 'all', false],
  [{}, 'all', false],
  [[new File([''], '123.mp4', { type: 'video/mp4' })], 'video', true],
  [[new File([''], '123.mp4', { type: 'video/mp4' })], 'all', true],
  [[new File([''], '123.mp3', { type: 'video/mp3' })], 'video', false],
  [[new File([''], '123.jpg', { type: 'image/jpeg' })], 'all', true],
  [[new File([''], '123.jpg', { type: 'image/jpg' })], 'all', true],
  [[new File([''], '123.jpg', { type: 'image/gif' })], 'all', true],
  [[new File([''], '123.jpg', { type: 'image/png' })], 'all', true],
  [[new File([''], '123.jpg', { type: 'image/bmp' })], 'all', true],
  [[new File([''], '123.mp4', { type: 'video/mp4' })], 'all', true],
  [[new File([''], '123.jpg', { type: 'image/jpeg' }), new File([''], '123.mp4', { type: 'video/mp4' })], 'image', false],
  [[new File([''], '123.jpg', { type: 'image/jpeg' }), new File([''], '123.mp4', { type: 'video/mp4' })], 'all', true],
])
