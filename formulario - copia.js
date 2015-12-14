 
 function mostrar(form){
    var texto = "" + "Tu nombre es: "
    texto += form.nombre.value + "\n\r"
    texto += "Y tus apellidos son: "
    texto += form.apellidos.value + "\n\r"
    texto += "Tu sexo es : "
    if ( form.sexo[0].checked ){ texto += "Hombre.\n\r" }
    else if ( form.sexo[1].checked ){ texto += "Mujer.\n\r" }
         else { texto += "¿Eres indefinido ?.\n\r" }
    texto += "Y tu pais es: "
    texto += form.Paises.value + "\n\r"
    texto += "Y tu trabajo es: "
    texto += form.experiencia.value + "\n\r"
    form.areaTexto1.value = texto
  }

