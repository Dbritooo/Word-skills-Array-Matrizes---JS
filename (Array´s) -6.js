const array = require("./data.json")

const novoarray = 0

for (let i = 0; i < array.length; i++ ) {
    novoarray[array.length - 1 -i] = array[i]
}

console.log(array)