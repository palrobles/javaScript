//Un objeto literal son aquellos objetos que tienen pares de valores.

let personaje = {
  nombre: 'Tony Stark',
  condeName: 'Ironman',
  paloma: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip:  '10880, 90265',
    ubicacion: 'Malibu, California'
  }
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('Numero de trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

// const x = 'paloma';
console.log('Vivo', personaje['paloma']);