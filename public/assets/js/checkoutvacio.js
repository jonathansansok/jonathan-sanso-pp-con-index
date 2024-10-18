document.getElementById('contactFormNew').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Obtener los valores del formulario
    const userName = document.getElementById('userName').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();
    const userSubject = document.getElementById('userSubject').value.trim();
    const userMessage = document.getElementById('userMessage').value.trim();

    // Validación de campos
    if (userName === '' || userEmail === '' || userSubject === '' || userMessage === '') {
        alert('Por favor completa todos los campos.');
        return;
    }

    // Generar mensaje para enviar por WhatsApp
    const mensaje = `Hola, soy ${userName}. Quiero contactarme contigo sobre: "${userSubject}".\n\nMensaje: ${userMessage}\n\nCorreo: ${userEmail}`;

    // Número de teléfono al cual enviar el mensaje
    const telefono = "+5491130257638"; // Aquí puedes cambiar el número de teléfono

    // Codificar el mensaje para la URL de WhatsApp
    const whatsappURL = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    // Redirigir al usuario a WhatsApp con el mensaje
    window.open(whatsappURL, "_blank");
});