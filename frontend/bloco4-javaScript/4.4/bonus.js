/*
(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

*/

const valores = () => {
    return {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        // 'C': 100,
        // 'D': 500,
        // 'M': 1000,
    }
}

const mostrarNum = (num) => {
    let r = [];
    let romanos = num.split('');
    for(let i in romanos){
        if(i == valores()){
        console.log(valores()[i]);
        }
    }
    return r;
}
console.log(mostrarNum('XII'));

// 'IX'
// ['I', 'X']
// [1, 10]
// [9]
