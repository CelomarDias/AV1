let numeros = [];

for (let index = 0; index < 100; index++) {
    numeros.push(index)    
}

let impares = [];

numeros.forEach(index => {
    if(numeros[index] %2 !=0) {
        impares.push(index);
    }
})

console.log(impares.join("-"));

