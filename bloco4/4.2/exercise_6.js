let numbers = [1, 3, 5, 7, 2, 4, 6, 8,];

let result = [];
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] % 2 !== 0) {
    result.push(numbers[i]);
  }
}
if(result.length === 0) {
	console.log('nenhum valor ímpar encontrado');
} else {
	console.log(result);
}

/*
Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
*/