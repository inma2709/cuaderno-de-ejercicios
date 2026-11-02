
/*
=====================================================
  SOLUCIÓN DEL PROFESOR
  PRÁCTICA: MI RETO DE AHORRO
=====================================================
*/

function calcularAhorro() {

  // 1. OBTENER DATOS

  const inicialTexto =
    document.getElementById("inicial").value;

  const semanalTexto =
    document.getElementById("semanal").value;

  const objetivoTexto =
    document.getElementById("objetivo").value;

  const maxSemanasTexto =
    document.getElementById("maxSemanas").value;

  const inicial = Number(inicialTexto);
  const semanal = Number(semanalTexto);
  const objetivo = Number(objetivoTexto);
  const maxSemanas = Number(maxSemanasTexto);


  // 2. VALIDAR DATOS

  if (
    inicialTexto.trim() === "" ||
    semanalTexto.trim() === "" ||
    objetivoTexto.trim() === "" ||
    maxSemanasTexto.trim() === "" ||
    !Number.isFinite(inicial) ||
    !Number.isFinite(semanal) ||
    !Number.isFinite(objetivo) ||
    !Number.isInteger(maxSemanas) ||
    inicial < 0 ||
    semanal <= 0 ||
    objetivo <= 0 ||
    maxSemanas < 1 ||
    maxSemanas > 520
  ) {
    document.getElementById("resultado").textContent =
      "Revisa los datos introducidos.";

    document.getElementById("semanasResultado").textContent = "—";
    document.getElementById("totalResultado").textContent = "—";
    document.getElementById("historial").textContent = "";

    return;
  }


  // 3. VARIABLES

  let total = inicial;
  let semanas = 0;
  let historial = "";
  let mensaje = "";


  // =====================================
  // SOLUCIÓN MISIÓN 1: WHILE
  // =====================================

  /*
  El bucle continúa mientras se cumplan
  las dos condiciones:

  1. Todavía no tenemos suficiente dinero.
  2. No hemos agotado las semanas disponibles.

  total es un ACUMULADOR.
  semanas es un CONTADOR.
  */

  while (total < objetivo && semanas < maxSemanas) {

    // Añadir el ahorro semanal
    total += semanal;

    // Contar una semana más
    semanas++;

  }


  // =====================================
  // SOLUCIÓN MISIÓN 2: IF / ELSE
  // =====================================

  if (total >= objetivo) {

    mensaje = "¡Objetivo conseguido!";

  } else {

    mensaje = "No has alcanzado tu objetivo.";

  }


  // =====================================
  // SOLUCIÓN MISIÓN 3: FOR
  // =====================================

  /*
  Reconstruimos el historial desde el
  dinero inicial.

  El FOR se repite exactamente el número
  de semanas que calculamos con WHILE.
  */

  let ahorroHistorial = inicial;

  if (semanas === 0) {

    historial = "El objetivo ya estaba conseguido.";

  } else {

    for (let i = 1; i <= semanas; i++) {

      ahorroHistorial += semanal;

      historial +=
        "Semana " + i + ": " +
        ahorroHistorial.toFixed(2) + " €\n";

    }

  }


  // =====================================
  // 4. MOSTRAR RESULTADOS
  // =====================================

  document.getElementById("resultado").textContent =
    mensaje;

  document.getElementById("semanasResultado").textContent =
    semanas;

  document.getElementById("totalResultado").textContent =
    total.toFixed(2) + " €";

  document.getElementById("historial").textContent =
    historial;

}
