//let contador = 10;
//while (contador > 0){
  //  console.log(contador);
    //contador--;
//}
let capital_emprestado = 3000;
let taxa_juros = 0.02; //2%

let contador = 1;
let total_parcelas = 5;

while (contador<= total_parcelas)
{
    let numero_parcelas = contador;
    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcelas;
    console.log("a sua taxa de juros no periodo"+numero_parcelas+"mes e de R$"+juros_emprestimo+",00");
    contador++;
}