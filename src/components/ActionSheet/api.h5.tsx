import { ShowActionSheet } from './interface'

const showActionSheet: ShowActionSheet = async (option) => {
  console.error(option)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Promise.resolve({} as any)
}

export default showActionSheet
