import entradaDados from 'readline-sync';

let base = entradaDados.question("informe a medida da base");
let altura = entradaDados.question("informe a medida da altura");

let area = (base * altura)/2 ;
console.log(`area do triangulo e:${area}`);