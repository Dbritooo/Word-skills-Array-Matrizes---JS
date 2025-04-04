const matriz = require("./matriz.json")

let maior = 0

matriz.forEach(row => {
    row.forEach(num => {
        if (num > maior) {
            maior = num
        
        }
        
    });
    
});

console.log(maior)