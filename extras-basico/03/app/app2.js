const frase = prompt('Escribe tu frase');
const vowels = [ 'a', 'e', 'i', 'o', 'u'];
let founded = false;

let fraseMin = '';

if(frase != null) {
  fraseMin = frase.toLowerCase();
}

for(i = 0; i < fraseMin.length; i++) {
  let elem = fraseMin.charAt([i]);
  for (j = 0; j < vowels.length; j++) {
    if(elem === vowels[j]) {
      alert(`La primera vocal es ${elem}`);
      founded = true;
    }
  }
  if (founded === true) {
    break;
  }
}