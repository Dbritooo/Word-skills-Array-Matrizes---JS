const matriz = require("./matriz.json")

let soma = 0

for (let i = 0; i < matriz[i].length; i++) {
    matriz.forEach(row => {
        soma+= row[i]
    });
    console.log(soma)
    soma = 0

}