/*
    Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
*/

const allLessons = {
    lesson1:
    {
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã'
    },
    lesson2:
    {
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'noite'
    },
    lesson3:
    {
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite'
    }
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const mapper = (lesson) => lesson.numeroEstudantes;

const contadorTotalEstudantes = (obj) => {
    const list = Object.values(obj);
    const studentNumbers = list.map(mapper);
    const numberOfStudents = studentNumbers.reduce(reducer);
    return numberOfStudents;
}
console.log(contadorTotalEstudantes(allLessons));