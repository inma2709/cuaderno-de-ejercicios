/*
 * REVISIÓN DIDÁCTICA DEL CUADERNO
 *
 * Esta es la solución trabajada en clase, conservada con sus nombres originales.
 * Ideas clave de esta práctica:
 * textContent escribe texto seguro; innerHTML se utiliza aquí para crear la estructura HTML dinámica del ejercicio.
 * Primero se seleccionan los elementos del HTML; después las funciones cambian su contenido o leen sus valores.
 * Los valores de los inputs son texto. Number() los convierte a número antes de calcular.
 *
 * Estudia cada bloque, modifica un dato y observa qué parte de la página cambia.
 */
function comprobarEdad(edad) {

    edad = Number(document.getElementById("edad").value);

    if (edad >= 18) {
         document.getElementById("resultado").textContent = "Bienvenido puedes entrar🎉🎉🎉🎉🎉 ";
    } else {
         document.getElementById("resultado").textContent = "No puedes entrar❌❌❌❌❌❌ ";
    }
    
}
