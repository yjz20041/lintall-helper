#!/usr/bin/env node
const program = require('commander');
const command_install = require('../command/install');

program.version(require('../package').version);

program.usage('<command>')

program
  .command('install')
  .description('安装（复制）对应lint文件')
  .action(command_install);

program.parse(process.argv);