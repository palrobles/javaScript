

let arrayVowels = null;

const getTextFromUser = () => {
  const vowels   = /[aeiou]/gi;
  let textUser   = prompt ('Introduce una frase');
  let arrayUser      = [...textUser],
  result             = [],
  firstVowel         = null;
  

  for(let i = 0; i < arrayUser.length ; i++) {
    if( arrayUser[i].match(vowels)) {
      arrayVowels = result.push(arrayUser[i]);
    }
  }

  firstVowel = result[0];
  console.log(firstVowel);

};

getTextFromUser();


//************* SOLUCIÓN SARA - ITERA EN CADENA - NO TODO SON ARRAYS EN LA VIDA*/

const getTextFromUser2 = () => {
  const vowels   = /[aeiou]/gi;
  let textUser   = prompt ('Introduce una frase');

  if(textUser){  
    for(let i = 0; i < textUser.length ; i++) {
      if( textUser.charAt(i).match(vowels)) {
        return textUser.charAt(i);      
      }    
    }
  }

  return null;
};



console.log(getTextFromUser2());