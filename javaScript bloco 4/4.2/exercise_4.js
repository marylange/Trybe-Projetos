let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media = 0;

for(let i = 0; i < numbers.length; i++) {
    media += numbers[i];
}
const RESULT = media / 10;
console.log('Valor result', RESULT);

if(RESULT > 20) {
    console.log('Valor maior que 20.');
} else {
    console.log('valor menor ou igual a 20.');
}