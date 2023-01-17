const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = `São Paulo`;
console.log(`Destinos possíveis`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existe");
        destinoExiste = true;
        break;
    }
    contador += 1;

}

 console.log("Destinos Existe: " , destinoExiste);

 if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
 }else{
    console.log("Desculpe tivemos um erro!");
 }

 for(let cont = 0 ; cont < 3 ; cont++){
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
    }
 }


