const frase = prompt('Escribe tu palabra');
// const lowerFrase = frase.toLowerCase().replace(/ /g, '') ;
const lowerFrase = frase.toLowerCase().split(' ').join('') ;
let fraseReverse = '';


for (i = lowerFrase.length - 1; i >= 0; i--) {
  fraseReverse += lowerFrase.charAt([i]);
}

if( lowerFrase === fraseReverse) {
  console.log('Es palíndromo');
} else {
  console.log('No es palíndromo');
}
