const getRndInteger = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) ) + min;


console.log(getRndInteger(2, 500));