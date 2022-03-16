let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,5051,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
let randomNumberMin = 0;
let randomNumberMax = 0;

// Devuelve un array, no estoy segura de si luego esos números se pueden usar como 
// parámetros en otra función.

const getRandom = () => {
  let randomNumber1 = 0;
  let randomNumber2 = 0;

  while (randomNumber1 == randomNumber2) {
    randomNumber1 = Math.floor(Math.random() * numbers.length);
    randomNumber2 = Math.floor(Math.random() * numbers.length);
  }
  
  if (randomNumber1 > randomNumber2) {
      randomNumberMin = randomNumber2;
      randomNumberMax = randomNumber1;
  } else if (randomNumber1 < randomNumber2) {
      randomNumberMin = randomNumber1;
      randomNumberMax = randomNumber2;
  }
  return [randomNumberMin, randomNumberMax];
}

console.log(getRandom());







