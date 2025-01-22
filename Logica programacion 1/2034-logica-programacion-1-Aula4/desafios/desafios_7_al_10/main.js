/*Desafíos finales:
Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
*/
let edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

/*
Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
*/
let numero = parseInt(prompt("Ingrese un numero:"));
if (numero > 0) {
  console.log(`El numero ${numero} es positivo`);
} else if (numero < 0) {
  console.log(`El numero ${numero} es negativo`);
} else {
  console.log(`El numero ${numero} es igual a cero`);
}
/*
Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
*/
let contador = 1;
while (contador < 11) {
  console.log(contador);
  contador++;
}

/*
Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
*/
let nota = 6;
if (nota >= 7) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
