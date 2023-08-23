// metodos com arrays

const array1 = [1, 65, 23, 92, 2];
const array2 = [];
// slice

console.log(array1.slice(0, 5) );
console.log(array1.slice(3) );
console.clear();

// push | unshift

console.log(array2);

array2.push(15, 1); // adiciona o numero na ultima posição do array

console.log(array2);

array2.push(25, 64);

console.log(array2);

console.clear();

array2.unshift(9764); // adiciona o elemento na primeira posição do array

console.log(array2);

console.clear();

// remoção pop | shift

console.log("Antes de remover: ", array2);

array2.pop(); // remove o ultimo elemento do array

console.log("Depois de remover: ", array2);

console.clear();

console.log("Antes de remover: ", array2);

array2.shift(); // remove o primeiro elemento do array

console.log("Depois de remover: ", array2);

console.clear();

// concatenando array

console.log("Array 1", array1);
console.log("Array 2", array2);


console.log("Concatenado:", array1.concat(array2));
console.clear();

// buscar um elemento em array

console.log(array1);

let indice = array1.indexOf(23);

console.log(indice); // se retornar -1 o elemento n existe no array
console.clear();

// descobrir a existencia de um elemento no array

console.log(array2);

console.log(array2.includes(25));
console.clear();

// inverter array

console.log("Normal: ",array1);

const arrayInvertido = array1.reverse();

console.log("Invertido: ",arrayInvertido);
