const fs = require('fs');
const filePath = 'microtask-and-macrotask-in-javascript.webp';
fs.readFile(filePath, { encoding: 'utf8' }, (error, data) => {
  if (error) throw error;
  console.log(data);
});

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log('Sum: ', sum);
