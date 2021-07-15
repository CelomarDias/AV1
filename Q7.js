let sequencia = [0,1];

let var1 = 0;
let var2 = 0;
let var3 = 0;

for (let index = 0; index <= 7; index++) {
    var1 = sequencia[index];
    var2 = sequencia[index + 1];
    var3 = var1 + var2 
    sequencia.push(var3)
}

console.log(sequencia);