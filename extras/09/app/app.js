const evenOrOdd = (elem) => {
  if(!isNaN(elem)) {
    if( elem % 2 == 0) {
      return alert('El número es par');
    } else {
      return alert ('El número es impar');
    };
  } else {
    return alert('No es un numero');
  }
};

evenOrOdd(2)