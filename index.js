//Criar um programa que
//caucula as medias dos alunos
// e envia msg das medias

const aluno01 = 'cabral'
const notaaluno01 = 9.8

const aluno02 = 'junkeira'
const notaaluno02 = 10

const aluno03 = 'tigas'
const notaaluno03 = 2

const media = (notaaluno01 + notaaluno02 + notaaluno03) / 3

console.log(media)

//Se a media for maior que 5, parabenizar a turma.
if (media > 5) {
    console.log(`A sua media foi de ${media}, Parabens.`)
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
/* operadores logicos

    &&     "E" As duas condições devem ser verdadeiras
           para que a condição final seja verdadeira
    
    ||      "OU" Uma das condiçõe deve ser verdadeira
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




