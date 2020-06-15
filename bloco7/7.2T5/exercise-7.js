/*
    Crie uma função que obtenha o valor da chave de acordo 
    com a sua posição no objeto. Por exemplo:
*/

// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const obterValorChave = (obj, posicao) => {
    const key = Object.values(obj);
    return key[posicao];
}
console.log(obterValorChave(lesson1, 0));