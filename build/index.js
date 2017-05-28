const webpack = require('webpack')
const nodemon = require('nodemon')
const path = require('path')
const chalk = require('chalk')
const ora = require('ora')
const argv = require('yargs').argv
const config = require('./webpack.config.js')

const log = console.log
const WATCH = argv.watch

if (WATCH) {
  let runner
  const run = () => nodemon({
    execMap: { js: 'node' },
    script: path.join(__dirname, '../dist/index.js'),
    ignore: ['*'],
    watch: ['nothing/'],
    ext: 'noop',
  })

  const starter = ora('Building...').start()
  webpack(config).watch(100, () => {
    if (runner) {
      log(chalk.gray('Restarting...'))
      nodemon.restart()
    } else {
      starter.succeed('Built!')
      runner = run()
    }
  })

  process.once('SIGINT', () => {
    log()
    log(chalk.yellow('👋  Goodbye'))
    if (runner) runner.once('exit', process.exit)
    else process.exit()
  })
} else {
  const starter = ora('Building...').start()
  webpack(config).run(() => {
    starter.succeed('Built!')
  })
}
