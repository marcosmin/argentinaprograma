/*
2. Escriba un programa que solicite al usuario ingresar un número entero del 1 al
12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
marzo, etc. Su programa deberá ser guardado en un archivo meses.js y
consistirá de imprimir por consola la cantidad de días que tiene el mes
ingresado bajo el siguiente formato:
"La cantidad de dias del mes de [mes] es [cantidadDeDias]"
Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
de dias del mes de enero es 31”.
Para el alcance de este ejercicio, podemos pensar que febrero siempre tiene 28
días.
*/

const readlineSync = require('readline-sync');
const dato = readlineSync.question('Ingrese un numero entero del 1 al 12: ');
const numero = Number(dato);

const arreglo31Dias = [1, 3, 5, 7, 8, 10, 12];
const arreglo30Dias = [4, 6, 9, 11];
const mes =  {1:'Enero', 2:'Febrero', 3:'Marzo', 4:'Abril', 5:'Mayo', 6:'Junio', 7:'Julio', 8:'Agosto', 9:'Septiembre', 10:'Octubre', 11:'Noviembre', 12:'Diciembre'}

if (arreglo31Dias.includes(numero)) {
    console.log(`La cantidad de dias del mes de ${mes[numero]} es 31`);
} else if (arreglo30Dias.includes(numero)) {
    console.log(`La cantidad de dias del mes de ${mes[numero]} es 30`);
} else if (numero === 2) {
    console.log(`La cantidad de dias del mes de ${mes[numero]} es 28`);
} else {
    console.log(`El numero ingresado es invalido`);
}