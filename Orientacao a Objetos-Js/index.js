import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",11122233309);
const cliente2 = new Cliente("Aline",88822233308);
const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);
contaCorrenteRicardo.depositar(500);

const contaCorrente2 = new ContaCorrente(2002,cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrente2);

console.log(ContaCorrente.numeroDeContas);




