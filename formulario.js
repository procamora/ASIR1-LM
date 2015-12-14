 
 function mostrar(form){
    var texto = "" + "Tu nombre es: "
    texto += form.nombre.value + "\n\r"
    texto += "Y tus apellidos son: "
    texto += form.apellidos.value + "\n\r"
    form.areaTexto1.value = texto
  }

