
  let getNumber = 0;
  let totalResult = 0;
  const divResult = document.querySelector('#result');

  while (getNumber !== null) {
    getNumber = prompt('Introduce un número');
    if(Number(getNumber)) {
        totalResult += parseInt(getNumber);
    } else if (getNumber === null) {
        break
    } else {
        alert('Caracter no válido');
    }
  }

divResult.innerHTML = totalResult;
