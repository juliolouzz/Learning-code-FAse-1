//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
//Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa.

/*=====================================================================================================================

const nome = "Julio"
const peso = 75
const altura = 1.67

//A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:
//peso / (altura * altura);

const imc = peso / (altura * altura)
if( imc >= 30){
    console.log(`${nome}, Voccê está acima do peso`)
} else( imc <= 29.9){
    console.log(`${nome}, Você não está acima do peso`
}
===========================================================================================================================*/

//Crie um programa para calcular a aposentadoria de uma pessoa.
//Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)
//Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos).

//Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar 
//e no fim imprima uma mensagem em tela.
//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, 
//enquanto a mulher precisa ter no mínimo 85 anos na soma;
//Com base nas regras acima imprima na tela as mensagens:

//SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
//SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

/*Dica: Você pode unir duas condições, veja o exemplo abaixo

if (condicao1) {
  if (condicao2) {
    // Condição 1 e 2 passaram
  } else {
    // Condição 1 passou, porém condição 2 não passou
  }
} else {
  // Condição 1 não passou
}
*/


const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

const calculoContribuicao = idade + contribuicao

// essas variáveis irão retornar true ou false
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}

