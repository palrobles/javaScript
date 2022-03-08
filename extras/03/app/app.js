

let arrayVowels = null;

const getTextFromUser = () => {
  const vowels   = /[aeiou]/gi;
  let textUser   = prompt ('Intruduce una frase'),
  arrayUser      = [...textUser],
  result         = null,
  firstVowel     = null;
  

  for(let i = 0; i < arrayUser.length ; i++) {
    if( arrayUser[i].match(vowels)) {
      arrayVowels = result.push(arrayUser[i]);
    }
  }

  firstVowel = result[0];
  console.log(firstVowel);

};

getTextFromUser();