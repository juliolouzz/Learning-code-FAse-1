
//Crie um programa que armazena um array de usuários (objetos), 
//cada usuário tem um nome e suas tecnologias (novo array)
//Percorra a lista de usuários com uma estrutura de repetição 
//imprimindo em tela as informações dos usuários:
//Carlos trabalha com HTML, CSS
//Jasmine trabalha com JavaScript, CSS
//Ruan trabalha com HTML, Node.js

//Crie uma função que recebe os dados de um objeto de usuário e retorna 
//SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false
//Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS
//utilizando a função construída acima, se SIM, imprima em tela as informações do usuário

const usuários = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: [ "JavaScript", "CSS"] },
    { nome: "Ruan", tecnologias: ["HTML", "Node.js" ] },

]

for (let usuário of usuários) {
    console.log(`${usuário.nome} trabalha com ${usuário.tecnologias.join(', ')}`)
}

function checaSeUsuárioUsaCSS(usuário) {
    for (let tecnologia of usuário.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

for (let i = 0; i < usuários.length; i++) {
    const usuárioTrabalhaComCSS = checaSeUsuárioUsaCSS(usuários[i])

    if(usuárioTrabalhaComCSS) {
        console.log(`O usuário ${usuários[i].nome} trabalha com CSS`)
    }
}

//Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo
//Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe 
//como parâmetro as receitas e despesas do usuário
//Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e 
//use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo
//A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de 
//receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

//No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

  function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)
    
    return somaReceitas - somaDespesas
  }

  function somaNumeros(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma
}

for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}