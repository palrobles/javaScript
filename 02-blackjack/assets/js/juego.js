let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A','J','Q','K'];


let newCard = document.querySelector("#newCard");
let stop = document.querySelector('#stopGame');
let reload = document.querySelector('#newPlayer');
let puntosJugador = 0;
let puntosComputadora = 0;
const puntosAcum = document.querySelectorAll("small");
let cartaJugador = document.querySelector("#jugador-cartas");
let cartaComputadora = document.querySelector("#computadora-cartas");


const crearDeck = () => {
  for (let i = 2; i <= 10 ; i++) {
    for(let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push( esp + tipo);
    }
  }
  // console.log(deck);
  deck = _.shuffle(deck);
  // console.log(deck);
}

crearDeck();

const pedirCarta = () => {
  let cartaSeleccionada = deck.pop();
  // console.log(deck);
  // console.log(cartaSeleccionada);
  return cartaSeleccionada;
}

// pedirCarta();

const valorCarta = (carta) => {
 let valor = carta.substring(0, carta.length - 1);
 return (!isNaN(valor)) ? valor * 1 : (valor === 'A') ? 11 : 10;

  // if(isNaN(valor)) {
  //   puntos = (valor === 'A') ? 11 : 10;
  // } else {
  //   puntos = (valor * 1);
  // }
  // console.log(puntos);
}

// valorCarta('AD');

//turno de la computadora

const turnoComputadora = (puntosJugador) => {
  do {
    const carta = pedirCarta();
    puntosComputadora= puntosComputadora + valorCarta(carta);
    puntosAcum[1].innerText = puntosComputadora;
  
    let selectedNewCard = document.createElement('img');
    selectedNewCard.setAttribute('class', 'carta');
    selectedNewCard.setAttribute("src", `assets/cartas/${carta}.png`);
    cartaComputadora.appendChild(selectedNewCard);
    if( puntosJugador > 21 ) {
      break;
    }
  }
  while( (puntosJugador >= puntosComputadora) && (puntosComputadora <= 21));

  endGame(puntosJugador, puntosComputadora);
}

const endGame = (puntosJugador, puntosComputadora) => {
  setTimeout(() => { 
    if( puntosComputadora > 21) {
      window.alert('El jugador ha ganado');
    } else if( puntosJugador > 21 ) {
      window.alert('La computadora ha ganado');
    } else if (puntosJugador === puntosComputadora) {
      window.alert('Nadie gana');
    } else {
      window.alert('La computadora ha ganado');
    }
  }, 100);
}


// const endGame = (puntosJugador, puntosComputadora) => {
//   setTimeout(() => { 
//     if( (puntosJugador > puntosComputadora && puntosJugador <= 21) || puntosComputadora > 21) {
//     //console.log('El jugador ha ganado');
//     window.alert('El jugador ha ganado');
//   } else if( (puntosComputadora > puntosJugador && puntosComputadora <= 21) || (puntosJugador > 21) ) {
//     // console.log ('La computadora ha ganado');
//     window.alert('La computadora ha ganado');
//   } else {
//     window.alert('Nadie gana');
//   }
// }, 100);
// }

const endGame2 = (puntosJugador, puntosComputadora) => {
  setTimeout(() => { 
    if( puntosComputadora > 21) {
      window.alert('El jugador ha ganado');
    } else if ( puntosJugador > 21 || puntosJugador < puntosComputadora ) {
      window.alert('La computadora ha ganado');
    } else {
      window.alert('Nadie gana');
    }
  }, 100);
}
//turno jugadorx

newCard.addEventListener('click', () => {
  //turno jugador
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosAcum[0].innerText = puntosJugador;

  let selectedNewCard = document.createElement('img');
  selectedNewCard.setAttribute('class', 'carta');
  selectedNewCard.setAttribute("src", `assets/cartas/${carta}.png`);
  cartaJugador.appendChild(selectedNewCard);

  if( puntosJugador > 21 ) {
      // console.log('Has perdido');
      newCard.disabled = true;
      stop.disabled = true;
      turnoComputadora( puntosJugador );

  } else if ( puntosJugador === 21 ) {
      // console.log('Has ganado');
      newCard.disabled = true;
      stop.disabled = true;
      turnoComputadora( puntosJugador );
  }
});


stop.addEventListener('click', () => {
  stop.disabled = true;
  newCard.disabled = true;
  turnoComputadora(puntosJugador);
});

reload.addEventListener('click', () => {
  console.clear();
  puntosJugador = 0;
  puntosComputadora = 0;

  puntosAcum[0].innerText = 0;
  puntosAcum[1].innerText = 0;

  stop.disabled = false;
  newCard.disabled = false;
  cartaJugador.innerHTML = '';
  cartaComputadora.innerHTML = '';
});


