const frase = prompt('Escribe tu frase');
let fraseReverse = '';

for (i = frase.length - 1; i >= 0; i--) {
  let letters = frase.charAt([i]);
  fraseReverse += letters;
}

console.log(fraseReverse);
