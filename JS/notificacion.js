// Envío del formulario de reclamos
const formularioReclamo = document.getElementById("formReclamo");
const notificacionReclamo = document.getElementById("notificacionSolicitud");

if (formularioReclamo && notificacionReclamo) {

    formularioReclamo.addEventListener("submit", function (event) {

        // Evita que se recargue la página
        event.preventDefault();

        // Muestra la notificación
        notificacionReclamo.hidden = false;

        // Limpia los campos del formulario
        formularioReclamo.reset();

        // Oculta la notificación después de 4 segundos
        setTimeout(function () {
            notificacionReclamo.hidden = true;
        }, 4000);

    });
}