const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'data.txt');
// Asynchronous
fs.readFile(file, 'utf-8', function (err, data) {
  if (err) console.log(err);
  console.log(data);
});

//Synchronous
const data = fs.readFileSync(file, 'utf-8');
console.log(data);
console.log('Read');
