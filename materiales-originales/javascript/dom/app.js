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