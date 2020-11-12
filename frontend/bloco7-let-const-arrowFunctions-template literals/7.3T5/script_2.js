const assert = require('assert');


/*
  A função myIndexOf(arr, item) recebe um array arr, um item e retorna 
  o índice do item ou -1 caso o item não pertença ao array arr
*/

const myIndexOf = (arr, item) => {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}
let resp1 = myIndexOf([1, 2, 3, 4], 3);
let resp2 = myIndexOf([1, 2, 3, 4], 5);

console.log(resp1);

// implemente seus testes aqui

// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
assert.deepEqual(resp1, 2); // (resp1 é o resultado atual da função e 2 significa a expectativa de resultado);
// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
assert.deepEqual(resp2, 3);
