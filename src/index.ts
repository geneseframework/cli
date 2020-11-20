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
    .option('-md, --markdown', 'Markdown type report', false)
    .option('-c, --console', 'Disable report generation and outputs to console', false)
    .option('-r, --refactor', 'EXPERIMENTAL! Enable refactoring report generation', false)
    .action((pathToAnalyse, options) => {
        const complexityPath = `${__dirname}/../../../complexity`;
        const cpxPkg = require(`${complexityPath}/dist/package.json`);
        spawn('node', [
            `${complexityPath}/${cpxPkg.bin}`,
            pathToAnalyse ?? '.',
            options.language,
            options.markdown,
            options.console,
            options.refactor
        ], {
            stdio: ['inherit', 'inherit', 'inherit']
        });
    });

program.command('api')
    .description('Generates Angular or React Api')
    .action(() => {

    });

program.parse(process.argv);
