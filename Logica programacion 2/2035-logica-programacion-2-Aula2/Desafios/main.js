/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function saludar() {
  console.log("¡Hola, mundo!");
  return;
}
saludar();
/*
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/
function saludarUsuario(nombre) {
  console.log(`¡Hola, ${nombre}!`);
  return;
}

saludarUsuario("Cecilia");
/*
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/

function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(6);
console.log(resultadoDoble);

/*
Crear una función que reciba tres números como parámetros y devuelva su promedio.
*/
function calcularPromedio(numero1, numero2, numero3) {
  let promedio = (numero1 + numero2 + numero3) / 3;
  return promedio;
}

let resultadoPromedio = calcularPromedio(3,7,8);
console.log(resultadoPromedio)

/*Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
 */
function encontrarMayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

let numeroMayor = encontrarMayor(5,1);
console.log(numeroMayor)
/*
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/
function calcularCuadrado(numero) {
    return numero*numero;
}

let resultadoCuadrado = calcularCuadrado(7);
console.log(resultadoCuadrado)