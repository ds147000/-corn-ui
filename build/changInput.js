export default function ChangeInput() {
  return {
    name: 'chanegInput',
    transform(code = '') {
      if (/\@tarojs\/components/.test(code)) {
        const match = code.match(/import.*?\@tarojs\/components'/)
        const imporList = match[0].replace(/import.*?{/, '').replace(/}.*/, '').split(',')
        const newImportString = imporList.map((item) => `import ${item.trim()} from '@tarojs/components-react/dist/${item.trim()}/index.js'`).join(`
`)
        const newCode = code.replace(/import.*?\@tarojs\/components'/, newImportString)
        return { code: newCode }
      }
    }
  }
}
