
const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log(`Destinos possíveis`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
} else {
    console.log("Comprador menor de idade não posso vender");
}

console.log("Embarque: \n\n");
if (temPassagemComprada && idadeComprador >= 18){
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}
    
 console.log(listaDeDestinos);



