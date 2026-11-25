// Sistema simulado de rastreo de envíos
const formularioRastreo = document.getElementById("formRastreo");
const numeroGuia = document.getElementById("numeroGuia");
const resultadoRastreo = document.getElementById("resultadoRastreo");

if (formularioRastreo && numeroGuia && resultadoRastreo) {

    formularioRastreo.addEventListener("submit", function (event) {

        event.preventDefault();

        const guia = numeroGuia.value.trim().toUpperCase();

        // Validar el formato de la guía
        const formatoValido = /^PY\d{8}CR$/;

        resultadoRastreo.hidden = false;

        if (!formatoValido.test(guia)) {

            resultadoRastreo.innerHTML = `
                <div class="mensaje-error">
                    <i class="bi bi-exclamation-circle"></i>
                    <h3>Número de guía inválido</h3>
                    <p>Ingresá un número con el formato PY12345678CR.</p>
                </div>
            `;

            return;
        }

        // Mostrar resultado simulado
        resultadoRastreo.innerHTML = `
            <div class="tarjeta-resultado">

                <i class="bi bi-box-seam icono-paquete"></i>

                <h2>¡Tu paquete está en camino!</h2>

                <p class="numero-guia">
                    Número de guía: <strong>${guia}</strong>
                </p>

                <span class="estado-envio">EN TRÁNSITO</span>

                <p class="descripcion-estado">
                    Tu paquete se encuentra en camino hacia su destino.
                    Pronto estará en tus manos.
                </p>

                <div class="progreso-envio">

                    <div class="paso completado">
                        <i class="bi bi-check-circle-fill"></i>
                        <span>Recibido</span>
                    </div>

                    <div class="linea-progreso"></div>

                    <div class="paso activo">
                        <i class="bi bi-truck"></i>
                        <span>En tránsito</span>
                    </div>

                    <div class="linea-progreso pendiente"></div>

                    <div class="paso pendiente">
                        <i class="bi bi-house"></i>
                        <span>Entregado</span>
                    </div>

                </div>

            </div>
        `;

    });
}