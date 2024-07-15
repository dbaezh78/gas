function registrar() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var placa = document.getElementById('placa').value;
    var galones = document.getElementById('galones').value;

    // Crear una fila de datos para el CSV
    var nuevaFila = nombre + ',' + placa + ',' + galones + '\n';

    // Llamar a la función para guardar en CSV
    guardarEnCSV(nuevaFila);

    // Limpiar los campos después de registrar
    document.getElementById('nombre').value = '';
    document.getElementById('placa').value = '';
    document.getElementById('galones').value = '';

    alert('Registro exitoso!');
}

function guardarEnCSV(data) {
    // Llamada a la API File System para escribir en un archivo CSV
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, 'registro.csv');

    fs.appendFile(filePath, data, (err) => {
        if (err) throw err;
        console.log('Datos agregados al archivo CSV');
    });
}
