const readlineSync = require('readline-sync');


//--- FUNCION OBTENER JUGADA COMPUTADORA ----------------------------
function obtenerJugadaComputadora() {
    let jugadaPc = Math.floor(Math.random()*3);
    return jugadaPc
}


//--- FUNCION OBTENER JUGADA USUARIO --------------------------------
function obtenerJugadaUsuario() {
    let dato;
    
    // Ingreso y validacion de datos.
    do {
        dato = readlineSync.question('Ingrese un numero >>> Piedra = 0 | Papel = 1 | Tijera = 2 \n>>> ');
    } while (dato < 0 || dato > 2);

    const jugadaUs = parseInt(dato);
    return jugadaUs
}

let contadorPc = 0;
let contadorUs = 0;


//--- FUNCION DETERMINAR GANADOR ------------------------------------
function determinarGanador(pc, us) {
    let result;

    if(pc === us){
        result = 'Empate';
    } else if (
        pc === 0 && us === 2 ||
        pc === 1 && us === 0 ||
        pc === 2 && us === 1 ){
        contadorPc += 1;
        result = 'Gana la computadora';
    } else {
        contadorUs += 1;
        result = 'Gana el usuario';
    }

    return result;
}


//--- CONSTANTES PARA LAS DISTINTAS JUGADAS -------------------------
const piedra = 'Piedra';
const papel = 'Papel';
const tijera = 'Tijera';


//--- ELIJA MODO DE JUEGO -------------------------------------------
do {
    console.log(`\n--- ELIJA EL MODO DE JUEGO ---------------------------------`);
    datoJuego = readlineSync.question('Una Jugada = 1 | Dos Jugadas = 2 | Mejor de 3 = 3\n>>> ');
    console.log(`------------------------------------------------------------\n`);
} while (datoJuego < 1 || datoJuego > 3);

const modoJuego = parseInt(datoJuego);



for (let i = 0; i < modoJuego; i++) { 
    // Jugada Actual
    console.log(`--- JUGADA ${i+1} DE ${modoJuego} ------------------------------------------`);

    let resultado;

    // "do while" para desempatar de manera parcial (La jugada debe tener un ganador)
    do {

        let jC = obtenerJugadaComputadora();
        let jU = obtenerJugadaUsuario();

        // Asignar el numero ingresado a la jugada correspondiente 
        switch (jC) {
            case 0:
                jugadaComputador = piedra;
                break;
            case 1:
                jugadaComputador = papel;
                break;
            default:
                jugadaComputador = tijera;
        }

        switch (jU) {
            case 0:
                jugadaUsuario = piedra;
                break;
            case 1:
                jugadaUsuario = papel;
                break;
            default:
                jugadaUsuario = tijera;
        }

        // Resultado parcial del juego
        resultado = determinarGanador(jC, jU);
        console.log(`La computadora eligio: ${jugadaComputador}.\nEl usuario eligio: ${jugadaUsuario}.\nEl resultado fue: ${resultado}.`);
        console.log(`------------------------------------------------------------\n`);

    } while (resultado === 'Empate');
}


//--- RESULTADO FINAL DEL JUEGO -------------------------------------
console.log(`--- FIN DEL JUEGO ------------------------------------------`);
if (contadorPc === contadorUs) {
    console.log(`>>> EMPATARON!!!`);
} else if(contadorPc > contadorUs){
    console.log(`>>> GANA LA COMPUTADORA!!!`);
} else{
    console.log(`>>> GANA EL USUARIO!!!`);
}
console.log(`------------------------------------------------------------\n`);