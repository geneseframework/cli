<p align="center">
    <img src="https://raw.githubusercontent.com/geneseframework/mapper/develop/docs/logo-genese-150x150.png" alt="genese logo">
</p>

# @genese/cli [![npm version](https://badge.fury.io/js/%40genese%2Fcli.svg)](https://badge.fury.io/js/%40genese%2Fcli)

`@genese/cli` is a command line interface to ease the use of [@genese](https://www.npmjs.com/package/genese) packages:
* [@genese/complexity](https://github.com/geneseframework/complexity)
* [@genese/api](https://github.com/geneseframework/api)

## Installation

Please install globally the npm module:

```sh
npm i -g @genese/cli
```

### @genese/complexity

The [@genese/complexity](https://www.npmjs.com/package/@genese/complexity) module analyzes the cognitive complexity and the cyclomatic complexity of projects in different languages.

After installing `@genese/cli` globally, you must install the complexity module.

```sh
npm i -g @genese/complexity
```

Then, you can launch the analysis with this command-line:

```sh
genese cpx [pathDir]
```

#### Options

| Option | Possible values | Default | Description |
| ----- | ----- | ----- | ----- |
| -l --language <language> | ts, js, tsx, jsx, java | ts | Start the analysis for the given language |
| -m --markdown | | | Generate a Markdown report instead of a HTML report |
| -c --console | | | Disable report generation and output result to console |
| -r --refactor | | | Enable refactoring report generation |

`@genese/complexity` is available for TypeScript, JavaScript and Java.

You will find more information in the [@genese/complexity documentation](https://github.com/geneseframework/complexity).

### @genese/api

[@genese/api](https://www.npmjs.com/package/@genese/api) is a code generator which allows you to generate data-services and DTO models from an OpenAPI file.

This module is available for Angular and React.

After installing `@genese/cli` globally, you'll need to install the `@genese/api` module.

```sh
npm i -g @genese/api
```

Then, you can start the generation with this command-line:

```sh
genese api
```

You will find more information in the [@genese/api documentation](https://github.com/geneseframework/api).
