/*
Escreva um programa que defina três números em 
variáveis no seu começo e retorne true se uma das três for par. 
Caso contrário, ele retorna false.
*/

const verificaPar = (a, b, c) => {
    if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
        return true;
    }
    return false;
}

console.log(verificaPar(1, 2, 5));