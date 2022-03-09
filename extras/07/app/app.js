// ************************************************* Consultando desde fuera el array.

// const daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sabado'];

// const whatDayIs = () => {
//   let question = prompt('Introduce un número entre 0 y 6');

//   if(!isNaN(question) && question >= 0 && question <= 6) {
//     return daysOfWeek[question];
//   } else {
//     return alert('Los valores introducidos no son correctos');
//   };
// }

// console.log(whatDayIs());

// ************************************************* Pasando el array como parámetro solo para consulta

const daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sabado'];

const whatDayIs = (arr) => {
  let question = prompt('Introduce un número entre 0 y 6');

  if(!isNaN(question) && question >= 0 && question <= 6) {
    return arr[question];
  } else {
    return alert('Los valores introducidos no son correctos');
  };
}

console.log(whatDayIs(daysOfWeek));
