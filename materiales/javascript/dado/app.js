/*
 * REVISIÓN DIDÁCTICA DEL CUADERNO
 *
 * Esta es la solución trabajada en clase, conservada con sus nombres originales.
 * Ideas clave de esta práctica:
 * textContent escribe texto seguro; innerHTML se utiliza aquí para crear la estructura HTML dinámica del ejercicio.
 * Primero se seleccionan los elementos del HTML; después las funciones cambian su contenido o leen sus valores.
 * return entrega un resultado desde una función para utilizarlo donde se llamó.
 *
 * Estudia cada bloque, modifica un dato y observa qué parte de la página cambia.
 */
function lanzarDado() {
    let resultado = Math.floor(Math.random() * 6) + 1;
    if (resultado === 6) {
        document.getElementById("resultado").textContent =
            `¡Has sacado un 6! Has ganado 🎖️🎖️🎖️`;
         

    } else {
        document.getElementById("resultado").textContent =
            `Has sacado un ${resultado}. ¡Inténtalo otra vez!`;
    }

 
return resultado;

  
    
}

function actualizarHistorial(resultado) {
    let historial = document.getElementById("historial");
    historial.textContent += ` ${resultado}`;
}










   
