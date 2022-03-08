const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado' ];
let dia = 3;

console.log(dias[dia]);

const diasObj = {
  0: () => 'Domingo',
  1: () => 'Lunes',
  2: () => 'Martes',
}

console.log(diasObj[dia] || 'No se ha encontrado el día');


