#!/usr/bin/env node


const chalk = require('chalk');
const program = require('commander');
const pkg = require('../package.json');

console.log(chalk.yellow('WELCOME TO GENESE CLI'));

program
    .version(pkg.version)
    .description(pkg.description);

program
    .command('cpx [pathToAnalyse]')
    .description('Calculates Complexity Index and cyclomatic complexity')
    .option('-l, --language <language>', 'Language: js, ts, jsx, tsx or java', 'ts')
    .option('-md, --markdown', 'Markdown type report')
    .option('-c, --console', 'Disable report generation and outputs to console')
    .option('-r, --refactor', 'EXPERIMENTAL! Enable refactoring report generation')
    .action((pathToAnalyse, options) => {

    });

program
    .command('api')
    .description('Generates Angular or React Api')
    .action(() => {

    });

program.parse(process.argv);
