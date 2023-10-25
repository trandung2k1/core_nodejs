const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'data.txt');

function readFileAsync(callback) {
  fs.readFile(file, 'utf-8', callback);
}

setTimeout(function () {
  console.log('Timeout');
}, 100);

function log(error, data) {
  if (error) console.log(error);
  console.log(data);
}

readFileAsync(log);

console.log('Running');
