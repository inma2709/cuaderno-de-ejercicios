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










   