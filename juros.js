import entradaDados from 'readline-sync';
console.log("calculadora dejuros:");
let valor_juros;
let valor_divida = entradaDados.question("\n informe o valor  da divida R$:");

if(valor_divida>0)
{
    let dias_vencimento= entradaDados.question("informe quantos dias se passaram desde o dia de vencimento:");

    if(dias_vencimento > 0)
    {
        if(dias_vencimento > 15)
        {
            valor_juros=10;
        }
        else
        {
            valor_juros = 5;
        }

        valor_divida = Number(valor_divida);
        dias_vencimento = Number(dias_vencimento);

        let total_juros = (valor_divida/100) * valor_juros;
        let valor_total = valor_divida + total_juros;

        console.log("\n valor total da divida:R$"+valor_divida);
        console.log("dias de atraso"+dias_vencimento);
        console.log("taxa de juros:"+valor_juros+"%");
        console.log("valor total de juros:R$"+valor_total);
    } 
    else
    {
        console.log("voce esta em dias!");
    }
}
else
{
    console.log("o valor deve ser maior que zero:");
}