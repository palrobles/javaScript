

const factorial = (num) => {
  let totalResult = 0;
  for(i = 0; i < num; i++) {
    totalResult = num * num[i];
  }
  console.log(totalResult);
  return totalResult;
};

factorial(5);