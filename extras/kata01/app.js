//Hacer una función para calcular el IVA del precio
//Hacer otra funcion que reciba el IVA y que calculo el precio total.
//************************************* CALCULATE PRECIO TOTAL CON IVA*/
// const ivaPrice = (factura, iva) => {
//   let ivaPrice = 0;
//   ivaPrice = (factura * iva) / 100;
//   return ivaPrice;
// };


// const totalPrice = (factura, iva) => {
//   let priceTotal = 0;
//   priceTotal = factura + iva;
//   return priceTotal;
// }

// const facturaSinIva = 200;
// const appliedIva = 21;
// const calculateIva = ivaPrice(facturaSinIva, appliedIva); 
// const calculateTotalPrice = totalPrice(facturaSinIva, calculateIva);
// console.log(calculateTotalPrice);

//************************************* CALCULATE NUMBER IS EVEN OR ODD*/
// const isEven = (elem) => {

  // let result = false;

  // if ( elem % 2 == 0 ) {
  //   result =  true;
  // }

  // return result;

//   return elem % 2 == 0 ? true: false;  
// } 

// console.log(isEven(25));

// const valueReverse = (valFirst, valSecond) => {
//   console.log(valFirst, 'first');
//   console.log(valSecond, 'second');
  
//   let aux = valFirst;

//   valFirst = valSecond;
//   valSecond = aux;
  
//   console.log(valFirst, 'first');
//   console.log(valSecond, 'second');
// };

// const valueReverse = (valFirst, valSecond) => {

//   console.log(valFirst, 'first');
//   console.log(valSecond, 'second');

//   let first = valFirst;
//   let second = valSecond;

//   valFirst = second;
//   valSecond = first;
  
//   console.log(valFirst, 'first');
//   console.log(valSecond, 'second');
// };

// const valueReverse = (valFirst, valSecond) => {

//   return {
//     one: valSecond,
//     two: valFirst
//   }
// };

// let one = 4;
// let two = 8;


// console.log(one, 'first');
// console.log(two, 'second');

// const result = valueReverse(one, two);

// one = result.one;
// two= result.two;


// console.log(one, 'first');
// console.log(two, 'second');


// const shop = [1, 2, 3, 4];

// const printer = ([...arr]) => {
//   const results = [];
//   while (arr.length) {
//     results.push(arr.shift() + 1);
//   }
//   return results;
// };

// const pay = (arr) =>{
//   // llamare a la pasarela de pagos
//   console.log(arr , 'pago');
// }

// printer(shop);
// pay([...shop]);
// console.log(shop);


