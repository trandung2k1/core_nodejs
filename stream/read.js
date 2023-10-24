const fs = require('fs');
const path = require('path');
const readerStream = fs.createReadStream(path.join(__dirname, 'document.txt'));
readerStream.setEncoding('utf8');

readerStream.on('data', function (chunk) {
  console.log(chunk);
});

readerStream.on('end', function () {
  console.log('end');
});

readerStream.on('error', function (error) {
  console.log(error);
});
