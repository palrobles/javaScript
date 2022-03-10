let datos = [[1, 2, 3, 4, 5], [5, 10, 15, 20, 25], [10, 20, 30, 40, 50], [20, 40, 60, 80, 100]];

// const sumArr = (arr) => {
//   let minimun = 0;
//   let total = 0;

//   for(let i=0; i < arr.length; i++) {
//     minimun = Math.min.apply(Math, arr[i]);
//     console.log(minimun);
//     total += minimun;
//   }
//   return total;
// };

const  sumArr = (arr) => {
  let total = 0;
  
  for (let i = 0; i < arr.length; i++){
   let minimun = Math.min(...arr[i]);
   total += minimun
  }

  return total;
}

console.log(sumArr(datos));
