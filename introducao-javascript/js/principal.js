			console.log("oi mundooooo");
			
			var titulo = document.querySelector(".titulo");

			titulo.textContent = "Aparecida Nutricionista"

			var pacientes = document.querySelectorAll(".paciente");

			for(var i = 0; i < pacientes.length; i++){

					var paciente = pacientes[i];		

				var tdpeso = paciente.querySelector(".info-peso");
				var peso = tdpeso.textContent;

				var tdaltura = paciente.querySelector(".info-altura");
				var altura = tdaltura.textContent;
				
					// selecionando a coluna do IMC
				var tdImc = paciente.querySelector(".info-imc");

				var pesoEhValido = true;
				var alturaEhValida = true;

				if (peso <= 0 || peso >= 1000){
				console.log("peso inválido");
				pesoEhValido = false;
				tdImc.textContent = "peso inválido";
				paciente.classList.add("paciente-invalido");
			}

				if (altura <= 0 || altura >= 3.00){
				console.log("altura inválida")
				alturaEhValida = false;
				tdImc.textContent = "altura inválida"
				paciente.classList.add("paciente-invalido");

			}

				if(pesoEhValido && alturaEhValida){
				var imc = peso / (altura * altura); 
				tdImc.textContent = imc.toFixed(2); 
			}
			
			}

			