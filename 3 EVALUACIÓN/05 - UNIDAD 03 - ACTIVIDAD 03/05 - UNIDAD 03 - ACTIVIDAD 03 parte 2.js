function mostrar(colapsable) {
	var oculto = document.getElementById(colapsable);

	if(oculto.style.display == 'none')
		oculto.style.display='';
	else
		oculto.style.display='none'; 
}



function addChar(input, character)
{
    if(input.value == null || input.value == "0")
        input.value = character
    else
        input.value += character
}

function deleteChar(input)
{
    input.value = input.value.substring(0, input.value.length - 1)
}
