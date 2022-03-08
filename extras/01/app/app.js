var firstData = '';
var secondData = '';
var num1 = parseInt(firstData);
var num2 = parseInt(secondData);

// console.log(num1);
// console.log(num2);

// if (isNaN(num1) || isNaN(num2)) {
//   window.alert ('No has metido ningún valor')
// } else if ( num1 > num2) {
//   window.alert('El mayor es el primero')
// } else if ( num1 < num2) {
//   window.alert('El segundo es mayor')
// } else {
//   window.alert('Son iguales')
// };


const getValue = () => {
  firstData = prompt('Introduce un valor');
  var num1 = parseInt(firstData);
  while(isNaN(firstData) || firstData === 0) {
    firstData = prompt ('El valor no es correcto, introduce de nuevo');
    var num1 = parseInt(firstData);
  };
  secondData = prompt('Introduce el segundo valor');
  var num2 = parseInt(secondData);
  while(isNaN(num2) || num2 === 0) {
     secondData = prompt ('El valor no es correcto, introduce de nuevo');
     var num2 = parseInt(secondData);
  }
  analysisData(num1, num2);
};

const analysisData = (num1 , num2) => {
  if (num1 > num2) {
    window.alert ('El primer valor es mayor que el segundo');
  } else if (num1 < num2) {
    window.alert ('El segundo valor es mayor que el primero');
  } else {
    window.alert('Son iguales')
  }
};

getValue();
