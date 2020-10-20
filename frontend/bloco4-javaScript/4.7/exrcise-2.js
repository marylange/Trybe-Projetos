/*
Adicione uma tag de script e adicione as funções do exercício da calculadora (veja a solução se você ainda não a tiver feito).
Para cada operação, crie um ouvinte de evento para o botão e, quando clicar, encontre o valor da entrada apropriada e mostre o resultado do cálculo na div da solução.
Bônus: responda às teclas pressionadas para que o usuário não precise clicar no botão.
*/

const calcularRaiz = () => {
	const raizQuadrada = document.getElementById('square-input').value;
	const result1 = Math.sqrt(raizQuadrada);
	const resultado = document.getElementById('solution1');
	resultado.innerHTML = `A raiz quadrada de ${raizQuadrada} é ${result1}`;
}
const botaoRaizQuadrada = document.getElementById('square-button');
botaoRaizQuadrada.addEventListener('click', calcularRaiz);

const calcularAMetadeDoValor = () => {
	const valorQueSeraRetiradoMetade = document.getElementById('half-input').value;
	const result2 = (valorQueSeraRetiradoMetade / 2);
	const resultado = document.getElementById('solution2');
	resultado.innerHTML = `A metade de ${valorQueSeraRetiradoMetade} é ${result2}`;
}

const botaoMetadeValor = document.getElementById('half-button');
botaoMetadeValor.addEventListener('click', calcularAMetadeDoValor);

const calcularAreaCirculo = () => {
	const raio = document.getElementById('area-input').value;
	const resultado = 2 * Math.PI * raio;
	resultado.innerHTML = `A área do circulo é ${resultado}`;
}
const botao = document.getElementById('area-button');
botao.addEventListener('click', calcularAreaCirculo);