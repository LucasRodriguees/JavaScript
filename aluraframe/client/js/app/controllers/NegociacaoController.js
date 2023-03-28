class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
         this._inputData = $("#data"); 
         this._inputQuantidade = $("#quantidade");
         this._inputValor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();
        alert("chamei a ação no controller");

        console.log(typeof(this._inputData.value));

        let data = new Date(this._inputData.value.replace(/-/g,","));
        console.log(data);

    }

    
}