let arr = [[1,2,3,4,5], [5,3,2,1,4],[2,2,1,2,1], [], [2, 2, 4, 5, 2]];

// **************************************SOLUCIÓN CON UN SOLO BUCLE

// const removeSmallest = (arr) => {
//   let newArray = [];
  
//   for (i = 0; i < arr.length; i++) {
//     let min = Math.min(...arr[i]);
//     let position = arr[i].indexOf(min);
//     arr[i].splice(position, 1);
//     newArray.push(arr[i]);
//   }
//   return newArray;
// };

// **************************************SOLUCIÓN CON UN SOLO BUCLE ANIDADO
const removeSmallest = (arr) => {
  let newArray = [];
  
  for (i = 0; i < arr.length; i++) {
    let min = arr[i][0];
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < min) {
        min = arr[i][j];
      }
    }
    let position = arr[i].indexOf(min);
    arr[i].splice(position, 1);
    newArray.push(arr[i]);
  }
  return newArray;
};
removeSmallest(arr);
// console.log(arr);