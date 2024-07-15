// Función para registrar los datos (sin manejo directo de CSV en el navegador)
function registrar() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var placa = document.getElementById('placa').value;
    var galones = document.getElementById('galones').value;

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
}
