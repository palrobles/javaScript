const sum = (first, second) => {
  let result = 0;

  if( (Number(first) && Number(second))  || (first === 0 || second === 0)) {
    return result = first + second;
  } else {
    return console.log('Los valores no son números');
  };

  // return (Number(first) && Number(second))  || (first === 0 || second === 0) ? result = first + second : console.log('Los valores no son correctos');
}

console.log(sum (25, 5));

