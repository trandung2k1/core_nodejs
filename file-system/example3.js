const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'app'), { recursive: true }, (err, path) => {
  if (err) {
    return console.error(err);
  }
  console.log(path);
  console.log('Directory created successfully!');
});


