function validacion(formulario) {
    
/*
var formulario = document.formulario;

var valor1 = document.getElementById("Usuario").value;
var valor2 = document.getElementById("Contraseña").value;
var valor3 = document.getElementById("Repeat").value;
*/

var er_usuario = /^(.+\@.+\..+)$/;
/* parece que esto valida casi todos los correos
    valor = document.getElementById("campo").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
return false;
}
*/ 

//usuario, debe de ser un email
if (!er_usuario.test(formulario.usuario.value)) {
    alert("Debe poner un correo si quieres que valide");
    return false
}
//las contraseñas deben de ser iguales

if (formulario.contraseña.value != formulario.repeat.value) {
    alert("Las contraseñas no coinciden.");
    return false
    }



	//el formulario se envia
	alert("El formulario ha sido aceptado y enviado");
	//document.formulario.submit();
    return true
    }