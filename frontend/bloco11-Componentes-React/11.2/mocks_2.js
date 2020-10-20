// Com a mesma função do exercício anterior, utilizando o 
// mock, crie uma nova implementação que deve receber dois parâmetros e 
// retornar a divisão do primeiro pelo segundo. Essa implementação deve 
// ocorrer uma única vez. Faça os testes necessários.
const divisaoNumero = (num1, num2) => num1 / num2;
const numeroAleatorio = () => Math.round(Math.random()* 100);

module.exports = { numeroAleatorio, divisaoNumero };