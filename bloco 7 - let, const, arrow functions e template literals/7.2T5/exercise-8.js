/*
    Crie uma função que verifique se o par (chave / valor) existe na função. Essa função 
    deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o 
    valor da chave. Exemplo:
*/

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};


const verificarChaveEValor = (obj, key, value) => {
    if (obj[key] === value) {
        return true;
    }
    return false;
}
console.log(verificarChaveEValor(lesson3, 'turno', 'noite'));