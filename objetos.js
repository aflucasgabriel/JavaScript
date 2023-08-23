// Objetos

let pessoa = {

    nome: "Lucas",
    idade: 20


}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["idade"]);

console.clear();
// adicionando uma chave-valor

pessoa.altura = 1.70;

console.log(pessoa);

// deletando uma chave-valor

delete pessoa.idade;

console.log(pessoa);
console.clear();
// percorrer objetos

for (let chave in pessoa) {
    console.log(chave);
}



