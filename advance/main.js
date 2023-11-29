const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'data.txt'), 'utf-8', (error, data) => {
    console.log('async', data);
});
const rs = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf-8');
console.log(rs);
