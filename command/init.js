const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const config = require('./templates')
const chalk = require('chalk')

module.exports = () => {
 co(function *() {
    // 处理用户输入
    let projectName = yield prompt('Project name: ')
    let gitUrl
    
    gitUrl = config.project
    console.log('gitUrl',gitUrl)

    // git命令，远程拉取项目并自定义项目名
    let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName}`

    console.log(chalk.white('\n Start generating...'))

    exec(cmdStr, (error, stdout, stderr) => {
      if (error) {
        console.log(error)
        process.exit()
      }
      console.log(chalk.green('\n √ Generation completed!'))
      console.log(`\n please cd ${projectName} && npm install \n`)
      process.exit()
    })
  })
}