/*
    Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. 
    Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez 
    números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses 
    elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. 
    Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

    Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
    Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

    Quando a Promise for rejeitada, imprima, via console.log, a frase “É mais de oito mil! Essa promise deve estar quebrada!”

    Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
*/



const numerosAleatorios = () => {
    return Math.round(Math.random() * 50);
}
const array = [];
for (let i = 0; i < 10; i++) {
    array.push(numerosAleatorios() ** 2);
}

const reducer = (acumulador, currentValue) => acumulador + currentValue;
const result = array.reduce(reducer);


function myPromise() {
    return new Promise(function (resolve, reject) {
        if (result < 8000) {
            let arrDivisao = [];
            const divisao = () => {
                let divisao2 = result / 2;
                arrDivisao.push(divisao2);

                let divisao3 = result / 3;
                arrDivisao.push(divisao3);

                let divisao5 = result / 5;
                arrDivisao.push(divisao5);

                let divisao10 = result / 10;
                arrDivisao.push(divisao10);

                return arrDivisao;
            }
            resolve(console.log(divisao()));

            const soma = (acumulador, currentValue) => acumulador + currentValue;
            const resultSoma = arrDivisao.reduce(soma);
            console.log(resultSoma);

        } else {
            reject('É mais de oito mil! Essa promise deve estar quebrada!', result);
        }
    })
}

myPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    })

