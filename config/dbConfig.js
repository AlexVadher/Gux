// src/config/dbConfig.js
const mysql = require('mysql2');

// Configura la conexión a tu base de datos MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Tu usuario de MySQL
  password: '', // Tu contraseña de MySQL
  database: 'parqueadero_db' // El nombre de tu base de datos
});

module.exports = pool.promise(); // Promesas para manejar las consultas asíncronas
