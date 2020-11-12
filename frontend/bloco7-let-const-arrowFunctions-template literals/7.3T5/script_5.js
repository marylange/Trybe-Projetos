const assert = require('assert');

/*
  A função myRemoveWithoutCopy(arr, item) recebe um array 
  arr e retorna o próprio array sem o elemento item caso ele exista no array
*/

const myRemoveWithoutCopy = (arr, item) => {
    for (let i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i -= 1;
            len -= 1;
        }
    }

    return arr;
}

let coisa = [1, 2, 3, 4];
const resp1 = myRemoveWithoutCopy(coisa, 3);
console.log(resp1);
const resp2 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
console.log(resp2);
const resp3 = myRemoveWithoutCopy([1, 2, 3, 4]);

// implemente seus testes aqui

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepEqual(resp1, [1, 2, 4]);
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notEqual(resp2, [1, 2, 3, 4]);
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
assert.deepStrictEqual(resp3, [1, 2, 3, 4]);
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

