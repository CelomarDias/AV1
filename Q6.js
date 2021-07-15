let num = prompt("Insira o número de 0 a 100: ")

let maiorIgual = [];

if (num <= 100 && num >=0) {
    for (let index = 0; index < 9; index++) {
        let aleatorio = Math.round(Math.random()*100);
        if (aleatorio >= num) {
            maiorIgual.push(aleatorio);
        }
        
    }
} else {
    console.log("Insira um número dentro do solicitado");
}

console.log(maiorIgual.join("/"));


