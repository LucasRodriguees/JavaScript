class Views{

    constructor(elemento){
        if(this.constructor == Views){
            throw new Error("a classe Views não deve ser instanciada");
        }
        this._elemento = elemento;
        
    }

    template(){
        throw new Error("o método não foi implementado com sucesso")
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}



