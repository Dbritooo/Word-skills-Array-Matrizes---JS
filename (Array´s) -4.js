const numeros = require("./data.json")

function calcularMedia(array) {
let soma = 0;


for (let i = 0; i < array.length; i++ ) {
    soma += array[i]

}   

const media = soma / array.length;
return media;

}

console.log(calcularMedia(numeros));
