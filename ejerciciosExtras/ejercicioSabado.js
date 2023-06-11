/*
 * 1. Crear un arreglo llamado "nombres" que va a ser una lista de nombres
 *     de personas invitadas a una fiesta y agregar los siguientes nombres:
 *     Carla - Pedro - Daiana - Ivan - Valeria - Ivette - Mario - Vanesa
 * 
 * 2. Imprimir solo los nombres que terminen con la letra "a"
 * 
 * 3. Crear un arreglo llamado "apellidos" que va a contener los apellidos de las
 *     personas de la lista anterior, asignarle los siguientes valores
 *     Gomez - Gonzales - Hernandez - Suarez - Gutierrez - Gimenez - Gomez - Mendez
 * 
 * 4. Imprimir todos las personas (nombre y apellido) cuyo nombre termine en "a"
 *     y cuyo apellido empiece con "G"
 * 5. Crear un arreglo llamado "estadoInvitacion" que almacenara en formato
 *     booleano (true o false) el estado de la invitacion de cada persona
 *     invitada y asignarle los siguientes valroes:
 *     true - false - true - true - true - false - true - false
 * 
 * 6. Imprimir todas las personas invitadas (inicial del nombre y apellido) que
 *    tienen la invitacion validada
 * 7. Imprimir todas las personas (inicial del nombre, apellido y estado de la
 *    invitacion) que cumplan con las condiciones del ejercicio 2, 4 y 6.
 */


// 1
let nombres = [];
nombres = ['Carla', 'Pedro', 'Daiana', 'Ivan', 'Valeria', 'Ivette', 'Mario', 'Vanesa'];

// 2
nombres.forEach(elemento => {
  if (elemento[elemento.length-1] === 'a') {
    console.log(elemento);
  }
});

// 3
let apellidos = ['Gomez', 'Gonzales', 'Hernandez', 'Suarez', 'Gutierrez', 'Gimenez', 'Gomez', 'Mendez'];

// 4
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].slice(nombres[i].length-1) === 'a' && apellidos[i].slice(0,1) === 'G') {
        console.log(nombres[i] + ' ' + apellidos[i]);
    }
}

// 5
let estadoInvitacion = [true, false, true, true, true, false, true, false];

// 6
for (let i = 0; i < nombres.length; i++) {
  if (estadoInvitacion[i] === true) {
      console.log(nombres[i].slice(0,1) + ' ' + apellidos[i].slice(0,1));
  }
}

// 7
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i].slice(nombres[i].length-1) === 'a' && apellidos[i].slice(0,1) === 'G' && estadoInvitacion[i] === true) {
      console.log(nombres[i].slice(0,1) + ' ' + apellidos[i] + ' ' + estadoInvitacion[i]);
  }
}
