
// Variables
let data = [];
const result = document.querySelector('#result');
let dataResult = 0;


//Pedir números
const getValueFromUser = () => {

  do {
    number = prompt('Enter a number');
    if (isNaN(number) || number === '') {
      window.alert('You must to enter a number');
    } else if ( number != null) {
      data.push(number);
    }
  }
  while ( number != null)

  sumData(data);
};

//Pintar la suma de todos los números
//.map y parseInt para poder pasar los valores recogidos por el promt a number
//.reduce para sumar los valores de un arr.

const sumData = ( data ) => {
  dataResult = data
    .map((number) => {
      return /^\d+$/.test(number) ? parseInt(number) : 0; 
    })
    .reduce((firstNumber, lastNumber) => {
      return firstNumber+lastNumber
    })

  console.log(typeof dataResult);
  result.innerHTML = `The result is ${dataResult}`;
};


getValueFromUser();

