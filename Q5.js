let multiplos = [];

for (let index = 0; index <= 100; index++) {
    numero = index/3;
    if (numero%3 == 0) {
        multiplos.push(index);
    }
}

console.log(multiplos.join("-"))

console.log(multiplos.length)