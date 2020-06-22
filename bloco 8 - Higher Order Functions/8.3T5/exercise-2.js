const assert = require('assert')

const sum = (...sums) => {
    let result = 0;
    for(let i; i < sums.length; i += 1) {
        result += sums[i]; 
    }
    return result;
}
console.log(sum(4, 4,  4));
assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)

/*
    Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
*/