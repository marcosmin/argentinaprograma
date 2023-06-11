/*
1) Dada la cadena " Bienvenidxs al Curso de Programación "
Escribir un código que:
*/
let stringBienvenidxs = " Bienvenidxs al Curso de Programación ";


// inciso a) muestre la longitud de la frase
console.log("longitud de la frase: " + stringBienvenidxs.length);


// inciso b) elimine de la frase los espacios al comienzo
stringBienvenidxs = stringBienvenidxs.trim();
console.log(stringBienvenidxs);
console.log("longitud de la frase: " + stringBienvenidxs.length);


// inciso c) imprima el primer y último elemento de la cadena
console.log(`Primer elemento: ${stringBienvenidxs.charAt(0)} y el segundo elemento ${stringBienvenidxs.charAt(stringBienvenidxs.length-1)}`);


// inciso d) cree una nueva variable para almacenar la frase anterior de modo que en la que sólo la primera letra esté con mayúscula y muestre la nueva frase por pantalla

let cadenaMinuscula = stringBienvenidxs.toLowerCase();
let result = stringBienvenidxs[0] + cadenaMinuscula.slice(1);
console.log(result);

// inciso e) escriba un nuevo string y arme otro que sea la unión del inicial más el que usted creó


let nuevoString = " javascript";
let stringConcatenados = stringBienvenidxs + nuevoString;
console.log(stringConcatenados);


// --------------------------------------------------------------------------

/*
"Bienvenidxs al curso de programación 2023"

e) ¿Cómo podemos saber si el string inicial del ejercicio tiene números? ¿Como podemos hacer para saber si todos los caracteres son números?
*/

let cadena = "Bienvenidxs al curso de programación 2023";

// inciso a) ¿Cómo puedo hacer para saber en qué posición empieza la palabra "curso"? ¿y la palabra "programa"?
console.log(`La palabra 'curso' comienza en la posición: ${cadena.indexOf('curso')}`);
console.log(`La palabra 'programa' comienza en la posición: ${cadena.indexOf('programa')}`);


// inciso b) imprima en pantalla la palabra curso usando la función adecuada para los strings.
console.log(`Imprimo la palabra "curso" ---> ${cadena.slice(15,20)}`);

// inciso c) Cree un arreglo cuyos elementos sean las palabras de la frase e imprimalo en pantalla.

let array1 = cadena.split(" ");
console.log(array1);
console.log(`La longitud del array1 es ${array1.length}`)

// inciso d)  Cree otro arreglo cuyos elementos sean las letras de la frase. Muestre la longitud.
let array2 = cadena.split("");
console.log(array2);
console.log(array2.length);

// inciso e) ¿Cómo podemos saber si el string inicial del ejercicio tiene números? ¿Como podemos hacer para saber si todos los caracteres son números?


console.log('El string inicial del ejercicio tiene números?');
console.log(isNaN(cadena));

console.log('Todos los caracteres son números?');
let sonNumeros = array2.map(e => !isNaN(e))
console.log(sonNumeros);
