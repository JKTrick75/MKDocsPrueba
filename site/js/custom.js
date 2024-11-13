// js/custom.js

// Mensaje en la consola
console.log("¡Bienvenido a la documentación de Mi Proyecto!");

// Mostrar un alert al cargar la página
window.onload = function() {
    alert("¡Bienvenido a la documentación de Mi Proyecto! Navega a través de la documentación para aprender más.");
};

// Ejemplo de función para cambiar el color de fondo al hacer clic en un botón
function changeBackgroundColor() {
    document.body.style.backgroundColor = '#e0f7fa'; // Cambiar a un color claro
}

// Agregar un evento a un botón (asegúrate de que el botón exista en tu HTML)
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeColorButton");
    if (button) {
        button.addEventListener("click", changeBackgroundColor);
    }
});
