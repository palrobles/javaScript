function getRndInteger(min = 1, max = 100) {
  return Math.floor(Math.random() * (min + max));
}

console.log(getRndInteger());