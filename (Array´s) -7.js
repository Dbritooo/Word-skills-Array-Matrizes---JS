const array = require("../array.json")

let arrayLimpo = []

array.forEach(num => {
    num = parseInt(num)

    if (!arrayLimpo.includes(num)){
        arrayLimpo.push(num)
    }
})

console.log("Array limpo: " + arrayLimpo)