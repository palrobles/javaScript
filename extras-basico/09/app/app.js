const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let frase = prompt('Introduce una frase');
let foundedUpperCase = false;
let foundedLowerCase = false;

const howIs = () => {
  for( i = 0; i < frase.length; i++) {
    let elem = frase[i];
    for( j = 0; j < upperCase.length; j++) {
      if( elem == upperCase[j]) {
        foundedUpperCase = true;
      }
    }
    for( k = 0; k < lowerCase.length; k++) {
      if( elem == lowerCase[k]) {
        foundedLowerCase = true;
      }
    }
  }

  if( foundedUpperCase == true && foundedLowerCase == true ) {
    alert ('Contiene mayúsculas y minúsculas');
  } else if (foundedUpperCase == true) {
    alert ('Contiene solo mayúsculas');
  } else if (foundedLowerCase == true) {
    alert ('Contiene solo minúsculas');
  } else {
    alert ('No tiene letras');
  }
};

howIs();

