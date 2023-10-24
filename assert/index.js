console.clear();
const assert = require('assert').strict;

let x = 4;
let y = 5;

try {
  // assert(x == y);
  //   assert.deepStrictEqual({ a: 1 }, { a: '1' });
  //   assert.equal(x, y);
  //   assert.equal(1, 1);
  assert.match('I am good boy', /good/);
} catch (error) {
  //   console.log(`${x} is not equal to ${y}`);
  console.log('Error: ', error);
}
