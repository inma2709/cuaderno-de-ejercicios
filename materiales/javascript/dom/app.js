/*
 * REVISIÓN DIDÁCTICA DEL CUADERNO
 *
 * Esta es la solución trabajada en clase, conservada con sus nombres originales.
 * Ideas clave de esta práctica:
 * textContent escribe texto seguro; innerHTML se utiliza aquí para crear la estructura HTML dinámica del ejercicio.
 * Primero se seleccionan los elementos del HTML; después las funciones cambian su contenido o leen sus valores.
 *
 * Estudia cada bloque, modifica un dato y observa qué parte de la página cambia.
 */
function mostrarCurso(curso) {
  const ficha = document.getElementById("ficha-curso");

  if (curso === "html") {
    ficha.innerHTML = "<h3>HTML esencial</h3><p>Aprende a estructurar páginas web.</p>";
  } else {
    ficha.innerHTML = "<h3>JavaScript esencial</h3><p>Haz que tus páginas respondan.</p>";
  }
}

function alternarHorarios() {
  const horarios = document.getElementById("horarios");
  horarios.classList.toggle("horarios--ocultos");
}

function anadirTarea() {
  const input = document.getElementById("nueva-tarea");
  const lista = document.getElementById("lista-tareas");
  const texto = input.value.trim();

  if (texto !== "") {
    const tarea = document.createElement("li");
    tarea.textContent = texto;
    lista.append(tarea);
    input.value = "";
  }
}

function eliminarUltimaTarea() {
  const lista = document.getElementById("lista-tareas");
  const ultimaTarea = lista.lastElementChild;

  if (ultimaTarea) {
    ultimaTarea.remove();
  }
}
