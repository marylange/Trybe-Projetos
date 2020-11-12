// 3.Quando a promise for resolvida com sucesso retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
const numerosAleatorios = () => {
  return Math.round(Math.random() * 50);
}
const array = [];
for (let i = 0; i < 10; i++) {
  array.push(numerosAleatorios() ** 2);
}
console.log(array);
const reducer = (acumulador, currentValue) => acumulador + currentValue;

const result = array.reduce(reducer);
console.log(result);

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
    } else {
      reject('É mais de oito mil! Essa promise deve estar quebrada!', result);
    }
  })
}

myPromise().then(function (message) {
  console.log(message);
}).catch(function (message) {
  console.log(message);
})

