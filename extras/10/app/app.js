
const strType = (str) => {
  if(str == str.toUpperCase()) {
    alert('La frase solo contiene mayúsculas');
  } else if (str == str.toLowerCase()) {
    alert( 'La frase solo contiene minúsculas');
  } else {
    alert('La frase contiene mayúsculas y minúsculas');
  }
};


strType('esto Son Minusculas y Mayúsculas');
strType('SOLO MAYUSUCLAS');
strType('solo minusculas');