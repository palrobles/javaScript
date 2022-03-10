// const regExp =  /^\d{1,3}(\.\d{1,3})?$/;
// const sum = (first, second) => {

//   if( first.toString().match(regExp) && first.toString().match(regExp)) {
//     return first + second;
//   } else {
//     return console.log('Los valores no son números');
//   };

//   // return ( first.toString().match(regExp) && first.toString().match(regExp)) ? first + second : console.log('Los valores no son correctos');
// }


const sum = (first, second) => {

  if( Number(first) && Number(second) || first === 0 || second === 0) {
    return first + second;
  } else {
    return console.log('Los valores no son números');
  };

  // return ( first.toString().match(regExp) && first.toString().match(regExp)) ? first + second : console.log('Los valores no son correctos');
}

console.log(sum (25, 5));
console.log(sum (2.5, 5.3));
console.log(sum (0, 0));
console.log(sum (10, 0));
console.log(sum ('a', 'b'));
console.log(sum (' ', ' '));
console.log(sum ('', ''));

