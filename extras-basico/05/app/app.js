
const sum = (numFirst, numSecond) => {
  if(Number(numFirst) && Number(numSecond) || numFirst === 0 || numSecond === 0) {
    return numFirst + numSecond;
  } else {
    console.log('No has introducido un número');
  }
}

console.log(sum('a', 6));