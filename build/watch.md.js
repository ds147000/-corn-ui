const ora = require('ora')
const shell = require('shelljs')

const spinner = ora()

const buildCSS = () => {
  spinner.start('build css...')
  shell.exec('npm run build:doc', { silent: false },  () => {
    spinner.succeed()
  })
}

setInterval(() => {
  buildCSS()
}, 10000)

buildCSS()
