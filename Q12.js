// Crie um programa que apresente quais são e quantos são os números pares entre 0 e 500.

let pares = [];

for (let index = 0; index <= 500; index++) {
    numeroPar = index/2;
    if (numeroPar%2 == 0) {
        pares.push(index);
    }
}

console.log(pares)
console.log(pares.length)