const fs = require('fs');
const path = require('path');
const readerStream = fs.createReadStream(path.join(__dirname, 'output.txt'));
const writerStream = fs.createWriteStream(path.join(__dirname, 'pipe.txt'));
readerStream.pipe(writerStream);
