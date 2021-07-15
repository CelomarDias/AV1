// Crie um programa que solicite um inteiro X ao usuário (exemplo let numero = 33).
//  Apresente todos os números inteiros pares de 0 a X.

let X = prompt("Insira o valor: ")

let pares = [];

for (let index = 0; index <= X; index++) {
    numeroPar = index/2;
    if (numeroPar%2 == 0) {
        pares.push(index);
    }
}

console.log(pares)
console.log(pares.length)