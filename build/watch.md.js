const ora = require('ora')
const shell = require('shelljs')

const spinner = ora()

const build = () => {
  spinner.start('build css...')
  shell.exec('npm run build:doc', { silent: false },  () => {
    spinner.succeed()
    setTimeout(() => {
      build()
    }, 10000)
  })
}

build()
