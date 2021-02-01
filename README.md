# Genese-cli

Genese-cli is a command line interface to ease the use of the other genese packages:
* [genese-complexity](https://github.com/geneseframework/genese-complexity)
* [genese-api](https://github.com/geneseframework/genese-api)
* [genese-duplicates](https://github.com/geneseframework/genese-duplicates)

## 1. Installation

Please install globally the npm module:

```sh
npm i -g genese-cli
```

### 2 Genese complexity

The Genese Complexity module analyzes the cognitive complexity and the cyclomatic complexity of projects.

After installing genese-cli globally, you'll need to install the complexity module.

```sh
npm i -g genese-complexity
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

Genese complexity is available for TypeScript, JavaScript and Java.

You will find more information in the [genese-complexity documentation](https://github.com/geneseframework/genese-complexity).

### 2 Genese API

Genese API module is a code generators which allows you to generate data-services and DTO models from an OpenAPI file.

It's available for Angular and React.

After installing @genese/cli globally, you'll need to install the complexity module.

```sh
npm i -g genese-api
```

Then, you can start the generation with this command-line:

```sh
genese api
```

You will find more information in the [genese-api documentation](https://github.com/geneseframework/genese-api).
