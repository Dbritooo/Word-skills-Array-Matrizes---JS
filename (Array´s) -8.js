const array = require("../array.json")

let k = 1
const n = array.length

k = k % n

console.log("Array invertida: " + [...array.slice(-k), ...array.slice(0, n - k)])