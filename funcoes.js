// Funções

// definição da função
function saudacao() {

    console.log("Seja Bem-vindo(a) ao nosso site!!");

}


console.log("Cadastro Realizado! ");
saudacao();

console.clear();

// Funções com parametros

function saudacao(nome, site="jogos") {

    console.log(`Ola ${nome}! Seja Bem-vindo(a) ao nosso site de ${site}!!`);

}

saudacao("Lucas"); // se tiver parametro, aparece o proprio no console


console.clear();

// retorno de funções

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(1,1);
console.log(resultado);

