const fs = require('fs');
const filePath = 'microtask-and-macrotask-in-javascript.webp';
const data = fs.readFileSync(filePath, { encoding: 'utf8' });
console.log(data);

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log('Sum: ', sum);
