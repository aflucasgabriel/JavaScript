const input = require('readline-sync');

// arrays 

// nome, idade, altura, estudando
let arr = ["Lucas", 24, 1.70, true];

console.log(arr);

//acessar os elementos

console.log("Primeiro elemento: ", arr[0]);

//obter tamanho do array

console.log(arr.length);

// percorrer o array

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}

console.clear();

for(let elemento of arr){
    console.log(elemento);
}

console.clear();

for(let indice in arr){
    console.log(indice, arr[indice]);
}



