/*
 * REVISIÓN DIDÁCTICA DEL CUADERNO
 *
 * Esta es la solución trabajada en clase, conservada con sus nombres originales.
 * Ideas clave de esta práctica:
 * textContent escribe texto seguro; innerHTML se utiliza aquí para crear la estructura HTML dinámica del ejercicio.
 * Primero se seleccionan los elementos del HTML; después las funciones cambian su contenido o leen sus valores.
 * Los valores de los inputs son texto. Number() los convierte a número antes de calcular.
 * return entrega un resultado desde una función para utilizarlo donde se llamó.
 *
 * Estudia cada bloque, modifica un dato y observa qué parte de la página cambia.
 */

/*
   PRÁCTICA: EVALUADOR DE CALIFICACIONES

   Completa los apartados indicados.
   Utilizaremos IF, ELSE IF, ELSE y SWITCH.

   IMPORTANTE:
   La función evaluarNota() ya está preparada.
   No necesitas modificarla ni entender todavía
   cómo se crean las funciones.

   Escribe tu código dentro de los apartados
   señalados.
*/

function evaluarNota() {

    // ========================================
    // 1. OBTENER LOS DATOS DEL HTML
    // ========================================

    const nombre = document.getElementById("nombre").value;

    const notaTexto = document.getElementById("nota").value;
    const nota = Number(notaTexto);


    // ========================================
    // 2. DECLARAR VARIABLES
    // ========================================

    let calificacion = "";
    let mensaje = "";


    // ========================================
    // 3. COMPROBAR QUE LA NOTA ES VÁLIDA
    // Esta parte ya está resuelta.
    // ========================================

    if (notaTexto.trim() === "" || nota < 0 || nota > 10) {

        document.getElementById("resultado").textContent =
            "Introduce una nota válida entre 0 y 10.";

        document.getElementById("mensaje").textContent = "";

        return;
    } /*fin de la funcion*/


    // ========================================
    // 4. TU TURNO: IF...ELSE IF...ELSE
    // ========================================

    /*
       Determina la calificación del alumno:

       Menos de 5     → Suspenso
       Desde 5 a < 6  → Suficiente
       Desde 6 a < 7  → Bien
       Desde 7 a < 9  → Notable
       Desde 9 a 10   → Sobresaliente

       Guarda el resultado en la variable
       calificacion que ya esta declarada. No la declares sólo evalua su nota. La nota te vendrá del HTML.

       Utiliza if, else if y else.
    */

  





    // ========================================
    // 5. TU TURNO: SWITCH
    // ========================================

    /*
       Según el valor de calificacion,
       guarda en la variable mensaje:

       Suspenso:
       "Necesitas seguir practicando."

       Suficiente:
       "Has conseguido aprobar."

       Bien:
       "Buen trabajo."

       Notable:
       "Muy buen resultado."

       Sobresaliente:
       "Excelente trabajo."

       Utiliza switch, case, break y default.
    */

    // ESCRIBE AQUÍ TU CÓDIGO
    





    // ========================================
    // 6. MOSTRAR RESULTADOS EN HTML
    // Esta parte ya está resuelta. Esta vez quiero que te concentres en la lógica de calificación y mensaje.
    // ========================================

    document.getElementById("resultado").textContent =
        nombre + ", has obtenido un " + calificacion +
        " con una nota de " + nota + ".";

    document.getElementById("mensaje").textContent = mensaje;

}

