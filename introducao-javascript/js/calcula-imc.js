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

				var pesoEhValido = validaPeso(peso);
				var alturaEhValida = validaAltura(altura);

				if (!pesoEhValido){
				console.log("peso inválido");
				pesoEhValido = false;
				tdImc.textContent = "peso inválido";
				paciente.classList.add("paciente-invalido");
			}

				if (!alturaEhValida){
				console.log("altura inválida")
				alturaEhValida = false;
				tdImc.textContent = "altura inválida"
				paciente.classList.add("paciente-invalido");

			}

				if(pesoEhValido && alturaEhValida){
				var imc =  calculaImc(peso, altura);
				tdImc.textContent = imc; 
			}

			function calculaImc(peso, altura){
				var imc = 0;

				imc = peso / (altura * altura);

				return imc.toFixed(2);
			}
			
			function validaPeso(peso){
				if(peso >= 0 && peso <= 1000){
					return true;
				}else{
					return false;
				}
			}

			function validaAltura(altura){
				if(altura >= 0 && altura <= 3.0){
					return true;
				}else{
					return false;
				}
			}

			}
