var botaoAdicionar = document.querySelector("#busca-paciente");
botaoAdicionar.addEventListener("click", function(){
	console.log(botaoAdicionar);
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json");


		xhr.addEventListener("load", function(){
			var erroAjax = document.querySelector("#erro-ajax");
			if(xhr.status == 200){
				var resposta = xhr.responseText;
				var pacientes = JSON.parse(resposta);
			
				pacientes.forEach(function (paciente){
				adicionaPacienteNaTabela(paciente);
			}); 
		}else{
			erroAjax.classList.remove("invisivel");
			console.log(xhr.status);
			console.log(xhr.responseText);
			
			}
		});

		xhr.send();

});
