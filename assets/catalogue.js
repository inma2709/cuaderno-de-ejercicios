const source = {
  avante: "materiales/js-clases-avante/",
  curso: "materiales/javascript/"
};

const blocks = [
  { id:"fundamentos", title:"Primeros pasos y operadores", summary:"Variables, tipos, cadenas, template literals y operaciones.", exercises:[
    ["Ejercicio 1 · Declarar variables", "MF0491 · ejercicio1", "let, variables y template literals", "Inicial", "ejercicio1/ejercicio1.html", ""],
    ["Ejercicio 2 · Datos de una película", "MF0491 · ejercicio2", "asignación, cadenas y console.log", "Inicial", "ejercicio2/ejercicio2.html", ""],
    ["Ejercicio 3 · Operadores aritméticos", "MF0491 · ejercicio3", "suma, resta, multiplicación, descuento e IVA", "Inicial", "ejercicio3/ejercicio3.html", ""],
    ["Ejercicio 4 · Comparación y lógica", "MF0491 · ejercicio4", "comparadores, igualdad estricta y operadores lógicos", "Inicial", "ejercicio4/ejercicio.html", ""],
    ["Ejercicio 5 · Compra de ropa", "MF0491 · ejercicio5", "const, cálculos, descuentos y envío", "Inicial", "ejercicio5/ejercicio5.html", ""],
    ["Ejercicio 6 · Interfaz de operadores", "MF0491 · ejercicio6", "HTML de una práctica de cálculo", "Inicial", "ejercicio6/ejercicio6.html", "Sin JavaScript asociado en el material original."],
    ["Actividad · Variables (variante)", "JavaScript · variables", "let, const, tipos y salida en HTML", "Inicial", "variables/ejercicio1.html", "Variante ampliada del primer ejercicio."],
  ]},
  { id:"condicionales", title:"Condicionales", summary:"Decisiones con if, else if, else, switch y condiciones compuestas.", exercises:[
    ["Ejercicio 7 · Stock y precio", "MF0491 · ejercicio7", "if y operadores lógicos", "Inicial", "ejercicio7/ejercicio7.html", ""],
    ["Ejercicio 8 · Reserva", "MF0491 · ejercicio8", "if / else, edad, plazas y descuentos", "Inicial", "ejercicio8/ejercicio8.html", ""],
    ["Ejercicio 9 · Evaluador de notas", "MF0491 · ejercicio9", "if, else if, else y switch", "Básico", "ejercicio9/ejercicio9.html", ""],
    ["Ejercicio 10 · Actividad recomendada", "MF0491 · ejercicio10", "if y switch para tomar decisiones", "Básico", "ejercicio10/ejercicio.html", ""],
    ["Práctica · Calculadora de notas", "JavaScript · notas", "validación, if / else if / else y switch", "Básico", "notas/notas.html", "Versión desarrollada de la práctica de notas."],
  ]},
  { id:"bucles", title:"Bucles", summary:"Repetición con while y for aplicada a situaciones cotidianas.", exercises:[
    ["Ejercicio 11 · Bucles", "MF0491 · ejercicio11", "while, for, contador y DOM", "Básico", "ejercicio11/ejercicio11.html", ""],
    ["Mi reto de ahorro", "JavaScript · ahorrobucles", "for, acumuladores y validación", "Intermedio", "ahorrobucles/ahorro.html", "Incluye la solución del profesor en el código."],
  ]},
  { id:"funciones", title:"Funciones e interacción", summary:"Funciones, parámetros, return, botones e inputs.", exercises:[
    ["Ejercicio 12 · Funciones con onclick", "MF0491 · ejercicio12", "funciones, return, onclick e inputs", "Básico", "ejercicio12/ejercicio12.html", ""],
    ["Control de acceso", "JavaScript · funciones", "función, Number, input y condicional", "Básico", "funciones/funciones.html", "También aparece como copia idéntica en el material MF0491."],
    ["Ejercicio 14 · Dado", "MF0491 · ejercicio14", "funciones, aleatoriedad y DOM", "Básico", "ejercicio14/dado.html", "El JavaScript enlazado se ha recuperado de la copia idéntica disponible en la colección JavaScript."],
    ["Lanzar el dado", "JavaScript · dado", "Math.random, función, condicional y DOM", "Básico", "dado/dado.html", "Copia idéntica a la carpeta dado de MF0491."],
    ["Juego de las 7 y media", "JavaScript · cartas", "estado, funciones, aleatoriedad y DOM", "Intermedio", "cartas/cartas.html", ""],
  ]},
  { id:"arrays", title:"Arrays y objetos", summary:"Colecciones, recorridos, métodos y estructuras de datos.", exercises:[
    ["Ejercicio 13 · Cuaderno de notas", "MF0491 · ejercicio13", "arrays, push, contador e inputs", "Intermedio", "ejercicio13/ejercicio13.html", ""],
    ["Ejercicio 15 · Arrays", "MF0491 · ejercicio15", "arrays, for...of y métodos", "Intermedio", "ejercicio15/arrays.html", ""],
    ["Ejercicio 16 · Objetos", "MF0491 · ejercicio16", "objetos, propiedades y métodos", "Intermedio", "ejercicio16/index.html", ""],
    ["Ejercicio 17 · Arrays de objetos", "MF0491 · ejercicio17", "find, filter, push, for...in y Object.keys", "Intermedio", "ejercicio17/index.html", ""],
    ["Listado simple de alumnos", "JavaScript · arrays", "array y bucle for", "Inicial", "arrays/arrays.html", ""],
  ]},
  { id:"dom", title:"DOM y persistencia", summary:"Selección y actualización de elementos, contenido dinámico y localStorage.", exercises:[
    ["Ejercicio 18 · Selección múltiple y fecha", "MF0491 · ejercicio18", "querySelectorAll, forEach, Date y textContent", "Intermedio", "ejercicio18/index.html", ""],
    ["Ficha dinámica de cursos", "JavaScript · dom", "getElementById, innerHTML y funciones", "Intermedio", "dom/index.html", ""],
    ["Alumnos con localStorage", "MF0491 · local", "arrays de objetos, JSON.stringify y JSON.parse", "Intermedio", "local/index.html", ""],
  ]},
  { id:"proyectos", title:"Proyectos integradores", summary:"Aplicaciones completas que reúnen los contenidos del curso.", exercises:[
    ["Gestor de citas · solución", "JavaScript · citas", "arrays de objetos, formularios, DOM y eventos", "Avanzado", "citas/index.html", "Incluye README y capturas."],
    ["Actividad · Gestor de citas", "JavaScript · citaActividad", "formulario, DOM y gestión de citas", "Avanzado", "citaActividad/index.html", "Incluye enunciado PDF; el app.js está vacío como plantilla de actividad."],
    ["TecnoAula · Carrito de compra", "JavaScript · tienda", "DOM, eventos, arrays, contadores y carrito", "Avanzado", "tienda/index.html", "Incluye README con los retos del proyecto."],
    ["Mi agenda de tareas", "JavaScript · tareas", "arrays de objetos, DOM, eventos y persistencia", "Avanzado", "tareas/index.html", "Incluye enunciado y solucion.js."],
  ]}
];

function makeLink(href, label) { return `<a href="${href}" target="_blank" rel="noopener">${label}</a>`; }
const nav = document.querySelector("#block-nav");
const catalogue = document.querySelector("#catalogue");
if (nav && catalogue) blocks.forEach((block, index) => {
  nav.insertAdjacentHTML("beforeend", `<a href="#${block.id}">${String(index + 1).padStart(2,"0")} · ${block.title} (${block.exercises.length})</a>`);
  const cards = block.exercises.map(([name, origin, concepts, level, path, note], exerciseIndex) => {
    const root = origin.startsWith("MF0491") ? source.avante : source.curso;
    return `<article class="card"><h3>${name}</h3><p class="tag">${level}</p><p class="concepts"><strong>Conceptos:</strong> ${concepts}</p><p><strong>Procedencia:</strong> ${origin}</p>${note ? `<p>${note}</p>` : ""}<div class="links"><a href="practica.html?b=${index}&e=${exerciseIndex}">Ver archivos</a>${makeLink(root + path, "Ejecutar original")}</div></article>`;
  }).join("");
  catalogue.insertAdjacentHTML("beforeend", `<section id="${block.id}" class="block"><div class="block-header"><span class="number">${String(index + 1).padStart(2,"0")}</span><h2>${block.title}</h2></div><p class="summary">${block.summary} · ${block.exercises.length} ejercicios.</p><div class="cards">${cards}</div></section>`);
});

// La ficha de cada práctica reutiliza este inventario para localizar sus archivos.
window.blocks = blocks;
