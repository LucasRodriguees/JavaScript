import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Aline";
cliente2.cpf = 88822233308;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 2002;
contaCorrente2.cliente = cliente2;

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, contaCorrente2);


console.log(contaCorrenteRicardo); 

