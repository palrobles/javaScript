const regExp = /[ .]/g;

const palindromeChecker = (str) => {
  const strClean = str.replace(regExp , "").toLowerCase();
  const strCleanReversed = str.split("").reverse().join("").replace(regExp, "").toLowerCase();
  console.log(strClean);
  console.log(strCleanReversed);

  if(strCleanReversed === strClean ) {
    return console.log("es palindromo");
  } else {
    return console.log("no es palindromo");
  }

  // return strCleanReversed === strClean ? console.log("es palindromo") : console.log("no es palindromo");
};

console.log(palindromeChecker("La ruta nos aporto otro paso natural"));