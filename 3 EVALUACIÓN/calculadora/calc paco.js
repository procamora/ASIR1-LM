function sumar()
				{
				operando1 = pantalla.value;
				pantalla.value = "";
				opActual = "sumar";
				}

			function igual()
				{
				operando2 = pantalla.value;
				if (opActual == "sumar")
					{
					resultado = parseInt(operando1) + parseInt(operando2);
					pantalla.value = resultado;
					}
				}

			function mostrarEnPantalla(eventoDisparado)
				{
				var evento = (eventoDisparado || window.event);
				var boton  = (evento.srcElement || evento.target);
				pantalla.value = pantalla.value + boton.value;
				}

			function asignarEventos()
				{
				b0.onclick = mostrarEnPantalla;
				b1.onclick = mostrarEnPantalla;
				b2.onclick = mostrarEnPantalla;
				b3.onclick = mostrarEnPantalla;
				b4.onclick = mostrarEnPantalla;
				b5.onclick = mostrarEnPantalla;
				b6.onclick = mostrarEnPantalla;
				b7.onclick = mostrarEnPantalla;
				b8.onclick = mostrarEnPantalla;
				b9.onclick = mostrarEnPantalla;

				bsumar.onclick = sumar;
				//brestar.onclick = restar;
				//bmultiplicar.onclick = multiplicar;
				//bdividir.onclick = dividir;
				bigual.onclick = igual;
				}

			function capturarElementos()
				{
				pantalla = document.getElementById("pantalla");

				b0 = document.getElementById("n0");
				b1 = document.getElementById("n1");
				b2 = document.getElementById("n2");
				b3 = document.getElementById("n3");
				b4 = document.getElementById("n4");
				b5 = document.getElementById("n5");
				b6 = document.getElementById("n6");
				b7 = document.getElementById("n7");
				b8 = document.getElementById("n8");
				b9 = document.getElementById("n9");

				bsumar = document.getElementById("sumar");
				brestar = document.getElementById("restar");
				bmultiplicar = document.getElementById("multiplicar");
				bdividir = document.getElementById("dividir");
				bigual = document.getElementById("igual");
				}

			function iniciar()
				{
				capturarElementos();
				asignarEventos();
				}

			var pantalla, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bsumar, brestar, bmultiplicar, bdividir, bigual;
			var operando1, operando2, resultado;
			var opActual;
			window.onload = iniciar;