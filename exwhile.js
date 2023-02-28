let numeros = [10, 5, 7, 8, 9, 6, 12, 4, 20, 13];
let numeros_impares = 0;
let numeros_pares = 0 ;
let contador = 0;

while (contador< numeros.length)
{
    if (numeros [contador] %2 ==0){
        numeros_pares++;
    }
     else{
        numeros_impares++;
    }
    contador++;
}
console.log("o total de numeros impares e:"+numeros_impares);
console.log("o total de numeros pares e :"+numeros_pares);