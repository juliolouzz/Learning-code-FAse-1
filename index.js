//Criar um programa que
//calcula as medias dos alunos
// e envia msg das medias

const alunos = [
    {   nome: 'cabral',
        nota: 9.8,
    },
    {   nome:'junkeira',
        nota: 10
    },
    {   nome:"tigas",
        nota: 2 
    },
]


const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3


//Se a media for maior que 5, parabenizar a turma.
if (media > 5) {
    console.log(`A sua media foi de ${media}, Parabéns.`)
} else{
    console.log(`Sua media foi menor que 5`)
}

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

const idade = 18

if( !(idade >= 18) || idade === 17){
    console.log(`Bloquear Entrada`)
} else(
    console.log(`Deixar entrar`)

)


//vai ter continuação

