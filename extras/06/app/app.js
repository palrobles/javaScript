const sum = (first, second) => {

  if( !isNaN(first) && !isNaN(second)) {
    return first + second;
  } else {
    return console.log('Los valores no son números');
  };

  // return (!isNaN(first) && !isNaN(second)) ? first + second : console.log('Los valores no son correctos');
}

console.log(sum (25, 5));
console.log(sum (0, 0));
console.log(sum (10, 0));
console.log(sum ('a', 'b'));
console.log(sum (' ', ' '));


