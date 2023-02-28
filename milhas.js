import entradaDados from 'readline-sync';

console.log("conversor de milhas para km: \n")
let mi = entradaDados.question("informe o valor em milhas:")
let km = mi/0.62137;

console.log(mi+"mi equivale a"+km+"km");