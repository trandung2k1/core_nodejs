const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream(path.join(__dirname, 'output.txt'), 'utf8');
const writeStream = fs.createWriteStream(path.join(__dirname, 'output.txt.gz'));
readStream.pipe(gzip).pipe(writeStream);
