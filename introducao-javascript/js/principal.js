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

			var imc = peso / (altura * altura); // 100 / 2.0 x 2.0 = 100 / 4 = 25

				// selecionando a coluna do IMC
			var tdImc = document.querySelector(".info-imc");

			tdImc.textContent = imc; 

