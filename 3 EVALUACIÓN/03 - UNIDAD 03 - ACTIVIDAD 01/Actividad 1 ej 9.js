function esPar (numero) 
{ 
    var resultado = numero%2; 
    if (resultado == 0) 
		return true; 
	else 
		return false; 
} 
	var numintroducido = prompt("introduce un numero:", ""); 
	alert("es par: " + esPar(numintroducido));