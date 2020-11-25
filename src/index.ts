#!/usr/bin/env node

import * as program from 'commander';

const chalk = require('chalk');
const pkg = require('../package.json');
const { spawn } = require('child_process');

console.log(chalk.yellow('WELCOME TO GENESE CLI'));

program.version(pkg.version)
    .description(pkg.description);

program.command('cpx [pathToAnalyse]')
    .description('Calculates Complexity Index and cyclomatic complexity')
    .option('-l, --language <language>', 'Language: js, ts, jsx, tsx or java', 'ts')
    .option('-md, --markdown', 'Markdown type report')
    .option('-c, --console', 'Disable report generation and outputs to console')
    .option('-r, --refactor', 'EXPERIMENTAL! Enable refactoring report generation')
    .action((pathToAnalyse, options) => {
        const subCommandPath = `${__dirname}/../../../complexity`;
        const subCommandPkg = require(`${subCommandPath}/dist/package.json`);
        spawn('node', [
            `${subCommandPath}/${subCommandPkg.bin}`,
            pathToAnalyse ?? '.',
            options.language ?? false,
            options.markdown ?? false,
            options.console ?? false,
            options.refactor ?? false
        ], {
            stdio: ['inherit', 'inherit', 'inherit']
        });
    });

program.command('api')
    .description('Generates Angular or React Api')
    .action(() => {
        const subCommandPath = `${__dirname}/../../../api`;
        const subCommandPkg = require(`${subCommandPath}/dist/package.json`);
        spawn('node', [
            `${subCommandPath}/${subCommandPkg.bin}`,
        ], {
            stdio: ['inherit', 'inherit', 'inherit']
        });
    });

program.parse(process.argv);
