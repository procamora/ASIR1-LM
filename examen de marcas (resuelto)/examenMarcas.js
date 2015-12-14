// JavaScript Document

function iniciar (){
	
	
	//Capturas
	pincha=document.getElementById("lee");
	contenido=document.getElementById("tocho");
	ope1=document.getElementById("op1");
	ope2=document.getElementById("op2");
	bsuma=document.getElementById("suma");
	pantalla=document.getElementById("resultado");
	fmas=document.getElementById("masf");
	fmenos=document.getElementById("menosf");
	
	
	
	//formu
	
	botonEnvia=document.getElementById("envia");
	selectT=document.getElementsByName("tarjetas");
	nombre=document.getElementById("nombre");
	nif=document.getElementById("nif");
	mail=document.getElementById("mail");
	Enombre=document.getElementById("enombre");
	Enif=document.getElementById("enif");
	Email=document.getElementById("ecorreo");
	formula=document.getElementById("miform")
	
	
	//resumen
	
	bresumen=document.getElementById("bresu")
	cont=document.getElementById("contenido")
	
	
	
	//Asignaciones
	pincha.onclick=muestra
	bsuma.onclick=sumalos
	fmas.onclick=sumaf
	fmenos.onclick=restaf
	
	//formu
	
	botonEnvia.onclick=comprueba
	bresumen.onclick=resumen
	
	
	function limpiaE(){
		Enombre.innerHTML=""
		Enif.innerHTML=""
		Email.innerHTML=""
		
		}
	
	
	
	
	function comprueba(){
		
				var msgVacio="Este campo esta vacio"
				
				
				if (nombre.value == "" || nif.value == "" || mail.value == "")
				
				
				{
				
								if(nombre.value == ""){
									
								Enombre.innerHTML=msgVacio}
								
								else {Enombre.innerHTML=""}
								
									
									
									
									
						
								
								if(nif.value == ""){
									
								Enif.innerHTML=msgVacio }else {Enif.innerHTML=""}
								
								
								if (nif.value.length!=8){
									
									
									Enif.innerHTML="Escribe 8 caracteres"
									
									
									}else {Enif.innerHTML=""}
								
									
									
									
									
									
								if(mail.value == ""){
									
								Email.innerHTML=msgVacio
								
								}else{Email.innerHTML=""}
								
								
								var x=mail.value;

								var atpos=x.indexOf("@");
								var dotpos=x.lastIndexOf(".");
								if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
 								
								
								 { Email.innerHTML="Email invalido"}
								 
								 return false
								
									
									
									
	
						
						
				
				}
								
				
			
				formula.submit()
				
						
		
		
		}
	

	function resumen()
	
	
	{
		
		var indice = document.miform.tarjetas.selectedIndex 
	cont.innerHTML = 
	
	
	
					"<div><span>tipo tarjeta: </span> "+"<span id=val class=val>"+  document.miform.tarjetas.options[indice].value+ 
					
					"<P>nombre :"+nombre.value+ "</P>"+
					"<P>NIF :"+nif.value+ "</P>"+
					"<P>Mail :"+mail.value+ "</P>"
					
					
		
var t=0;
function contar()
{
t++;
}
var i = setInterval(" contar() ",1);

function acabar_conteo()
{
clearInterval(i);
var tiempo = t/1000;
var z = document.getElementById(' tiempo ');
z.innerHTML=' La página tomo '+tiempo+' segundos en cargar';
}

					
					
					
				
					
					
					
					
					
					
					
					
					
					
	
	}
	
	
	
	var tamanos=new Array ("16px","19px")
	function sumaf ()
	
	{
		
		document.body.style.fontSize=tamanos[1]
		
		}
	function restaf ()
	
	{
		
		document.body.style.fontSize=tamanos[0]
		
		}
	
	
	
	
	
	
	
	function muestra () {
		
		
		if (contenido.style.display=="none"){
		
		contenido.style.display="block";
		pincha.innerHTML="[Leer Menos]";
		
		}else {
			
		contenido.style.display="none";
		pincha.innerHTML="[Leer Mas]";}
	
		
		}
	
	
	
	function sumalos (){
		
		resu=parseInt(ope1.value)+parseInt(ope2.value)
		pantalla.innerHTML=resu;
		
		
		
		
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	}



























window.onload=iniciar