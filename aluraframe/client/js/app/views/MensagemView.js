class MensagemView extends Views {

    template(model){
        return model.texto ? `<p class ="alert alert-info">${model.texto}</p>`: "<p></p>"
    }

    
}