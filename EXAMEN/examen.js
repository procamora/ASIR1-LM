/*
window.onload = iniciar;

function iniciar(){
	mostrar(colapsable);
	mostrar(form);
    boton1();
    boton2();
    boton3();
    contador();
}
*/

//EJERCICIO 2
function mostrar(colapsable) {
	var oculto = document.getElementById(colapsable);

	if(oculto.style.display == 'none')
		oculto.style.display='';
	else
		oculto.style.display='none'; 
}

//EJERCICIO 3 
/* Importante!!!!: La funcion funciona correctamente, pero si la activo la del ejercicio 2 no funciona por lo que la dejo como momentario
 function mostrar(form){
    var texto = ""
    texto += form.nombre.value
    texto += ""
    texto += form.apellidos.value
    form.areaTexto1.value = texto
  }

*/

//EJERCICIO 4

function design(){ 
document.getElementById(men).style.backgroundColor="#e9e9e9"; 
document.getElementById(rojo).style.color="#F00";
}

function boton1(){
document.fgColor = "red";
}
function boton2(){
document.fgColor = "blue";
}
function boton3(){
document.fgColor = "black";
}

//EJERCICIO 5

function Validar(form)
{
  if (form.nombre.value == "") { 
      alert("Por favor ingrese su nombre"); 
      form.Nombre.focus(); 
      return; }
  
    if (form.dni.value == "") { 
      alert("Por favor ingrese su nombre"); 
      form.dni.focus(); 
      return; }

  if (form.correo.value == "") { 
      alert("Por favor ingrese su nombre"); 
      form.correo.focus(); 
      return; }

if (!er_usuario.test(formulario.correo.value)) {
    alert("Debe poner un correo valido si quieres que valide");
    form.correo.focus(); 
    return
      
  form.submit();
/*
  
var er_usuario = /^(.+\@.+\..+)$/;

if (formulario.nombre.value.length < 5) {
		alert("Debes poner tu nombre y apallidos");
		return false

function validarformulario(){
    nif(dni)
    
    }

//DNI



function nif(dni) {
	  numero = dni.substr(0,dni.length-1);
	  let = dni.substr(dni.length-1,1);
	  numero = numero % 23;
	  letra='TRWAGMYFPDXBNJZSQVHLCKET';
	  letra=letra.substring(numero,numero+1);
	  if (letra!=let) {
	    alert('Dni erroneo');
	  }else{
    alert('Dni correcto');
	  }
	}


//EMAIL
if (!er_usuario.test(formulario.correo.value)) {
    alert("Debe poner un correo valido si quieres que valide");
    return false
}


*/


//EJERCICIO 6
		var tiempoInicial=0;
		function tiempo(){
			tiempoInicial++;
			document.getElementById('tiempo').innerHTML=tiempoInicial;
			if(tiempoInicial==0){
				clearTimeout(t);
				alert("fin");
			}
		}
		var t = setInterval(tiempo,1000);


//EJERCICIO 7
 
 function formulario2(form){
    var texto = "" + "Tu nombre y apellidos son: "
    texto += form.nombre.value + "\n\r"
    texto += "tu tarjeta es: "
    texto += form.tarjeta.value + "\n\r"
    texto += "Y tu dni es: "
    texto += form.dni.value + "\n\r"
    texto += "Y tu email es: "
    texto += form.correo.value + "\n\r"
    form.areaTexto1.value = texto
  }













