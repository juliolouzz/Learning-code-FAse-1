const ClassA = [
    {
        name: 'cabral',
        grade: 1.8
    },
    {
        name: 'junkeira',
        grade: 10
    },
    {
        name: "tigas",
        grade: 2
    },
    {
        name: "João",
        grade: 10
    },
]

const ClassB = [
    {
        name: 'Cleiton',
        grade: 9.8
    },
    {
        name: 'Robson',
        grade: 10
    },
    {
        name: "junior",
        grade: 0
    },
    {
        name: "Novo Aluno",
        grade: 5
    },
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade

    }
    const average = sum / students.length
    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(` ${turma} average: ${average}, Congratulations.`)
    } else {
        console.log(` ${turma} average: ${average}. Is not good enough`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    
    if (student.grade < 5) {
        student.flunked = true
    }
}


function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(` ${student.name} flunked`)
    }

}

function studentsFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(ClassA)
const average2 = calculateAverage(ClassB)

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')

studentsFlunked(ClassA)
studentsFlunked(ClassB)

/*  operadores comparativos
>    maior
<    menor
>=   maior igual a
<=   menor igual a
==   igual a
===  igual e do mesmo tipo
!=   diferente de
!==  diferente, inclusive do tipo
*/
/* operadores lógicos

&&     "E" As duas condições devem ser verdadeiras
    para que a condição final seja verdadeira

||      "OU" Uma das condições deve ser verdadeira
        para que a condição final seja verdadeira

!       "NÃO" Nega uma condição
*/

// Desafio da idade

// Se a pessoa tiver 18 anos ou mais deixar entrar
// se a pessoa tiver menos de 18 anos bloquear entrada
// se a pessoa tiver 17 anos mandar voltar quando tiver 18
/*
const idade = 18

if( !(idade >= 18) || idade === 17){
console.log(`Bloquear Entrada`)
} else(
console.log(`Deixar entrar`)

)
*/

//vai ter continuação

