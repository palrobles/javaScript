let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos [2 - 2];
let ultimo = juegos [juegos.length - 1];

console.log(primero, ultimo);

//recorrer un array

juegos.forEach((elemento, indice, arr) => {
  console.log({elemento, indice, arr});
})

//Añadir un elemento al array al final

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

//Añadir un elementos al array al principio.

nuevaLongitud = juegos.unshift('Mortal Kombat')
console.log({nuevaLongitud, juegos});

//Eliminar el último elemento del array

let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);

//Eliminar un elemento del array a partir de una posición concreta

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

//Saber la posición de un elemento del array

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});