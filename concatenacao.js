//let tecnologia = "javascript ";
//let frese = "estol aprendendo " + tecnologia + " na Devemidia";
//console.log(frese);

let linguajem = "javascript";
let stark ="mobile";
switch(stark){
    case "back-end":
        console.log(`estude node.js para programacao ${stark} em ${linguajem}`);
        break;
    case "front-end":
        console.log(`estude react para programacao ${stark} em ${linguajem}`);
        break;
    case "mobile":
        console.log(`estude react-nativa para programacao${stark} em ${linguajem}`);
        break;
    default:
        console.log(`tecnologia indisponivel para ${stark}`);break;        
}