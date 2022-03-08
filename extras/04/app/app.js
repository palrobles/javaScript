const getTextFromUser = () => {
  let text = prompt ('Introduce una frase cualquiera'),
  textReverse = text.split('').reverse().join(''); 
  console.log(textReverse);
}

getTextFromUser();