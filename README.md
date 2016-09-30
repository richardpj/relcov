
# relcov

[![Build Status][1]][2] [![Test Coverage][3]][4] [![Code Climate][5]][6]
[![Issue Count][7]][6] [![Dependencies Status][8]][9] [![DevDependencies Status][13]][14]

<!-- 
[![NPM][10]][11] [![NPM][12]][11]
-->

A simple CLI tool for transforming absolute lcov source file paths to
relative paths. This is useful when using cloud CI tools such as
[Travis CI](https://travis-ci.org/) and quality reporting tools
such as [Code Climate](https://codeclimate.com).
[istanbul](https://www.npmjs.com/package/istanbul) will generate
lcov files with absolute paths (as will most coverage tools), however the aforementioned cloud
tools require lcov files with relative source file paths.

## Installation

This module is best used in an npm script...

```
npm install relcov --save-dev
```

...but if you must you can install it globally.

```
npm install relcov -g
```

## Changelog

v1.0.2 (2016-09-28) - Initial release.

## Usage

The classic usage example would be to fix an lcov when pushing
it to code climate (preferably in an npm script) like so:

```
relcov < ./coverage/lcov.info | codeclimate-test-reporter
```

It will read the the lcov file from stdin and push the (relative) lcov file
to stdout.  It will make the paths relative to the current working directory.

## LICENSE

[MIT](LICENSE)

[1]: https://travis-ci.org/richardpj/relcov.svg?branch=master
[2]: https://travis-ci.org/richardpj/relcov
[3]: https://codeclimate.com/github/richardpj/relcov/badges/coverage.svg
[4]: https://codeclimate.com/github/richardpj/relcov/coverage
[5]: https://codeclimate.com/github/richardpj/relcov/badges/gpa.svg
[6]: https://codeclimate.com/github/richardpj/relcov
[7]: https://codeclimate.com/github/richardpj/relcov/badges/issue_count.svg
[8]: https://david-dm.org/richardpj/relcov/status.svg
[9]: https://david-dm.org/richardpj/relcov
<!--
[10]: https://nodei.co/npm/shared-run.png?downloads=true&downloadRank=true&stars=true
[11]: https://nodei.co/npm/shared-run/
[12]: https://nodei.co/npm-dl/shared-run.png?months=1&height=3
-->
[13]: https://david-dm.org/richardpj/relcov/dev-status.svg
[14]: https://david-dm.org/richardpj/relcov?type=dev
