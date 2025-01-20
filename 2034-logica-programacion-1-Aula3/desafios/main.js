/* Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.*/
let contador =1;

while (contador <=10){
    console.log(`Cuenta progresiva de 1 a 10: ${contador}`)
    contador += 1;
}
/*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.*/
contador =10;

while (contador >= 0){
    console.log(`Cuenta regresiva de 10 a 0: ${contador}`)
    contador -= 1;
}

/*Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/

let numero = prompt("Ingrese un número para cuenta regresiva:");

while (numero >= 0){
    console.log(`Cuenta regresiva: ${numero}`)
    numero -= 1;
}

/*Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador. */

numero = prompt("Ingrese un número para cuenta progresiva:");
let contadorProgresivo=0
while (contadorProgresivo <= numero ){
    console.log(`Cuenta progresiva: ${contadorProgresivo}`)
    contadorProgresivo += 1;
}