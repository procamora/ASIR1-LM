var valores = [true, 5, false, "hola", "adios", 2];

//1. Determinar cual de los dos elementos de texto es mayor
// Si el resultado es true, el primer texto es mayor
var resultado = valores[3] > valores[4];
alert(resultado);

/*2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
necesarios para obtener un resultado true y otro resultado false*/
var v = valores[0];
var f = valores[2];

var verdadero = v || f;
var falso = v && f;

alert('el primero es ' + verdadero)
alert('el segundo es ' + falso)

/*3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
elementos numéricos*/
var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
var resta = num1 - num2;
var multi = num1 * num2;
var divi = num1 / num2;
var modulo = num1 % num2;

alert('la suma es ' + suma);
alert('la resta es ' +resta);
alert('la multiplicacion es ' +multi);
alert('la division es ' + divi);
alert('el modulo es ' + modulo);