// Evento para mostrar la tarjeta de invitación al hacer clic en la Pokébola
document.getElementById('pokeball').addEventListener('click', function () {
    document.getElementById('pokeballContainer').classList.add('hidden');
    document.getElementById('card').classList.remove('hidden');
    // Seleccionar el elemento de audio
    const audio = document.getElementById('pokeAudio');
    // Reproducir el audio
    audio.play();
});

// Evento para confirmar asistencia
document.getElementById('confirmButton').addEventListener('click', function () {
    const trainerName = document.getElementById('trainerName').value;
    
    if (trainerName) { // Verifica que el nombre no esté vacío
        // Generar el mensaje de WhatsApp
        const mensaje = `Hola, soy ${trainerName} y confirmo mi asistencia al cumpleaños.`;
        // El número debe incluir el código de país (+57 para Colombia) y debe estar sin espacios o guiones
        const whatsappUrl = `https://wa.me/573218306918?text=${encodeURIComponent(mensaje)}`;

        // Abrir el enlace de WhatsApp en una nueva pestaña
        window.open(whatsappUrl, '_blank');
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});



