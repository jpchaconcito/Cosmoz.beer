document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector('.carrusel');
    const opciones = document.querySelectorAll('.opcion');
    const flechaIzquierda = document.querySelector('.flecha-izquierda');
    const flechaDerecha = document.querySelector('.flecha-derecha');

    let indiceOpcionActual = 0;
    const cantidadOpciones = opciones.length;
    const anchoOpcion = opciones[0].offsetWidth;

    const actualizarCarrusel = () => {
        carrusel.style.transition = 'transform 0.5s ease-in-out';
        carrusel.style.transform = `translateX(${-anchoOpcion * indiceOpcionActual}px)`;
    };

    flechaIzquierda.addEventListener('click', () => {
        if (indiceOpcionActual > 0) {
            indiceOpcionActual--;
        } else {
            indiceOpcionActual = cantidadOpciones - 1;
        }
        actualizarCarrusel();
    });

    flechaDerecha.addEventListener('click', () => {
        if (indiceOpcionActual < cantidadOpciones - 1) {
            indiceOpcionActual++;
        } else {
            indiceOpcionActual = 0;
        }
        actualizarCarrusel();
    });

    const avanzarAutomatico = () => {
        if (indiceOpcionActual < cantidadOpciones - 1) {
            indiceOpcionActual++;
        } else {
            // Al llegar a la última opción, transición sin suavizar a la primera opción
            carrusel.style.transition = 'none';
            indiceOpcionActual = 0;
            actualizarCarrusel();
            // Restablece la transición suave después de volver a la primera opción
            setTimeout(() => {
                carrusel.style.transition = 'transform 0.5s ease-in-out';
            }, 0);
        }
        actualizarCarrusel();
    };

    setInterval(avanzarAutomatico, 10000);
});
