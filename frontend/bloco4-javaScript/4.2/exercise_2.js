let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const REDUCE = (acumulador, valorAtual) => acumulador + valorAtual;
const RESULT = numbers.reduce(REDUCE);
console.log(RESULT);