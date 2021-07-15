// 14 - Crie um programa que solicite dois números inteiros ao usuário: A e X. 
// Apresente todos os números pares de A até X.

let A = prompt("Insira o valor inicial: ")

let X = prompt("Insira o valor final: ")

let pares = [];

for (let index = A; index <= X; index++) {
    numeroPar = index/2;
    if (numeroPar%2 == 0) {
        pares.push(index);
    }
}

console.log(pares)