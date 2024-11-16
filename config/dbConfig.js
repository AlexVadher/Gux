// src/config/dbConfig.js
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config(); // carga las variables de entorno

// Configura la conexión a tu base de datos MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default pool.promise(); // Promesas para manejar las consultas asíncronas
