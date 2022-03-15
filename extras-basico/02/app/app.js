const frase = prompt('Escribe tu palabra');
const lowerFrase = frase.toLowerCase().replace(/ /g, '') ;
let fraseReverse = '';


for (i = lowerFrase.length - 1; i >= 0; i--) {
  let letters = lowerFrase.charAt([i]);
  let lowerLetter = letters.toLowerCase();
  fraseReverse += lowerLetter;
}

if( lowerFrase === fraseReverse) {
  console.log('Es palíndromo');
} else {
  console.log('No es palíndromo');
}
