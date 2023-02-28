let cursos_idiomas = [
    {nome:"ingles", preco:2500, carga_horaria:160},
    {nome:"espanhol", preco:1500, carga_horaria:150},
    {nome:"frances", preco:3600, carga_horaria:160},
    {nome:"alemao", preco:2800, carga_horaria:130},
    {nome:"italiano", preco:2900, carga_horaria:120}
]
for(let cursos of cursos_idiomas){

    let nome_cursos = cursos.nome;
    let preco_cursos = cursos.preco;
    let carga_horaria_cursos = cursos.carga_horaria;
    let preco_hora_cursos = preco_cursos / carga_horaria_cursos;

    console.log("Nome do curso :"+nome_cursos);
    console.log("carga horaria do curso"+carga_horaria_cursos+"horas");
    console.log("precoo do curso e:"+preco_cursos+",00");

    if(preco_hora_cursos >=15){
        console.log("Horas/aulas superior ou igual a R$ 15,00");
    } else{
        console.log("Horas/aulas inferior a R$ 15,00");
    }
    console.log("\n");
} 