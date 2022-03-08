//Entra en un sitio web para comprobar si está abierto.

let dia = 0;
let horaDeApertura = 10;
let horaDeEntrada = 11;
let mensaje = '';

//Condición básica

// if (dia === 0 || dia === 6) {
//       horaDeApertura = 9;
// } else {
//       horaDeApertura = 11;
// }

//Resumiendo la condición

// if ([0.6].includes(dia)) {
//       horaDeApertura = 9;
// } else {
//       horaDeApertura = 11;
// }

//Resumiendo la condición con un ternario

horaDeApertura = ([0.6].includes(dia)) ? 9 : 11;

// if (horaDeEntrada < horaDeApertura) {
//       mensaje = 'Todavía está cerrado'
// } else {
//       mensaje = 'Adelante, está abierto'
// }

mensaje = (horaDeEntrada < horaDeApertura) ? 'Todavía está cerrado' : 'Adelante, está abierto';

console.log((dia, mensaje));

