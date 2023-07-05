[![npm version](https://badge.fury.io/js/memstats.svg)](https://badge.fury.io/js/memstats)
[![CodeQL](https://github.com/ochaplia/memstats/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/ochaplia/memstats/actions/workflows/github-code-scanning/codeql)
[![Build Status](https://app.travis-ci.com/ochaplia/memstats.svg?branch=master)](https://travis-ci.org/ochaplia/memstats)

# memstats

A small tool for checking memory usage of the current Node.js process.

### Install

```bash
npm install memstats --save
```

### Usage

This package provides very small API for getting system memory statistics and uptime.

### Examples
#### Example #1

```js
const MemStats = require('memstats');

const stats = MemStats.json();

console.log(stats);
```

This will print the object with statistics:

```json
{
  "maxMemoryAvailable": "4.04 Gb",
  "processMemoryUsed": "48.59 MB",
  "uptime": "0 min"
}
```

### Tests

Run tests:

`npm test`

Run tests with code coverage:

`npm run test-cov`
