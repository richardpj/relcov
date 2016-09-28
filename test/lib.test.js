
const should = require('chai').should();
const createLineProcessor = require('../lib');
const lineProcessor = createLineProcessor(process.cwd());
const testLcov = require('./target/test.lcov');
const pathIndexes = testLcov.pathIndexes;

var source = testLcov.lcovLines.map((line) => line.replace('{0}', process.cwd() + '/'));
var target = testLcov.lcovLines.map((line) => line.replace('{0}', '') + '\n');

if(process.platform === 'win32') {
    source = source.map((line) => line.replace('/', '\\'));
    target = target.map((line) => line.replace('/', '\\'));
}

const srcNonSourceLines = source.filter((e, i) => pathIndexes.indexOf(i) === -1);
const srcSourceLines = source.filter((e, i) => pathIndexes.indexOf(i) !== -1);

const tgtNonSourceLines = target.filter((e, i) => pathIndexes.indexOf(i) === -1);
const tgtSourceLines = target.filter((e, i) => pathIndexes.indexOf(i) !== -1);


describe("#createLineProcessor", function() {
    it("should leave non source file lines unchanged but add EOL.", function() {
        srcNonSourceLines.map((line) => lineProcessor(line)).should.deep.equal(tgtNonSourceLines);
    });

    it("should make source file lines relative and add EOL.", function() {
        srcSourceLines.map((line) => lineProcessor(line)).should.deep.equal(tgtSourceLines);
    });

    it("should process an entire lcov file correctly.", function() {
        source.map((line) => lineProcessor(line)).should.deep.equal(target);
    });
});
