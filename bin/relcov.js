#!/usr/bin/env node

const split = require('split'),
    createLineProcessor = require('../lib');

process.stdin
    .pipe(split(createLineProcessor(process.cwd())))
    .pipe(process.stdout);
