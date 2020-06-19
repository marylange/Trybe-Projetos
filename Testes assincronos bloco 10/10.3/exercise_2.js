// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise.
// Primeiramente, instancie uma Promise.Dentro dela você deve produzir um array
// com dez números aleatórios de 1 a 50, elevá - los todos ao quadrado.Se a
// soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida.Caso
// contrário, ela deve ser rejeitada.Acresça um then e um catch à Promise com qualquer
// coisa dentro só para que o código funcione.
// Tente usar Higher Order Functions! Lembre - se que tanto uma quanto a outra recebem, como parâmetro, funções!
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
      resolve('A promise foi resolvida ', result);
    } else {
      reject('A promise foi rejeitada', result);
    }
  })
}

myPromise().then(function (message) {
  console.log(message);
}).catch(function (message) {
  console.log(message);
})

