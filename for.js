let valor_produto = 500;
for (let contador = 1; contador<=10 ; contador++)
{
    let valor_parcelas = valor_produto / contador;
    console.log("Nª de parcelas"+contador+"valor de parcelas R$:"+valor_parcelas.toFixed(2));
}