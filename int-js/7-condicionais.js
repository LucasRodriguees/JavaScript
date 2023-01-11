
const idadeComprador = 18;
console.log(`Destinos possíveis`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
}else{
    console.log("Comprador menor de idade");
}

console.log(listaDeDestinos);
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);


