function mostrar(colapsable, img) {
	var oculto = document.getElementById(colapsable);

	if(oculto.style.display == 'none')
		oculto.style.display='';
	else
		oculto.style.display='none'; 


var Imagen;

	Imagen=document.getElementById(img);

	if(Imagen.src.indexOf('images/+.png') > -1)
		Imagen.src = 'images/-.png';
	else
		Imagen.src = 'images/+.png'; 
}