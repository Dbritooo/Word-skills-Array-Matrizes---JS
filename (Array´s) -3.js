const array = require("./data.json")

let soma = 0;

array.forEach(N => {
    soma += N
});

console.log(soma)