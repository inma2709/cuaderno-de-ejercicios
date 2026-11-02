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
// let se utiliza cuando el valor puede cambiar.
let nombre = "Ana";
let edad = 18;

// const se utiliza cuando el valor no cambiará.
const ciudad = "Madrid";
const curso = "JavaScript";

document.getElementById("nombre").textContent = nombre;
document.getElementById("edad").textContent = edad;
document.getElementById("ciudad").textContent = ciudad;
document.getElementById("curso").textContent = curso;
document.getElementById("mensaje").textContent = `¡Hola, ${nombre}! Tienes ${edad} años y estás aprendiendo ${curso}.`;

// Parte 2: prompt permite pedir un dato al usuario.
const nombreUsuario = prompt("¿Cómo te llamas?");
const saludo = document.getElementById("saludo");

if (nombreUsuario && nombreUsuario.trim()) {
  saludo.textContent = `¡Encantado de conocerte, ${nombreUsuario.trim()}!`;
} else {
  saludo.textContent = "No has escrito ningún nombre.";
}

/*
// Parte 3: leemos el valor escrito en cada input.
const formulario = document.getElementById("formulario-datos");
const resultadoFormulario = document.getElementById("resultado-formulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombreInput = document.getElementById("nombre-input").value;
  const edadInput = document.getElementById("edad-input").value;
  const ciudadInput = document.getElementById("ciudad-input").value;

  resultadoFormulario.textContent = `Te llamas ${nombreInput}, tienes ${edadInput} años y vives en ${ciudadInput}.`;
});
*/

