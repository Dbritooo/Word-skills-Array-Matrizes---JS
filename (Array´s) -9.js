const matriz = require("./matriz.json")

let soma = 0

matriz.forEach(row => {
    row.forEach(num => {
        soma+=num
    })
})

console.log(`Soma: ${soma}`)