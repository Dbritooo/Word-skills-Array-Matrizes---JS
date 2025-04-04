const numeros = require("./data.json")

let maior = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros [i] > maior) {
        maior  = numeros[i];
    }
}
console.log(maior)