/*
    Crie uma função que deverá retornar um objeto que representa o relatório do 
    professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto 
    criado no exercício 5:
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

const createReport = (obj, value) => {
    Object.values(obj).filter((element) => {
        if (element.professor === value) {
            const resposta = {
                professor: element.professor,
            }
            console.log(resposta);
            return resposta;
        };
    });
}

console.log('h',createReport(allLessons, 'Maria Clara'));