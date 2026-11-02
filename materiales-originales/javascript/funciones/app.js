function comprobarEdad(edad) {

    edad = Number(document.getElementById("edad").value);

    if (edad >= 18) {
         document.getElementById("resultado").textContent = "Bienvenido puedes entrar🎉🎉🎉🎉🎉 ";
    } else {
         document.getElementById("resultado").textContent = "No puedes entrar❌❌❌❌❌❌ ";
    }
    
}