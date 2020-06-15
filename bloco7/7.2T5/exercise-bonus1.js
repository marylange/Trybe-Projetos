/*
    Crie uma função para contar quantos estudantes assistiram às aulas 
    de Matemática. Use o objeto criado no exercício 5.
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
    console.log('list', list);
    const filtersList = list.filter((elemento) => {
        return elemento.materia === 'Matemática';
    })
    const studentNumbers = filtersList.map(mapper);
    console.log(studentNumbers);
    const numberOfStudents = studentNumbers.reduce(reducer);
    return numberOfStudents;
}

console.log(contadorTotalEstudantes(allLessons));