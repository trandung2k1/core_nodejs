const fs = require('fs');
const path = require('path');
const writerStream = fs.createWriteStream(path.join(__dirname, 'output.txt'));

writerStream.write('Hello, world');

writerStream.on('finish', function () {
  console.log('done');
});

writerStream.on('error', function (error) {
  console.log(error.stack);
});
