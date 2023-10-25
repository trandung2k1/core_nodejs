const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, 'data.txt');

fs.copyFile(root, path.join(__dirname, 'app/data.txt'), function (error) {
  if (error) console.log(error);
});
