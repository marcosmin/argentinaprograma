/* 4. Queremos representar un equipo de fútbol 5.
Para ello necesitamos tener el nombre de cada jugaderes,
su posición (arco, defensa, mediocampo, delanteros) y su edad.
¿Cómo representamos cada jugador? ¿Cómo representamos un equipo?
¿Cómo representamos los 8 equipos que juegan el torneo?
*/


// JUGADORES EQUIPO 1 ---> OBJETOS ------------------------------------------
let jugador1e1 = {nombre:'Sergio', posicion:'arquero', edad: 50};
let jugador2e1 = {nombre:'Lisandro', posicion:'defensor', edad: 35};
let jugador3e1 = {nombre:'Nico', posicion:'mediocampista', edad: 28};
let jugador4e1 = {nombre:'Leo', posicion:'mediocampista', edad: 25};
let jugador5e1 = {nombre:'Marcos', posicion:'delantero', edad: 34};

// EQUIPO 1 ---> ARRAY ------------------------------------------------------
let equipo1 = [jugador1e1, jugador2e1, jugador3e1, jugador4e1, jugador5e1];

//---------------------------------------------------------------------------



// JUGADORES EQUIPO 2 ---> OBJETOS ------------------------------------------
let jugador1e2 = {nombre:'Bautista', posicion:'arquero', edad: 31};
let jugador2e2 = {nombre:'Rodolfo', posicion:'defensor', edad: 18};
let jugador3e2 = {nombre:'Tito', posicion:'mediocampista', edad: 23};
let jugador4e2 = {nombre:'Mauro', posicion:'mediocampista', edad: 34};
let jugador5e2 = {nombre:'Matias', posicion:'delantero', edad: 38};

// EQUIPO 2 ---> ARRAY ------------------------------------------------------
let equipo2 = [jugador1e2, jugador2e2, jugador3e2, jugador4e2, jugador5e2];

//---------------------------------------------------------------------------



// TORNEO ---> ARRAY --------------------------------------------------------
let torneo = [equipo1, equipo2];

//---------------------------------------------------------------------------



// NAVEGAR POR EL ARRAY -------------------------------------- console.log --
console.log(torneo[1][1].nombre);

//--------------- Devuelve el nombre del jugador 2 del equipo 2 del torneo --



// Equipo completo ------------------------------------------- console.log --
console.log('Equipo completo:\n', equipo1);



// Posición de cada jugador ---------------------------------- console.log --
console.log(`La Posición de ${equipo1[0].nombre} es ${equipo1[0].posicion}`);
console.log(`La Posición de ${equipo1[1].nombre} es ${equipo1[1].posicion}`);
console.log(`La Posición de ${equipo1[2].nombre} es ${equipo1[2].posicion}`);
console.log(`La Posición de ${equipo1[3].nombre} es ${equipo1[3].posicion}`);
console.log(`La Posición de ${equipo1[4].nombre} es ${equipo1[4].posicion}`);
