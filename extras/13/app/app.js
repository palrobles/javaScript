let arr = [[2,1,3,4,6], [5,10,15,20,25],[25, 45, 67, 80,90], [], [2, 2, 4, 5, 2]]

const removeSmallest = (arr) => {
  let newArray = [];
  
  for (i = 0; i < arr.length; i++) {
   let min = Math.min(...arr[i]);
  //  let position = arr[i].indexOf(min);
  //  console.log(position);
  newArray.push(arr[i].filter(arr => arr !== min));
  //  console.log(newArray);
  console.log(...arr[i]);
  }
 
  console.log(newArray);
  return newArray;
};

removeSmallest(arr);
// console.log(arr);