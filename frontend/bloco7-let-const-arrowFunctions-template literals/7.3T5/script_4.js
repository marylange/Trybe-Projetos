const assert = require('assert');

/*
  A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse 
  array sem o elemento item caso ele exista no array
*/

const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const resp1 = myRemove([1, 2, 3, 4], 3);
console.log(resp1);
const resp2 = myRemove([1, 2, 3, 4], 1);
console.log(resp2);
const resp3 = myRemove([1, 2, 3, 4], 5);
console.log(resp3);
const resp4 = myRemove([1, 2, 3, 4], 5);
console.log(resp4);

// implemente seus testes aqui

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepEqual(resp1, [1, 2, 4]);
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array[1, 2, 3, 4]
assert.notEqual(resp2, [1, 2, 3, 4]);
// Faça uma chamada para a função myRemoveWsithoutCopy e verifique que o array passado por parâmetro sofreu alterações
assert.deepEqual(resp3, [1, 2, 3, 4], 'Este array sofreu modificações.');
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado.
assert.notEqual(resp4, [1, 2, 3, 4]);