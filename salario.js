import entradadados from 'readline-sync';
let salariominimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];
let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

console.log("escolha uma das opcoens: \n");
console.log("1 - lista dos salariios minimos de 2010 a 2020");
console.log("2 - lista de inflacao IPCA de 2010 a 2020");
console.log("3 - comparacao do almento salarial e a inflacao do IPCA:\n");

let escolha = entradadados.question("digite o numero da sua escolha: ");
escolha = Number(escolha);

let anoLabel = "ano:";
let salarioLabel ="salario minimo:";
let crescimentoLabel = "crescimento salarial:";
let ipcaLabel = "inflacao IPCA:";

anoLabel = anoLabel.padEnd(30, '.');
salarioLabel = salarioLabel.padEnd(30, '.');
crescimentoLabel = crescimentoLabel.padEnd(30, '.');
ipcaLabel = ipcaLabel.padEnd(30, '.');

switch (escolha){
    case 1:
        for(let i=0; i<= salariominimo.length-1; i++)
        {
            let ano = salariominimo[i].ano;
            let salario = salariominimo[i].salario;
            let salarioFormatado = salario.toFixed(2).replace("." , ",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(salarioLabel+"R$"+salarioFormatado);
        }
        break;
     case 2:
        for(let i = 0; i <= inflacao.length-1; i++)
        {
            let ano = inflacao[i].ano;
            let ipca = inflacao[i].ipca;
            let ipcaFormatado = ipca.toFixed(2).replace("." , ",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(ipcaLabel+ipcaFormatado+"%");
        }
        break;
     case 3:
        for(let i=0; i<=salariominimo.length-1; i++)
        {
            let ano = salariominimo[i].ano;
            let salario = salariominimo[i].salario;
            let percentualcrescimento;
            let crescimentoFormatado;

            if(i > 0)
            {
                let salarioAnterior = salariominimo[i-1].salario;
                let diferenca = salario - salarioAnterior;

                percentualcrescimento = (diferenca / salarioAnterior) * 100;

                crescimentoFormatado = percentualcrescimento.toFixed(2).replace(".",",")+"%";
            }
            else
            {
                crescimentoFormatado = "-";
            }
            let ipca = inflacao[i].ipca;

            let salarioFormatado = salario.toFixed(2).replace(".",",");
            let ipcaFormatado = ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(salarioLabel+"R$ "+salarioFormatado);
            console.log(crescimentoLabel+crescimentoFormatado);
            console.log(ipcaLabel+ipcaFormatado+"%");
        
        }
        break;
        default:
            console.log("opcao invalida;");
            break;

    
}