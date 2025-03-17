import mysql from 'mysql2/promise';

// Configuración directa para MariaDB
export const db = mysql.createPool({
    host: '127.0.0.1',       // Servidor de MariaDB (generalmente localhost)
    user: 'root',            // Usuario de MariaDB
    password: 'pezcadofrito.1', // Contraseña del usuario
    database: 'agrivoltaica_db', // Nombre de la base de datos
});

// Prueba la conexión
db.getConnection()
    .then(() => {
        console.log('Conexión a MariaDB exitosa');
    })
    .catch((err) => {
        console.error('Error al conectar a MariaDB:', err);
    });