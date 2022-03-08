//Ejemplo de primitivo que son pasados por valor, tengo una varible a, otra variable b
//en la línea 3 yo igualo el valor de b a la variable a, sin embargo al darle otro
//valor a la variable a más abajo yo no estoy cambiando el valor de b.
let a = 10;
let b = a;
a = 30;

console.log(a, b);

// Ejemplo de que si los objetos son pasados por referencia, en este caso yo quiero cambiar
//el valor de nombre dentro de la variable Ana, sin embargo al ser pasado por referencia
//lo cambia tanto en la variable Ana como en la variable Juan.

let juan = {nombre : 'Juan'};
let ana  = juan;
ana.nombre = 'Ana';
console.log(juan, ana);

//Ejemplo de como pasando el valor por referencia, por mucho que en tony mi parámetro sea la variable peter,
// si mando como parámetro la variable peter en este caso le está cambiando el valor por referencia y le está dando 
// el valor de 'Tony', lo mismo con la variable Tony.

const cambiaNombre = (persona) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre(peter);


//Para poder resolver esto es cuando queremos crear una copia de un objeto, pongamos el valor como un objeto y le 
// añadimos un operador especial para separar las propiedades de un objetos y romper esa referencia, el operador spread '...'
let juan = {nombre : 'Juan'};
let ana  = {...juan};
ana.nombre = 'Ana';
console.log(juan, ana);


// Para resolverlo en la función de flecha tenemos que añadir el parámetro rest '...', tiene la misma 
// sintaxis.

const cambiaNombre = ({...persona}) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre(peter);

//Arreglos
// Ejemplo en que yo solo quiero modificar el valor de otrasFrutas pero se modifica en las dos.

const frutas = ['Manzanas', 'Pera', 'Piña'];
const otrasFrutas = frutas;

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});

//Igualmente se resuelve con el operador spread.
const frutas = ['Manzanas', 'Pera', 'Piña'];
const otrasFrutas = [...frutas];

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});
