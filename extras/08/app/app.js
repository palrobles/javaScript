
const factorial = (elem) => {
  // let fact = [];
  // let sum = 0;

  // for (i = 1; i <= elem; i++) {
  //   fact.push(elem * i);
  // }

  // sum = fact
  //   .reduce((firstNumber, lastNumber) => {
  //     return firstNumber+lastNumber
  //   })
  //   return sum;

  let sumaTotal = 0;
  for (i = 1; i <= elem; i++) {
    sumaTotal += elem*i;
  }
  return sumaTotal;
};

console.log(factorial(10));
// console.log(factorial(5));