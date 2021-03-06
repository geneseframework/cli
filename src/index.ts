#!/usr/bin/env node

import * as program from 'commander';
import { platformPath } from './utils/paths.util';

const chalk = require('chalk');
const pkg = require('../package.json');
const { spawn } = require('child_process');

console.log(chalk.yellow('Welcome to @genese cli'));

program.version(pkg.version)
    .description(pkg.description);

program.command('cpx [pathToAnalyse]')
    .description('Calculates Complexity Index and cyclomatic complexity')
    .option('-l, --language <language>', 'Language: js, ts, jsx, tsx or java', 'ts')
    .option('-f, --framework <framework>', 'Framework: angular or react')
    .option('-md, --markdown', 'Markdown type report')
    .option('-c, --console', 'Disables report generation and outputs to console')
    .option('-r, --refactor', 'EXPERIMENTAL! Enables refactoring report generation')
    .action((pathToAnalyse, options) => {
        const subCommandPath = `${__dirname}${platformPath(`/../../../complexity`)}`;
        const subCommandPkg = require(`${subCommandPath}${platformPath(`/dist/package.json`)}`);
        spawn('node', [
            `${subCommandPath}/${subCommandPkg.bin}`,
            pathToAnalyse ?? '.',
            options.language ?? false,
            options.markdown ?? false,
            options.console ?? false,
            options.refactor ?? false,
            options.framework ?? false,
        ], {
            stdio: ['inherit', 'inherit', 'inherit']
        });
    });

program.command('api')
    .description('Generates Angular or React Api')
    .option('--jsonApiPath <jsonApiPath>')
    .option('--datatypeExtension <datatypeExtension>')
    .option('--serviceExtension <serviceExtension>')
    .option('--datatypesOutput <datatypesOutput>')
    .option('--servicesOutput <servicesOutput>')
    .option('--splitServices')
    .action((options) => {
        const subCommandPath = `${__dirname}${platformPath(`/../../../api`)}`;
        const subCommandPkg = require(`${subCommandPath}${platformPath(`/dist/package.json`)}`);
        spawn('node', [
            `${subCommandPath}/${subCommandPkg.bin}`,
            options.jsonApiPath,
            options.datatypeExtension,
            options.serviceExtension,
            options.datatypesOutput,
            options.servicesOutput,
            options.splitServices
        ], {
            stdio: ['inherit', 'inherit', 'inherit']
        });
    })

program.parse(process.argv);
