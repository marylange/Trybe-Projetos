const assert = require('assert');


/*
  A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
*/

const mySum = (arr) => {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
let resp1 = mySum([1, 2, 3, 4]);
let resp2 = mySum([1, -2, -3, 4]);

console.log(resp1);
console.log(resp2);

// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
assert.equal(resp1, 10);

// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
assert.notDeepEqual(resp2, 10);