var num1 = prompt("Introduce un número","");	
var num2 = prompt("Introduce otro número","");

function compara(n1,n2)
		{
	var v1 = parseInt(n1);
	var v2 = parseInt(n2);
	if(v1 > v2) 
		alert(v1,"El numero mayor es");
	else if (v1 == v2) 
		alert("Los numeros son iguales");
	else 	alert(v2,"El numero mayor es");
		}
	compara(num1,num2);
    
