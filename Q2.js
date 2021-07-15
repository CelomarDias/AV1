let limite = 50;

let pares = [];

for (let index = 0; index <= 50; index++) {
    numeroPar = index/2;
    if (numeroPar%2 == 0) {
        pares.push(index);
    }
}

console.log(pares.join("-"))