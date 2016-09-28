
const path = require('path'),
    regex = /^SF:(.*)$/;

function createLineProcessor(basePath) {
    return function (line) {
        var match = regex.exec(line);
        if (match) {
            var relPath = path.relative(basePath, match[1]);
            return line.replace(match[1], relPath) + '\n';
        }
        return line + '\n';
    };
}

module.exports = createLineProcessor;