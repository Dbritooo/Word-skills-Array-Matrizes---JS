const numeros = require("./data.json")
let menos = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros [i] < menos) {
        menos  = numeros[i];
    }
}
console.log(menos)