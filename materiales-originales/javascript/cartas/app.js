let puntosJugador = 0;
let puntosBanca = 0;
let partidaActiva = true;

// Pide una carta para el jugador y actualiza sus puntos.
function pedirCarta() {
  if (!partidaActiva) {
    return;
  }

  const carta = Math.floor(Math.random() * 10) + 1;
  let valor;
  if (carta <= 7) {
    valor = carta;
  } else {
    valor = 0.5;
  }

  puntosJugador += valor;
  document.getElementById("cartaJugador").textContent = "Tu última carta: " + carta;
  document.getElementById("puntosJugador").textContent = "Tus puntos: " + puntosJugador;

  if (puntosJugador > 7.5) {
    plantarse();
  }
}



// Da una única carta a la banca y termina la partida.
function plantarse() {
  if (!partidaActiva) {
    return;
  }

  const carta = Math.floor(Math.random() * 10) + 1;
  let valor;
  if (carta <= 7) {
    valor = carta;
  } else {
    valor = 0.5;
  }

  puntosBanca = valor;
  document.getElementById("cartaBanca").textContent = "Carta de la banca: " + carta;
  document.getElementById("puntosBanca").textContent = "Puntos de la banca: " + puntosBanca;
  const mensaje = comprobarGanador(puntosJugador, puntosBanca);
  document.getElementById("resultado").textContent = mensaje;

  partidaActiva = false;
}

// Reinicia los datos de la partida actual.
function nuevaPartida() {
  puntosJugador = 0;
  puntosBanca = 0;
  partidaActiva = true;
  document.getElementById("cartaJugador").textContent = "Tu última carta: —";
  document.getElementById("puntosJugador").textContent = "Tus puntos: 0";
  document.getElementById("cartaBanca").textContent = "Carta de la banca: —";
  document.getElementById("puntosBanca").textContent = "Puntos de la banca: 0";
  document.getElementById("resultado").textContent = "Nueva partida preparada.";
}