const getDay = prompt('Intruduce un número entre 0 y 6');
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];


if (parseInt(getDay) >= 0 && parseInt(getDay) <= 6) {
 let day = days[getDay];
  alert (` El día correspondiente es ${day}`);
} else {
  alert('El valor introducido no es correcto');
}
