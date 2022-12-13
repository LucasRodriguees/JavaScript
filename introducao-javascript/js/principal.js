			console.log("oi mundooooo");
			
			var titulo = document.querySelector(".titulo");
			//console.log(titulo);
			//console.log(titulo.textContent)

			titulo.textContent = "Aparecida Nutricionista"

			var paciente = document.querySelector("#primeiro-paciente");

			var tdpeso = paciente.querySelector(".info-peso");

			var tdaltura = paciente.querySelector(".info-altura");

			var peso = tdpeso.textContent;

			var altura = tdaltura.textContent;

				// selecionando a coluna do IMC
			var tdImc = document.querySelector(".info-imc");

			var pesoEhValido = true;
			var alturaEhValida = true;

			if (peso <= 0 || peso >= 1000){
				console.log("peso inválido");
				pesoEhValido = false;
				tdImc.textContent = "peso inválido"
			}

			if (altura <= 0 || altura >= 3.00){
				console.log("altura inválida")
				alturaEhValida = false;
				tdImc.textContent = "altura inválida"
			}

			if(pesoEhValido && alturaEhValida){
				var imc = peso / (altura * altura); 
				tdImc.textContent = imc; 
			}
			