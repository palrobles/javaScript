const isPar = (num) => {
  let par = num % 2;
  console.log(par);
  if( par === 0 ) {
    alert('El NÚMERO ES PAR'); 
  } else {
    alert('El numero es impar');
  }
}


isPar(23);