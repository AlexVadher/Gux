import pool from '../config/dbConfig.js';
import bcrypt from 'bcrypt';

export class userModel {
    // Método para crear un usuario
    static async createUser(user) {
        try {
            const {
                nombre,
                apellido,
                documento,
                telefono,
                usuario,
                clave,
                id_rol,
            } = user;

            const password = await bcrypt.hash(clave, 10);

            console.log('Datos recibidos del controller: ', user); // depurar estilo junior XD

            const result = await pool.query(
                'INSERT INTO usuario (nombre, apellido, documento, telefono, usuario, clave, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [
                    nombre,
                    apellido,
                    documento,
                    telefono,
                    usuario,
                    password,
                    id_rol,
                ],
            );
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Método para actualizar un usuario
    static async updateUser(user) {
        try {
            const {
                id_usuario,
                nombre,
                apellido,
                documento,
                telefono,
                usuario,
                clave,
                id_rol,
            } = user;
            console.log('Datos recibidos del controller: ', user); // depurar estilo junior XD
            const result = await pool.query(
                'UPDATE usuario SET nombre = ?, apellido = ?, documento = ?, telefono = ?, usuario = ?, clave = ?, id_rol = ? WHERE id_usuario = ?',
                [
                    nombre,
                    apellido,
                    documento,
                    telefono,
                    usuario,
                    clave,
                    id_rol,
                    id_usuario,
                ],
            );
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Método para actualizar la contraseña de un usuario
    static async updatePassword(id, password) {
        try {
            const result = await pool.query(''); // ST por definir
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Método para eliminar un usuario
    static async deleteUser(id) {
        try {
            const result = await pool.query(''); // ST por definir
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Método para obtener todos los usuarios
    static async getUsers() {
        try {
            const result = await pool.query(''); // ST por definir
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Método para consultar un usuario por nombre de usuario
    static async getUserByUsername(username) {
        try {
            const result = await pool.query(''); // ST por definir
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}
export default userModel;
