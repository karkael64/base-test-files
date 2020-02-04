# Base-Test-Files

Helps to translate files with Babel.js and unify them in a single script file

## Table of Contents

1. Installation
3. Simple usage
4. Documentation


## Installation

`npm install --save-dev base-test-files`


## Simple usage

```js
const runTests = require("base-test-files")
runTests()
```

## Configure

### Babel

Second parameter is the Babel.js configurator (below default configuration).

```js
const runTests = require("base-test-files")
runTests({
  presets: ["@babel/env"],
  ast: true,
  sourceMap: true,
  comments: false
})
const {setTranslator} = runTests
```

For more informations see [Babel-Unifyer](https://github.com/karkael64/babel-unifyer).

### Edit test context

```js
const runTests = require("base-test-files")
const {context} = runTests

context.window = context
context.isNaN = Number.isNaN
context.Math = Math
// etc...

runTests()
```
