document.addEventListener('DOMContentLoaded', () => {
    // 1. Evento Click
    const admiro = document.getElementById('admiro');
    admiro.addEventListener('click', () => {
        admiro.querySelector('p').textContent = 'Jesus, no por religion si no por los mensajes que le dejo al mundo.';
    });

    // 2. Evento Mouseover
    const meta = document.getElementById('meta');
    meta.addEventListener('mouseover', () => {
        meta.querySelector('p').textContent = 'Quiero poder graduarme para ganar dinero y enorgullecer a mis padres.';
    });
    meta.addEventListener('mouseout', () => {
        meta.querySelector('p').textContent = 'Pasa el mouse para ver.';
    });

    // 3. Evento Mouseover para "Género musical favorito" que muestra una alerta
    const musica = document.getElementById('musica');
    musica.addEventListener('mouseover', () => {
        alert('Mi género musical favorito es el Rock.');
    });

    // 4. Evento Click con Mostrar/Ocultar
    const botonMostrar = document.getElementById('botonMostrar');
    botonMostrar.addEventListener('click', () => {
        const texto = document.getElementById('imprescindibleTexto');
        texto.classList.toggle('d-none');
    });

    // 5. Evento Doble Clic
    const talento = document.getElementById('talento');
    talento.addEventListener('dblclick', () => {
        talento.querySelector('p').textContent = 'Pues podria considerarse cantar(creo).';
    });

    // 6. Evento Keydown para "Animal favorito"
    const animal = document.getElementById('animal');
    document.addEventListener('keydown', () => {
        animal.querySelector('p').textContent = 'el Perro';
    });
});
