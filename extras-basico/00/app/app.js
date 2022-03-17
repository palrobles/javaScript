
  let getNumber = 0;
  let totalResult = 0;
  const divResult = document.querySelector('#result');

  while (getNumber !== null) {
    getNumber = prompt('Introduce un número');

    // if(getNumber != null) {
    //   if(parseInt(getNumber)) {
    //     totalResult += parseInt(getNumber);
    //   } else {
    //     alert('Caracter no válido');
    //   }  
    // }
  
  // ***********************************************************

    if(parseInt(getNumber)) {
      totalResult += parseInt(getNumber);
    } else if (getNumber != null){
      alert('Caracter no válido');
    }  

  // ***********************************************************
 
    // if(Number(getNumber) && getNumber != null) {
    //     totalResult += parseInt(getNumber);
    // // } else if (getNumber === null) {
    // //     break
    // } else {
    //     alert('Caracter no válido');
    // }
  }


divResult.innerHTML = totalResult;
