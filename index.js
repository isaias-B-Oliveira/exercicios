const chuvas_meteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",               pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                  pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",                pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",          pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",              pico: "Dez 12",  velocidade: "40 km/s"}
];
let titulo = "=== chuvas de meteoros - hemisferio sul ===";
console.log(titulo.toUpperCase());
console.log("\n");
for (const chuva of chuvas_meteoros){
    let nome_chuva = chuva.nome;
    let pico_chuva = chuva.pico;
    let velocidade_chuva = chuva.velocidade;

    let pico_mes_dia = pico_chuva.split(" ");
    let pico_dia = pico_mes_dia[1];
    let pico_mes = pico_mes_dia[0];

    let pico_mes_nome ="";
    switch(pico_mes){
        case "jan":    pico_mes_nome = "janeiro"; break;
        case "fev":    pico_mes_nome = "fevereiro"; break;
        case "mar":    pico_mes_nome = "março"; break;
        case "abr":    pico_mes_nome = "abril"; break;
        case "mai":    pico_mes_nome = "maio"; break;
        case "jun":    pico_mes_nome = "junho"; break;
        case "jul":    pico_mes_nome = "julho"; break;
        case "ago":    pico_mes_nome = "agosto"; break;
        case "set":    pico_mes_nome = "setembro"; break;
        case "out":    pico_mes_nome = "outubro"; break;
        case "nov":    pico_mes_nome = "novembro"; break;
        case "dez":    pico_mes_nome = "dezendro"; break;
        default :      pico_mes_nome = "mes invalido"; break;
        
    }
    let pico_data_chuva_formatada = pico_dia+ " de " +pico_mes_nome;
    let velocidade_formatada = velocidade_chuva.replace("km/s", "quilometros por segundo ");

    console.log("nome: ".padEnd(30, ".")+nome_chuva);
    console.log("pico: ".padEnd(30, ".")+pico_data_chuva_formatada);
    console.log("velocidade: ".padEnd(30, ".")+velocidade_formatada);
    console.log("\n");


}