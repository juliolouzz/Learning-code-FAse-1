//Criar um programa que
//calcula as medias das turmas dos alunos
// e envia msg das medias

const alunosDaTurmaA = [
    {   nome: 'cabral',
        nota: 1.8,
    },
    {   nome:'junkeira',
        nota: 10
    },
    {   nome:"tigas",
        nota: 2 
    },
    {
        nome:"João",
        nota: 10
    },
]

const alunosDaTurmaB = [
    {   nome: 'Cleiton',
        nota: 9.8,
    },
    {   nome:'Robson',
        nota: 10
    },
    {   nome:"junior",
        nota: 0 
    },
    {
        nome:"Novo Aluno",
        nota: 5
    },
]

function calculaMedia(alunos) {
    let soma = 0;
   for (let i = 0; i < alunos.length; i++ ) {
        soma = soma + alunos[i].nota
        
   }
        const media = soma / alunos.length
        return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
//Se a media for maior que 5, parabenizar a turma.
if (media > 5) {
    console.log(`A sua media da turma ${turma} foi de ${media}, Parabéns.`)
} else  {
    console.log(`Sua media da turma ${turma} foi menor que 5`)
        }
}

enviaMensagem(media1,'turmaA')
enviaMensagem(media2,'turmaB')

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

