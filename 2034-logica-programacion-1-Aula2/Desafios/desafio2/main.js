/*
Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
*/

let numeroUsuario = prompt("Ingrese un número:");

if (numeroUsuario > 0) {
  alert("El número ingresado es positivo.");
} else if (numeroUsuario < 0) {
  alert("El número ingresado es negativo.");
} else {
  alert("El número es cero")
}
