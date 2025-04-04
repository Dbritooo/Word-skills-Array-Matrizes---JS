let matriz = require("./matriz.json")

matriz = matriz.slice(-matriz[0].length)

matriz.forEach((row, i) => {
    console.log(row[i])
})