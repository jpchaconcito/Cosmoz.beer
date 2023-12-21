// Obtén la barra de navegación
var header = document.querySelector('header');

// Guarda la posición actual de scroll
var prevScrollPos = window.pageYOffset;

// Añade un listener para el evento de scroll
window.onscroll = function() {
    // Obtiene la posición actual de scroll
    var currentScrollPos = window.pageYOffset;

    // Verifica la dirección del scroll
    if (prevScrollPos > currentScrollPos) {
        // Muestra la barra de navegación al hacer scroll hacia arriba
        header.style.top = "0";
    } else {
        // Oculta la barra de navegación al hacer scroll hacia abajo
        header.style.top = "-60px"; // Ajusta la altura de la barra según tus necesidades
    }

    // Actualiza la posición de scroll
    prevScrollPos = currentScrollPos;
};
