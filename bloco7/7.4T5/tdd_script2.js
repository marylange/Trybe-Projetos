const assert = require('assert');

// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (arr, exp) => {z
  for (let i = 0; i < words.length; i++) {
    if (arr[i].map == exp) {
      return exp;
    }
  }
  return -1;
};


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
