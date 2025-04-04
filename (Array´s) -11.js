const matriz = require("./matriz.json")

let soma = 0;
let n = 0;

matriz.forEach(row => {
    row.forEach(num => {
        soma+=num
        
        
    });
    n++;
    console.log(n + " " + soma)

    soma = 0
});