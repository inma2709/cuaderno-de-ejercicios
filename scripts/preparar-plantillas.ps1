$root = Split-Path $PSScriptRoot -Parent
$citas = Join-Path $root 'materiales\javascript\citaActividad'
$tareas = Join-Path $root 'materiales\javascript\tareas'

# La actividad de citas se conserva como plantilla (app.js vacío). Esta solución se
# reconstruye exclusivamente a partir de su enunciado, HTML y la solución completa
# de la práctica de citas incluida entre los materiales.
$solution = @'
/*
 * SOLUCIÓN RECONSTRUIDA · ACTIVIDAD GESTOR DE CITAS
 *
 * La plantilla mantiene app.js vacío para que puedas realizar la actividad.
 * Esta solución usa los identificadores que ya existen en index.html.
 * Al añadir una cita: leemos los inputs, creamos un objeto, hacemos push()
 * y volvemos a pintar el listado para que DOM y array estén sincronizados.
 */

let citas = [
  { cliente: "Marta Ruiz", servicio: "Corte", precio: 25 },
  { cliente: "Juan Pérez", servicio: "Peinado", precio: 30 }
];

const listaCitas = document.getElementById("listaCitas");
const totalCitas = document.getElementById("totalCitas");
const importeTotal = document.getElementById("importeTotal");
const formulario = document.getElementById("formularioCita");
const nombreCliente = document.getElementById("nombreCliente");
const servicio = document.getElementById("servicio");
const precio = document.getElementById("precio");
const mensaje = document.getElementById("mensaje");

// Recorre el array y crea una tarjeta por cada cita registrada.
function mostrarCitas() {
  listaCitas.innerHTML = "";
  let total = 0;

  for (const cita of citas) {
    listaCitas.innerHTML += `
      <article class="cita">
        <h3>${cita.cliente}</h3>
        <p>${cita.servicio}</p>
        <p class="precio">${cita.precio} €</p>
      </article>
    `;
    total += cita.precio;
  }

  totalCitas.textContent = citas.length;
  importeTotal.textContent = total + " €";
}

// Lee los datos del formulario y añade una nueva cita al array.
function agregarCita() {
  const nuevaCita = {
    cliente: nombreCliente.value.trim(),
    servicio: servicio.value,
    precio: Number(precio.value)
  };

  if (!nuevaCita.cliente || !nuevaCita.servicio || nuevaCita.precio <= 0) {
    mensaje.textContent = "Completa los datos de la cita.";
    return;
  }

  citas.push(nuevaCita);
  formulario.reset();
  mensaje.textContent = "Cita añadida correctamente.";
  mostrarCitas();
}

mostrarCitas();
'@
Set-Content -LiteralPath (Join-Path $citas 'solucion.js') -Value $solution -Encoding utf8

# Las páginas de solución cargan el JS resuelto; index.html continúa siendo la plantilla.
(Get-Content -Raw (Join-Path $citas 'index.html')).Replace('src="app.js"', 'src="solucion.js"').Replace('type="submit"', 'type="button"') | Set-Content (Join-Path $citas 'solucion.html') -Encoding utf8
(Get-Content -Raw (Join-Path $tareas 'index.html')).Replace('src="app.js"', 'src="solucion.js"') | Set-Content (Join-Path $tareas 'solucion.html') -Encoding utf8
