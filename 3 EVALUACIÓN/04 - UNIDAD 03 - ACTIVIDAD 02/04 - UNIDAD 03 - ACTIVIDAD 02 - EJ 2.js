function validarParteA()
				{
				var email = document.getElementById("email");
				var pw1 = document.getElementById("pw1");
				var pw2 = document.getElementById("pw2");

				if ((email.value != "") && (pw1.value != "") && (pw2.value != ""))
					return true;
				else
					return false;					
				}

			function validarParteB()
				{
				var pw1 = document.getElementById("pw1");
				var pw2 = document.getElementById("pw2");

				if (pw1.value == pw2.value)
					return true;
				else
					return false;
				}

			function validarParteC()
				{
				var email = document.getElementById("email");
				if ((email.value.length >= 5) && 
				    (email.value.indexOf("@") != -1) && 
			            (email.value.indexOf(".") != -1) &&
				    (email.value.length < 255))
					return true;
				else
					return false;
				}

			function validar()
				{
				// (!validarParteA) es lo mismo que (validarParteA == false)
				if ( !validarParteA() || !validarParteB() || !validarParteC() )
					{
					alert("el formulario no es correcto");
					}
				else
					{
					document.getElementById("form").submit();
					}

				}