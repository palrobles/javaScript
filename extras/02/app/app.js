
let dniNumber = 0,
    identityLetter = '';
const arrLetters = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];


const getValueFromUser = () => {

  do {
    var dniNumber = prompt("Enter a number between 0 and 9999999");
    if (dniNumber > 0 && dniNumber <= 99999999 ) {
      dniNumber = Number(dniNumber);
      identityLetter = arrLetters[dniNumber % 23];
      break
    } else if ( dniNumber != undefined) {
      alert('You must to enter a number');
    }
  }

  while ( dniNumber != null)

};

getValueFromUser();
console.log(identityLetter);