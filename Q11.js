// Crie um programa que apresente os inteiros de 200 a -150.

let numeros = [];

for (var i = 200; i >= -150; i--) {
    numeros.push(i);
}

numeros.pop(0);

console.log(numeros)
