const { promises: fs } = require('fs');
const path = require('path');
const promise = fs.readFile(path.join(__dirname, 'data.txt'), 'utf-8');
promise.then((rs) => console.log(rs)).catch((error) => console.log(error));
console.log('Sync');
