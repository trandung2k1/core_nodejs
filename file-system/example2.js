const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'data.txt');

fs.exists(file, function (exists) {
  console.log(exists);
});

const fileExists = fs.existsSync(file);
console.log(fileExists);
