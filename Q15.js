// 15 - Crie um programa que apresente a soma dos números pares e dos ímpares de 0 a 50.

let impares = 0;

let pares = 0;

for (let index = 0; index <= 50; index++) {
    numeroPar = index/2;
    if (numeroPar%2 == 0) {
        pares += numeroPar;
    }
}

for (let index = 0; index <= 50; index++) {
    numeroImpar = index/2;
    if (numeroImpar%2 != 0) {
       impares += numeroImpar
    }
}

console.log(pares)
console.log(impares)