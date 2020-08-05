/* 
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se 
a nota passada for menor que 0 ou maior que 100.
*/
const notas = () => {
    return {
        100: 'Erro',
        90: 'Nota A',
        80: 'Nota B',
        70: 'Nota C',
        60: 'Nota D',
        50: 'Nota E',
    }
}

const verificandoNota = (nota) => {
    for(let numeroNota in notas()) {
        if(nota == numeroNota) {
            return notas()[numeroNota];
        }
        if(nota < 50) {
            return 'Nota F';
        }
    }
    return 'Erro estranho!';
}
console.log(verificandoNota(1000));