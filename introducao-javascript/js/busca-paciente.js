var botaoAdicionar = document.querySelector("#busca-paciente");
botaoAdicionar.addEventListener("click", function(){
	console.log(botaoAdicionar);
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

		xhr.addEventListener("load", function(){
			console.log(xhr.responseText);
		});

		xhr.send();

});
