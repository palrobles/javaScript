
// Variables
// let data = [];
// const result = document.querySelector('#result');
// let dataResult = 0;


//Pedir números
// const getValueFromUser = () => {

//   do {
//     number = prompt('Enter a number');
//     if (isNaN(number) || number === '') {
//       window.alert('You must to enter a number');
//     } else if ( number != null) {
//       data.push(number);
//     }
//   }
//   while ( number != null)

//   sumData(data);
// };

//Pintar la suma de todos los números
//.map y parseInt para poder pasar los valores recogidos por el promt a number
//.reduce para sumar los valores de un arr.

// const sumData = ( data ) => {
//   dataResult = data
//     .map((number) => {
//       return /^\d+$/.test(number) ? parseInt(number) : 0; 
//     })
//     .reduce((firstNumber, lastNumber) => {
//       return firstNumber+lastNumber
//     })

//   console.log(typeof dataResult);
//   result.innerHTML = `The result is ${dataResult}`;
// };


// getValueFromUser();

// Variables



const result = document.querySelector('#result');
let resultSum = 0;

//*********************************************************************SARA
//Pedir números

const getValueFromUser = () => {

  do {
    var number = prompt('Enter a number');
    if (Number(number)) {
      number = Number(number);
      resultSum = resultSum + number;
    } else {
        if (number != undefined) {
        alert('You must to enter a number');
      }
    }
  }

  while ( number != null)
  result.innerHTML = `The result is ${resultSum}`;

};



getValueFromUser();


//*********************************************************************SARA SIMPLIFICANDO MI LÓGICA

// Variables

// const result = document.querySelector('#result');
// let dataResult = 0;

//Pedir números

// const getValueFromUser = () => {
//   let data = [];
//   do {
//     number = prompt('Enter a number');
//     if (isNaN(number)) {
//       window.alert('You must to enter a number');
//     } else if(number !== null){
//       data.push(parseInt(number));
//     }
//   }

//   while ( number != null)  
//   if(data.length > 0)
//   {
//     sumData(data);
//   }
// };



//Pintar la suma de todos los números

//.reduce para sumar los valores de un arr.



// const sumData = ( data ) => {
//   dataResult = data
//     .reduce((firstNumber, lastNumber) => {
//       return firstNumber+lastNumber
//     })
//   console.log(typeof dataResult);
//   result.innerHTML = `The result is ${dataResult}`;
// };



// getValueFromUser();