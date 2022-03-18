const factorial = (num) => {
  let totalResult = 1;
  
  for(i= 1; i <= num; i++) {
    totalResult = totalResult * i;
  }
  return totalResult;
};

console.log(factorial(5));