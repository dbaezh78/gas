function registrar() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var placa = document.getElementById('placa').value;
    var galones = document.getElementById('galones').value;

    // Validar que los campos no estén vacíos
    if (!nombre || !placa || !galones) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear un objeto con los datos
    var nuevoRegistro = {
        nombre: nombre,
        placa: placa,
        galones: galones
    };

    // Obtener los datos actuales del almacenamiento local (si existen)
    var registros = JSON.parse(localStorage.getItem('registros')) || [];

    // Agregar el nuevo registro
    registros.push(nuevoRegistro);

    // Guardar los datos actualizados en el almacenamiento local
    localStorage.setItem('registros', JSON.stringify(registros));

    // Limpiar los campos después de registrar
    document.getElementById('nombre').value = '';
    document.getElementById('placa').value = '';
    document.getElementById('galones').value = '';

    alert('Registro exitoso!');
    mostrarRegistros();
}

function mostrarRegistros() {
    // Obtener los registros del almacenamiento local
    var registros = JSON.parse(localStorage.getItem('registros')) || [];

    // Obtener el contenedor donde se mostrarán los registros
    var registrosContainer = document.getElementById('registrosContainer');
    registrosContainer.innerHTML = '';

    // Mostrar cada registro
    registros.forEach(function(registro, index) {
        var registroElement = document.createElement('div');
        registroElement.innerHTML = `<strong>${registro.nombre}</strong> - Placa: ${registro.placa}, Galones: ${registro.galones}`;
        registrosContainer.appendChild(registroElement);
    });
}

// Mostrar registros al cargar la página
window.onload = function() {
    mostrarRegistros();
};
