const global = require('glob')
const ora = require('ora')
const { resolveApp, removeDir, makeDir, getMarkDownTemplate, getMarkDownToTSX, getDemoRoutes } = require('./utils')

const main = async () => {
  const spinner = ora()

  spinner.start('获取demo文件')
  const demoFileList = global.sync(resolveApp('src/components/**/demo/*.md'));
  spinner.succeed('获取demo文件成功')

  spinner.start('创建md视图文件目录')
  await removeDir(resolveApp('docs/src/views'))
  await makeDir(resolveApp('docs/src/views'))
  spinner.succeed()

  spinner.start('解析组件列表')
  const _componentsFiles = demoFileList.map((item) => {
    return item.replace(/.*?src\/components\//, '').replace(/\/demo.*/, '')
  })
  const componentsFiles = new Set(_componentsFiles)
  spinner.succeed('解析组件列表成功')

  componentsFiles.forEach(async (item) => {
    spinner.start(`生成${item}组件的文档`)
    const dir = resolveApp('docs/src/views/' + item)
    await makeDir(dir)
    const demoFiles = demoFileList.filter((file) => new RegExp(`src/components/${item}/demo/.*`).test(file))

    await getMarkDownTemplate(demoFiles, dir)
    spinner.succeed()
  })


  spinner.start('写入demo的路由配置')
  await getDemoRoutes([...componentsFiles], resolveApp('docs/src/router/components.tsx'))
  spinner.succeed()

  spinner.start('生成其他说明文档')
  await getMarkDownToTSX(resolveApp('src/md/introduce.md'), resolveApp('docs/src/components/introduce/index.tsx'))
  await getMarkDownToTSX(resolveApp('src/md/start.md'), resolveApp('docs/src/components/start/index.tsx'))
  await getMarkDownToTSX(resolveApp('./PUBLISH.md'), resolveApp('docs/src/components/Publish/index.tsx'))
  await getMarkDownToTSX(resolveApp('./COMPONENT.md'), resolveApp('docs/src/components/Md/index.tsx'))
  await getMarkDownToTSX(resolveApp('./CHANGELOG.md'), resolveApp('docs/src/components/history/index.tsx'))
  spinner.succeed()

  spinner.succeed('💥 完成文档生成')
}

main()
