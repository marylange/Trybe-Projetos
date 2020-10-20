/*
Agora você irá criar um novo array a partir do array numbers, sem perdê-lo.
Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. 
Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). 
Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.
*/
// declarar array numbers no código
//criar um novo array vazio
//multiplicar primeiro indice com o proximo e armazenar no novo array
//se nao axistir proximo valor, multiplica por dois

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
let result = 1;
let resultado = 0;

for(let i = 0; i < numbers.length; i += 1) {
    for(let j = 1; j < i; j += 1) {
        resultado = numbers[i] * result[j];
        newArray.push(result);
        console.log('s', newArray);
    }
}
if(numbers[1] === 0) {
    resultado = numbers[0] * 2;
    console.log(resultado);
}
