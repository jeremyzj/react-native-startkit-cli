#!/usr/bin/env node

/**
 * Module dependencies.
 */
'use strict'

process.env.NODE_PATH = __dirname + '/../node_modules/'
var program = require('commander')

program.version(require('./package').version)
program.usage('<command>')

program
  .command('init')
  .description('init a project fro react native start kit')
  .action(() => {
    require('./command/init')()
  })

program.parse(process.argv)

if(!program.args.length){
  program.help()
}
