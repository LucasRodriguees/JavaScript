//classe Abstrata
export class Conta{
    constructor(saldoInicial,cliente,agencia){

        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
       
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
       
    }

    get cliente(){
        return this._cliente; 
    }

    get saldo(){
        return this._saldo;
    }

    //método abstrato
    sacar(){
       throw new Error("O método sacar da Conta e abstrato");
    }

    _sacar(valor,taxa){

        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }


}