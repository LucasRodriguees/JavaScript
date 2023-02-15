class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = "111222333-09";
cliente1.agencia = "1001";
cliente1.saldo = 0;
cliente1.rg = 551513655661;

 cliente2.nome = "Aline";
 cliente2.cpf = "888222333-09";
 cliente2.agencia = "2002"
 cliente2.saldo = 0;

console.log(cliente1, cliente2);